import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

// Creating instance that refers to the specific address that we already
// deployed our contract to, and export it from this file
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  // Providing the address that we already deployed our CampaignFactory to
  '0xf3bAfce61dCd5840680814AAD735A57DD36f8eBB'
);

export default instance;
