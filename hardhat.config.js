/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
const ALCHEMY_API_KEY="55925076b72f482dbe1227a84af64a40";

const goerli="f4ca3d333356e265eacd6eff3034324489ceddc8d2335555473e6281c7aaca73";
module.exports = {
  solidity: "0.7.3",
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: 'J4KD1JCRADFTXQUV3EWIF4BFRB2XWI13Y4',
  },
  networks:{
    localhost:{
      url:"http://localhost:8545"
    },
    goerli:{
      url:`https://goerli.infura.io/v3/${ALCHEMY_API_KEY}`,
      accounts:[`${goerli}`]
    },
  }
};
