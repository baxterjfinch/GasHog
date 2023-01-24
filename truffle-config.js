require("dotenv").config();
const HDWalletProvider = require("truffle-hdwallet-provider");
const web3 = require("web3");

const mnemonic = process.env.MNEMONIC;

module.exports = {
  plugins: ["truffle-security", "solidity-coverage"],
  networks: {
    // Quick dev using local ganache @port 7545
    besu: {
      provider: () =>
        new HDWalletProvider(
          process.env.SAGA_GAME_KEY,
          `http://127.0.0.1:8541`
        ),
      network_id: "*",
      gas: 5242880,
    },
  },

  mocha: {
    useColors: true,
    reporter: "eth-gas-reporter",
    reporterOptions: { currency: "USD" },
  },
  // Configuring compiler
  compilers: {
    solc: {
      version: "0.8.15",
      docker: false,
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
};
