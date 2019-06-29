import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';

class RequestRow extends Component {
  // Defining function which contains the logic to approve a given request
  onApprove = async () => {
    const campaign = Campaign(this.props.address);

    const accounts = await web3.eth.getAccounts();
    await campaign.methods.approveRequest(this.props.id)
      .send({ from: accounts[0] });
  };

  onFinalize = async () => {
    const campaign = Campaign(this.props.address);

    const accounts = await web3.eth.getAccounts();
    await campaign.methods.finalizeRequest(this.props.id)
      .send({ from: accounts[0] })
  };

  render() {
    // ONly probably care about `Row` and `Cell` from `Table` object.
    const { Row, Cell } = Table;
    // Destructuring to shorthand expression of `this.props`
    const { id, request, approversCount } = this.props;
    // looks
    const readyToFinalize = request.approvalCount > approversCount / 2;
    // Inside of `Row` component is going to be a collection of different cells
    // where each cell represents one different property of a request.
    return (
      // `disabled={request.complete}` is used to grey approval requests that
      // have already been finalized.
      <Row disabled={request.complete} positive={readyToFinalize && !request.complete}>
        <Cell>{id}</Cell>
        <Cell>{request.description}</Cell>
        <Cell>{web3.utils.fromWei(request.value, 'ether')}</Cell>
        <Cell>{request.recipient}</Cell>
        <Cell>{request.approvalCount}/{approversCount}</Cell>
        <Cell>
          {request.complete ? null : (
          // if requests.complete is `true`, return the value `null`
          // if requests.complete is `false`, return the entire button below.
          <Button color="green" basic onClick={this.onApprove}>Approve
          </Button>
          )}
        </Cell>
        <Cell>
          {request.complete ? null : (
            // if requests.complete is `true`, return the value `null`
            // if requests.complete is `false`, return the entire button below.
            <Button color="teal" basic onClick={this.onFinalize}>Finalize</Button>
          )}
        </Cell>
      </Row>
    );
  }
}

export default RequestRow;
