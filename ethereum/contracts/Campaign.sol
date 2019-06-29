pragma solidity ^0.4.17;

contract CampaignFactory {
    // declare new variable to store all of the new deployed Campaigns
    address[] public deployedCampaigns;

    // Insert function argument into 'createCampaign' to denote the minimum contributon that
    // is needed to deploy a new Campaign
    // This creates a new contract that gets deployed to the blockchain,
    // and after that deployment occurs, it returns the address of the newly created
    // Campaign so we can store that newly created address in a local variable and then add it
    // to the deployed campaigns array.
    function createCampaign(uint minimum) public {
        // Instruct the constructor to deploy a new instance of Campaign,
        // then, provide any constructor arguments that this declaration requires,
        // hence, 'minimum' contributon

        // 'msg.sender' is the user that is trying to create a newCampaign
        address newCampaign = new Campaign(minimum, msg.sender);
        deployedCampaigns.push(newCampaign);
    }

    // Modifiers:
    //    public  =  anyone can call this function on the blockchain
    //    view    =  no data inside the contract is modified
    //    returns =  means we are going to return a value of type address array
    // This is a function to return the list of all campaigns that have been created.
    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}

contract Campaign {
    // When placing a struct, we are introducing
    // a new type into our contract,
    // A type is a definition and not an instance
    // of a variable.
    // When we eventually want to make a request,
    // we will make a new variable and specify
    // that it's type is Request.
    struct Request {
        // listing the variable's type
        string description;
        uint value;
        address recipient;
        bool complete;
        // tracks which votes have been approved
        // we're going to make a check that there are a number of approvers that
        // are greater than say 50% of the number of approvers that are say
        // in the contract.
        // So, if the 'approvalCount' gets over 50%, then we're going to say that the request is
        // valid and should be approved

        // We don't have to include the number of 'no' votes, only need to
        // record the number of 'yes' votes
        uint approvalCount;
        // all of the above are value types, which need to be instantiated

        // Mapping that will kep track whether someone has voted on a given request
        mapping(address => bool) approvals;  // this is a reference type, and we do not need to initialize a reference type
    }

    // Making a new array and specifying its type
    // as Request
    Request[] public requests;
    // Want people to know who the manager is as it
    // instills more confidence in the users
    address public manager;
    uint public minimumContribution;
    // initializing the approvers variable as an array
    // of addresses
    // address[] public approvers;   Refactoring this to the following mapping below
    mapping(address => bool) public approvers;
    // If we want to keep track of how many people are in this mapping,  we have to create a second variable or another state variable,
    // to keep track of how many people have joined in this contract.

    // So, every time someone joins our Campaign we are going to increment the approversCount.
    uint public approversCount;

    modifier restricted() {
        require(msg.sender == manager);
        // we mark where we want our code to be
        // virtually pasted
        _;
    }

    // Whenever someone calls the Campaign() function
    // they're required to provide a minimum
    // contribution

    // 'creator' is the address of the person who is trying to create the new contract.
    function Campaign(uint minimum, address creator) public payable  {
        // Recall that the '.sender' property is always
        // available to us and describes exactly who is
        // attempting to create the contract
        manager = creator;
        minimumContribution = minimum;
    }

    // 'payable' keyword   what lets this function
    // receive some amount of money.
    function contribute() public payable {
        // Making sure that the user is sending in an
        // amount of money greater than minimum
        // where 'msg.value' is the amount in Wei
        require(msg.value > minimumContribution);

        // Adding user onto our approvers list.
        // Address of the user who is sending in
        // this transaction,  which is coming from
        // our global variable message
        // approvers.push(msg.sender);      Refactor:  PUsh is a method only available to arrays and not to mappings

        // Adding a new key, of this, 'msg.sender', address to the 'approvers' mapping
        // and gives it a value of true
        // However, recall that this address does not get stored inside the mapping.
        approvers[msg.sender] = true;

        // After we add that approvers' address to our mapping, we'll increment the approvers count variable by
        // saying:
        approversCount++;
    }

    // We want the function to be public because it
    // should be callable from an external account.
    // We also want to lock the function down by using
    // the 'restricted' modifier.
    function createRequest(string description, uint value, address recipient) public restricted {
        // Code that will create the new requests
        // We are creating a brand new Request variable in 'memory'
        // 'Request' is pointing to 'newRequest', and thus, this new variable
        // cannot point to a variable in storage because it doesn't
        // exist in storage.
        Request memory newRequest = Request({
           // placing collection of key: value pairs that specify:
           description: description,
           value: value,
           recipient: recipient,
           complete: false,
           approvalCount: 0
        });

        requests.push(newRequest);
    }

    // Provide an arguemnt that specifies which request that we're attempting to make a Request on:
    function approveRequest(uint index) public {
        // The line below is used to remove the ugly instances of 'requests[index]' for cleaner code
        Request storage request = requests[index];

        // requiring that inside approvers mapping, if we pass in 'msg.sender', we should get back a boolean of true
        // if we get back 'false', then this function will exit instantly.
        require(approvers[msg.sender]);
        // add in another require statement to make sure that this person has not made a 'Request' before
        // Recall: the 'Requests' struct has the 'approvals' mapping that records whether or not a given address has voted on this thing yet.
        // So, access 'approvals' property and check to see if the address of this sender has been added to the mapping --> hence,  '.approvals[msg.sender]'
        // The '!' exclamation point is used to specify that you cannot vote a second time.
        require(!request.approvals[msg.sender]);

        // Check that this person has been marked as having voted on this particular request.
        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    // Function to finalizeRequest, i.e. get the requests paid out to the vendor.
    // Adding the 'restricted' modifier because we only want the manager to use this function.
    // To specialize which request the caller of the function is trying to finalize, we use a argument to the function, just as we did with 'approveRequest'
    function finalizeRequest(uint index) public restricted {
        // Reaching into the request mapping several times (tedious), so we create another local variable to make code and typing easier
        Request storage request = requests[index];

        // If we have say 50 contract contributors, 26 of those people must approve the request before it can be relases/
        // Recall that 'approvalCount' is a value type of the 'Request' struct.
        require(request.approvalCount > (approversCount / 2));

        // First test to check that the request is not finalized:
        // Utilizing the requests struct value type '.complete'
        // Specifying the not '!' identifier to flip the require statement false when the request is still in progress.
        require(!request.complete);

        // Take the money that is specified inside of the request and attempt to send it to the recipient.
        request.recipient.transfer(request.value);

        // Update the flag to true after paying the recipient
        request.complete = true;
    }

    function getRequestsCount() public view returns (uint256) {
        return requests.length;
    }
    // Function to return summary of contract contents to save
    // us number of callbacks necessary to obtain useful contract info
    function getSummary() public view returns (
        uint, uint, uint, uint, address
        ) {
            return (
                minimumContribution,
                this.balance,           // reference to the contract itself
                requests.length,        // all of our requests are stored in an array called requests
                approversCount,         // approvers are stored in a mapping, called approversCount
                manager
            );
    }
}
