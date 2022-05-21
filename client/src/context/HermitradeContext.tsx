import { createContext, useState } from "react";
import { ethers } from "ethers";
import { contractAbi, contractAddress } from "../utils/constants";
import { Deal } from "../@types/Deal";

const { ethereum } = window;

const createEthereumContract = () => {
	const provider = new ethers.providers.Web3Provider(ethereum);
	const signer = provider.getSigner();
	const transactionsContract = new ethers.Contract(
		contractAddress,
		contractAbi,
		signer
	);

	return transactionsContract;
};

export const HermitradeContext = createContext({}) as any;

export const HermitradeContextProvider = ({ children }: { children: any }) => {
	const [currentAccount, setCurrentAccount] = useState("");
	const [deals, setDeals] = useState<Deal[]>([]);

	const connectWallet = async () => {
		try {
			if (!ethereum) return alert("Please install MetaMask.");

			const accounts: string[] = await ethereum.request({
				method: "eth_requestAccounts",
			});
			console.log("Wallet connected: " + accounts[0]);
			setCurrentAccount(accounts[0]);
			await getDeals();
		} catch (error) {
			console.log(error);

			throw new Error("No ethereum object");
		}
	};

	const sendMoney = async (addressTo: string, amount: string) => {
		await ethereum.request({
			method: "eth_sendTransaction",
			params: [
				{
					from: currentAccount,
					to: addressTo,
					gas: "0x5208",
					value: ethers.utils.parseEther(amount)._hex,
				},
			],
		});
	};

	const getDeals = async () => {
		console.log("Fetching deals");
		const contract = createEthereumContract();
		const fetchedDeals = ((await contract.getDeals()) as any[]).map(
			(d: any) =>
			({
				address: d.from,
				timestamp: d.timestamp,
				price: d.price,
				email: d.email,
				item: d.item,
				description: d.description,
				imageUrl: d.imageUrl,
			} as Deal)
		);
		fetchedDeals.push({
			address: "mom",
			timestamp: 530267476,
			price: 24,
			email: "jay.jrjren@gmail.com",
			item: "bear paw",
			description: "idk",
			imageUrl:
				"https://i5.walmartimages.ca/images/Enlarge/473/991/6000203473991.jpg",
		});
		console.log(fetchedDeals);
		setDeals(fetchedDeals);
	};

	const postDeals = async (
		email: string,
		item: string,
		description: string,
		price: string,
		url: string
	) => {
		const contract = createEthereumContract();
		await contract.postDeal(
			Math.trunc(parseFloat(price) * 1000),
			email,
			item,
			description,
			url
		);
		await getDeals();
	};

	// MAKE SURE YOU PUT ANY STATE STUFF DOWN BELOW!!
	return (
		<HermitradeContext.Provider
			value={{
				currentAccount,
				deals,
				getDeals,
				postDeals,
				connectWallet,
				sendMoney,
			}}
		>
			{children}
		</HermitradeContext.Provider>
	);
};

export default HermitradeContextProvider;
