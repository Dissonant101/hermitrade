//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Deals {
    event DealEvent(
        address from,
        uint256 timestamp,
        uint256 price,
        string email,
        string item,
        string description,
        string imageUrl
    );

    struct DealStruct {
        address from;
        uint256 timestamp;
        uint256 price;
        string email;
        string item;
        string description;
        string imageUrl;
    }

    uint256 dealCount = 0;
    DealStruct[] unboughtDeals;

    function postDeal(
        uint256 price,
        string memory email,
        string memory item,
        string memory description,
        string memory imageUrl
    ) public {
        unboughtDeals.push(
            DealStruct(
                msg.sender,
                block.timestamp,
                price,
                email,
                item,
                description,
                imageUrl
            )
        );
        dealCount++;
        emit DealEvent(
            msg.sender,
            block.timestamp,
            price,
            email,
            item,
            description,
            imageUrl
        );
    }

    function getDeals() public view returns (DealStruct[] memory) {
        return unboughtDeals;
    }

    function getNumDeals() public view returns (uint256) {
        return dealCount;
    }
}
