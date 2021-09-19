//SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.4;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";

contract UpgradeableNFT is ERC721Upgradeable{

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

    //we can use ERC721 transferFrom function
    /* function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public virtual override {} */

}

