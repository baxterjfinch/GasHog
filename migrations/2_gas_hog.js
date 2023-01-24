const GasHog = artifacts.require("GasHog");

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(GasHog);
  let contract = await GasHog.deployed();
  for (i = 0; i < 20; i++) {
    contract.hogMeSomeGas(3)
  }
}
