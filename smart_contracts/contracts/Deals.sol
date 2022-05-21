//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Deals {
    struct DealStruct {
        address from;
        uint256 timestamp;
        uint256 id;
        uint256 price;
        string email;
        string item;
        string description;
        string imageUrl;
    }

    uint256 dealCount = 0; // Used as the deal id
    mapping(uint256 => DealStruct) public unboughtDeals;
    uint256[] public dealIds;

    function postDeal(
        uint256 price,
        string memory email,
        string memory item,
        string memory description,
        string memory imageUrl
    ) public {
        unboughtDeals[dealCount] = DealStruct(
            msg.sender,
            block.timestamp,
            dealCount,
            price,
            email,
            item,
            description,
            imageUrl
        );
        dealIds.push(dealCount);
        dealCount++;
    }

    function removeDeal(uint256 id) public {
        delete unboughtDeals[id];
        for (uint32 i = 0; i < dealIds.length; i++) {
            if (dealIds[i] == id) {
                dealIds[i] = dealIds[dealIds.length - 1];
                dealIds.pop();
                return;
            }
        }
    }

    function getDealIds() public view returns (uint256[] memory) {
        return dealIds;
    }

    function getDeals() public view returns (DealStruct[] memory) {
        DealStruct[] memory deals = new DealStruct[](dealIds.length);
        for (uint32 i = 0; i < dealIds.length; i++) {
            deals[i] = unboughtDeals[dealIds[i]];
        }
        return deals;
    }

    function getNumDeals() public view returns (uint256) {
        return dealIds.length;
    }
}
