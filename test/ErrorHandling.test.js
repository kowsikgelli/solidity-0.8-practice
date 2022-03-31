const ErrorHandling = artifacts.require("ErrorHandling");

contract('ErrorHandling',()=>{
    describe('testing require revert assert and custom error',()=>{
        let instance;
        beforeEach(async()=>{
            instance = await ErrorHandling.new();
        })

        it('require test less than 10',async()=>{
            const result = await instance.lessThanTenRequire(5);
            assert.equal(true,result);
        })

        it('require test greater than 10',async()=>{
            try{
                await instance.lessThanTenRequire(19);
                assert.ok(false);
            }catch(err){
                assert.ok(true)
            }
        })

        it("revert test less than 10", async () => {
          const result = await instance.lessThanTenRevert(5);
          assert.equal(true, result);
        });

        it("revert test greater than 10", async () => {
          try {
            await instance.lessThanTenRevert(19);
            assert.ok(false);
          } catch (err) {
            assert.ok(true)
          }
        });

        it('assert test',async()=>{
            assert.equal(true,await instance.isNum());
        })

        it('assert should thow error after increasing the num',async()=>{
            try{
                await instance.setNum(3);
                await instance.isNum();
                assert.ok(false);
            }catch(err){
                assert.ok(true);
            }
        })

        it('checking state variable after revert',async()=>{
            try{
                await instance.checkNumStateAfterRevert();
                assert.ok(false);
            }catch(err){
                assert.ok(true);
            }
        })
    })
}) 