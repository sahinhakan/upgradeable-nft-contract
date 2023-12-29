//const { ethers, upgrades } = require("hardhat");

async function main (){
    const UNFT = await ethers.getContractFactory("UpgradeableNFT");
    console.log("Deploying proxy, implementation, and proxy admin...");
    const unftProxy = await upgrades.deployProxy(UNFT, [], { initializer: 'initialize' })
    
    console.log("UpgradeableNFTProxy deployed to: ", unftProxy.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
