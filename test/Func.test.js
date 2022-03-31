const Func = artifacts.require('Func');

contract('Func', ([account1, account2])=>{
  let instance;
  describe('test Func.sol', ()=>{
    beforeEach(async ()=>{
      instance = await Func.new();
    });

    it('check add func', async ()=>{
      const result = await instance.add(2, 3);
      assert.equal('5', result.toString());
    });

    it('check inc func', async ()=>{
      const result = await instance.inc();
      const num = await instance.num();
      assert.equal(num.toNumber()+1, result.toNumber());
    });
  });
});
