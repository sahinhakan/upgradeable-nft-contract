//test/UpgradeableNFT.proxy.js
//Load dependencies
const { expect } = require('chai');

let Box;
let box;

//Start test block
describe('UpgradeableNFT (proxy)', function () {
  beforeEach(async function (){
    UNFT = await ethers.getContractFactory("UpgradeableNFT")
    unft = await upgrades.deployProxy(UNFT, [], { initializer: 'initialize' });
  })

  //test case
  it('mint an nft', async function(){
    await unft.mintNFT(1, "Genesis NFT", 9);
    nft = await unft._tokenOwners(1);
    console.log(nft);
    expect(nft.name).to.equal('Genesis NFT');
  })

  it('get owner by ID', async function(){
    await unft.mintNFT(1, "Genesis NFT", 9);
    nft = await unft._tokenOwners(1);
    console.log(nft);
    expect(nft.name).to.equal('Genesis NFT');

    ownerAddress = (await unft.ownerOf(1)).toString()
    expect(ownerAddress).to.equal('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266');
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
