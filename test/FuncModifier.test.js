const FuncModifier = artifacts.require('FuncModifier');

contract('FuncModifier', ([owner, account2]) => {
  let instance;
  describe('testing function modifiers', () => {
    beforeEach(async () => {
      instance = await FuncModifier.new();
    });

    it('test inc func when isPaused is true', async () => {
      await instance.setPause(true); // the default account is owner account
      let errorOccured = true;
      try {
        await instance.inc();
        errorOccured = false;
        assert.ok(false);
      } catch (err) {
        assert.equal(true, errorOccured);
      }
    });

    it('test inc func when isPaused is false', async () => {
      await instance.setPause(false);
      const countBefore = await instance.count();
      await instance.inc();
      const countAfter = await instance.count();
      assert.equal(countBefore.toNumber() + 1, countAfter.toNumber());
    });

    it('test dec func when isPaused is true', async () => {
      await instance.setPause(true); // the default account is owner account
      let errorOccured = true;
      try {
        await instance.dec();
        errorOccured = false;
        assert.ok(false);
      } catch (err) {
        assert.equal(true, errorOccured);
      }
    });

    it('test dec func when isPaused is false', async () => {
      await instance.setPause(false);
      await instance.inc(); // uint doesnt have negative numbers so error will be thrown so lets make our count to 1 and then run dec()
      const countBefore = await instance.count();
      await instance.dec();
      const countAfter = await instance.count();
      assert.equal(countBefore.toNumber() - 1, countAfter.toNumber());
    });

    it('owner is able to call setPause function', async () => {
      await instance.setPause(true, {from: owner});
      const result = await instance.isPaused();
      assert.equal(true, result);
    });

    it('setPause can be called by owner only', async () => {
      let errorOccured = true;
      try {
        await instance.setPause(true, {from: account2});
        errorOccured = false;
        assert.ok(false);
      } catch (err) {
        assert.equal(errorOccured, true);
      }
    });
  });
});
