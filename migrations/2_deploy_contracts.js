const HelloWorld = artifacts.require('HelloWorld');
const ValueTypes = artifacts.require('ValueTypes');
const Func = artifacts.require('Func');
const Loops = artifacts.require('Loops');
const ErrorHandling = artifacts.require('ErrorHandling');
const FuncModifier = artifacts.require('FuncModifier');

module.exports = function(deployer) {
  deployer.deploy(HelloWorld);
  deployer.deploy(ValueTypes);
  deployer.deploy(Func);
  deployer.deploy(Loops);
  deployer.deploy(ErrorHandling);
  deployer.deploy(FuncModifier);
};
