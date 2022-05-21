import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";

export default {
  solidity: "0.8.0",
  networks: {
    goerli: {
      // The alchemy thing
      url: 'https://eth-goerli.alchemyapi.io/v2/RO8InixuAo8hyNEI4XMil8OclKsQD8St',
      // Jay's private key
      accounts: ['d591ba41bc25825b0e4fd1d32d947fd8afeb008dfc3131fc4758718c522694b5']
    }
  }
};
