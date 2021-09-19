//test/UpgradeableNFT.proxy.js
//Load dependencies
const { expect } = require('chai');

let Box;
let box;

//Start test block
describe('UpgradeableNFTV2 (proxy)', function () {
  beforeEach(async function (){
    UNFT = await ethers.getContractFactory("UpgradeableNFTV2")
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

  it('mint an nft and then level up', async function(){
    await unft.mintNFT(1, "Genesis NFT", 4);
    await unft.levelUp(1);
    nft = await unft._tokenOwners(1);
    console.log(nft);
    expect(nft.level).to.equal(5);

  })
})
