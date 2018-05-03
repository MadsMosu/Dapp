import ethers from 'ethers';
import network from './network';

const provider = ethers.providers.getDefaultProvider(network);

export default provider;