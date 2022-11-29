import 'solidity-docgen';
import {HardhatUserConfig} from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      { version: "0.8.9" }
    ]
  },
  paths: {
    sources: 'lib',
  },
  docgen: {
    outputDir: "./docs",
    collapseNewlines: true,
  },
};

module.exports = config;