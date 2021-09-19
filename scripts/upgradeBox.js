// scripts/upgrade.js
async function main() {
    const proxyAddress = '0xA888E3706a831F806962B09dc0BBC06008435984';
   
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    const box = await upgrades.upgradeProxy(proxyAddress, BoxV2);
    console.log("Box is upgraded ! Proxy Address: ", box.address);
  }
   
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });