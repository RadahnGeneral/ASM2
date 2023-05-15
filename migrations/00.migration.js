const myContract = artifacts.require("Auction.sol");

module.exports = function (deployer) {
  deployer.deploy(myContract);
};
