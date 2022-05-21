//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Deals {
    event DealEvent(
        address from,
        uint256 timestamp,
        uint256 price,
        string email,
        string description,
        string imageUrl
    );

    struct DealStruct {
        address from;
        uint256 timestamp;
        uint256 price;
        string email;
        string description;
        string imageUrl;
    }

    uint256 dealCount = 0;
    DealStruct[] unboughtDeals;

    function addDeal(
        uint256 price,
        string memory email,
        string memory description,
        string memory imageUrl
    ) public {
        unboughtDeals.push(
            DealStruct(
                msg.sender,
                block.timestamp,
                price,
                email,
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
