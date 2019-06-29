const path = require('path');
const solc = require('solc');
// 'fs' module is apart of the node standard library
// 'fs' stands for filesystem and it gives us access to the file system on our
// local computer
const fs = require('fs-extra');
// '__dirname' gets us into our ethereum directory and to run the build script
// we pass the desired 'build' folder
const buildPath = path.resolve(__dirname, 'build');
// 'removeSync' looks at everything inside the specified folder and deletes it,
// including the folder itself
fs.removeSync(buildPath);

// Reading in the 'Campaign.sol' file from the 'contracts' folder
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
// Reading in the source code file, passing in the Campaign.sol path and
// specifying the encoding in that file: obtaining the file's contents
const source = fs.readFileSync(campaignPath, 'utf-8');
// Using solidity compiler to pull out everything from that file
// The only property that we care about that is coming off of this compile
// process is the contracts property -- we only care about the contracts we
// just compiled
const output = solc.compile(source, 1).contracts;

// checks to see if a directory exists and if it doesn't this function creates
// it for us
fs.ensureDirSync(buildPath);

// Now loop over output object, take each contract that exists inside there
// and write to a different file inside of our build directory
for (let contract in output) {
  let name = contract.replace(':', '');
  fs.outputJsonSync(
    // pass in 'buildPath' and then the file name that we pulled out of the
    // output object, which is 'contract', and make sure the file has a
    // '.json' file extension
    path.resolve(buildPath, name + '.json' ),
    output[contract]
  );
}
