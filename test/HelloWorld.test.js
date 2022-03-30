const HelloWorld = artifacts.require('HelloWorld');

contract('HelloWorld', ()=>{
  it('message value should be Hello World', async ()=>{
    const instance = await HelloWorld.new();
    const message = await instance.message();
    assert(message == 'Hello World');
  });
});
