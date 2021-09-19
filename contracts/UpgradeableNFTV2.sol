//SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.4;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";

contract UpgradeableNFTV2 is ERC721Upgradeable{

    address public owner;
    
    //this function will be use as constructor method
    //await upgrades.deployProxy(UpgradeableNFT, [], { initializer: 'initialize' })
    function initialize() initializer public {
        __ERC721_init("UpgradeableNFT", "UNFT");
        owner = msg.sender;
    }

    struct NFT {
        string  name;
        uint256 level;
        address ownerAddress;
    }

    mapping(uint256 => NFT) public _tokenOwners;


    function mintNFT(uint256 id, string memory name, uint256 level) public {
        //require(owner == msg.sender, "Only the owner can create NFT");
        _tokenOwners[id] = NFT(name, level, msg.sender);
        _mint(msg.sender, id);
    }

    //this function comes with v2
    function levelUp(uint256 id) public {
        require(owner == msg.sender, "Only the contract owner can level up");
        _tokenOwners[id].level += 1;
    }

    //we can use ERC721 transferFrom function
    /* function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public virtual override {} */

}

