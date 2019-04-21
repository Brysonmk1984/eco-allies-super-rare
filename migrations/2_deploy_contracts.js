const AllyCore = artifacts.require("AllyCore");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(AllyCore);
};
