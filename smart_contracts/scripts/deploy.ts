import { ethers } from "hardhat";

const main = async () => {
  const DealsContract = await ethers.getContractFactory("Deals");
  const dealsContract = await DealsContract.deploy();

  await dealsContract.deployed();

  console.log("Deals deployed to:", dealsContract.address);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

runMain();
