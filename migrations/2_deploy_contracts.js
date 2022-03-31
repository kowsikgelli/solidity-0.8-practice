const HelloWorld = artifacts.require('HelloWorld');
const ValueTypes = artifacts.require('ValueTypes');
const Func = artifacts.require('Func');

module.exports = function(deployer) {
  deployer.deploy(HelloWorld);
  deployer.deploy(ValueTypes);
  deployer.deploy(Func);
};
