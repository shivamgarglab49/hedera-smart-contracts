require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  mocha: {
    timeout: 3600000,
    color: true,
    failZero: Boolean(process.env.CI),
    forbidOnly: Boolean(process.env.CI),
    reporter: "mocha-multi-reporters",
    reporterOption: {
      "reporterEnabled": "spec, mocha-junit-reporter",
      "mochaJunitReporterReporterOptions": {
        mochaFile: "test-results.[hash].xml",
        "includePending": true,
        "outputs": true
      }
    }
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 500,
      },
    },
  },
  defaultNetwork: "relay",
  networks: {
    relay: {
      url: "http://localhost:7546",
      accounts: [
        "0x2e1d968b041d84dd120a5860cee60cd83f9374ef527ca86996317ada3d0d03e7",
        "0x45a5a7108a18dd5013cf2d5857a28144beadc9c70b3bdbd914e38df4e804b8d8",
      ],
      chainId: 298,
    },
  },
};
