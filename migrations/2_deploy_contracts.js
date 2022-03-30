const HelloWorld = artifacts.require("HelloWorld");
const ValueTypes = artifacts.require("ValueTypes");

module.exports = function (deployer) {
  deployer.deploy(HelloWorld);
  deployer.deploy(ValueTypes);
};
