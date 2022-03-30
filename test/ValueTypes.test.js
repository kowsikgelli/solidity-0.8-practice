const ValueTypes = artifacts.require("ValueTypes");

contract("ValueTypes", async () => {
  let instance;
  describe("checking value types", () => {
    beforeEach(async () => {
      instance = await ValueTypes.new();
    });

    it("check variable a value", async () => {
      const a = await instance.a();
      assert.equal("34", a.toString());
    });

    it("check boolean isContract", async () => {
      const isContract = await instance.isContract();
      assert.equal(true, isContract);
    });

    it("check minInt", async () => {
      const minInt = await instance.minInt();
      assert.equal(
        "-57896044618658097711785492504343953926634992332820282019728792003956564819968",
        minInt.toString()
      );
    });

    it("check maxInt", async () => {
      const maxInt = await instance.maxInt();
      assert.equal(
        "57896044618658097711785492504343953926634992332820282019728792003956564819967",
        maxInt.toString()
      );
    });

    it("check minUint", async () => {
      const minUint = await instance.minUint();
      assert.equal("0", minUint.toString());
    });

    it("check maxUint", async () => {
      const maxUint = await instance.maxUint();
      assert.equal(
        "115792089237316195423570985008687907853269984665640564039457584007913129639935",
        maxUint.toString()
      );
    });

    it("check variable b", async () => {
      const b = await instance.b();
      console.log(b.toString());
      assert.equal('-4', b.toString());
    });
  });
});
