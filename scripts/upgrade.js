// scripts/upgrade.js
async function main() {
    const proxyAddress = '0x23E73461dAF77e7636ADdb1Cc7a6eF27fD4c60af';
   
    const unftv2 = await ethers.getContractFactory("UpgradeableNFTV2");
    const unftproxy = await upgrades.upgradeProxy(proxyAddress, unftv2);
    console.log("UpgradeableNFT contract is upgraded ! Proxy Address: ", unftproxy.address);
  }
   
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });