//test/Box.proxy.js
//Load dependencies
const { expect } = require('chai');

let Box;
let box;

//Start test block
describe('Box (proxy)', function () {
  beforeEach(async function (){
    Box = await ethers.getContractFactory("Box")
    box = await upgrades.deployProxy(Box, [42], { initializer: 'store' });
  })

  //test case
  it('retrieve returns a value previously initialized', async function(){
    //test if the retured value is the same one
    //note that we need to use strings to compare the 256 bit integers
    expect((await box.retrieve()).toString()).to.equal('42');
  })
})

/* const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
}); */
