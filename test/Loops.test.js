const Loops = artifacts.require('Loops');

contract('Loops', ()=>{
  describe('For and While Loops', async ()=>{
    let instance;
    beforeEach(async ()=>{
      instance = await Loops.new();
    });

    it('forAndWhile test', async ()=>{
      const result = await instance.forAndWhile();
      assert.equal('7', result[0].toString());
      assert.equal('10', result[1].toString());
    });

    it('sum of n', async ()=>{
      const result = await instance.nSum(10);
      assert.equal('55', result.toString());
    });
  });
});
