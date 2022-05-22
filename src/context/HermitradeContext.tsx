import { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractAbi, contractAddress } from "../utils/constants";
import { Deal } from "../@types/Deal";

const { ethereum } = window;

const createEthereumContract = () => {
	if (!ethereum) {
		alert("Please install MetaMask.");
		return null;
	}
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
	const [currentAccount, setCurrentAccount] = useState(() => {
		const saved = localStorage.getItem("currentAccount") as string;
		const initialValue = saved;
		return initialValue || "";
	});
	const [deals, setDeals] = useState<Deal[]>([]);

	useEffect(() => {
		localStorage.setItem("currentAccount", currentAccount)
	}, [currentAccount])

	const connectWallet = async () => {
		try {
			if (!ethereum) return alert("Please install MetaMask.");

			const accounts: string[] = await ethereum.request({
				method: "eth_requestAccounts",
			});
			setCurrentAccount(accounts[0]);

			await getDeals();
		} catch (error) {
			console.log(error);
			throw new Error("No ethereum object");
		}
	};

	// Sends a specified amount of ETH from your wallet to the specified address
	const purchaseDeal = async (deal: Deal) => {
		await ethereum.request({
			method: "eth_sendTransaction",
			params: [
				{
					from: currentAccount,
					to: deal.address,
					gas: "0x5208",
					value: ethers.utils.parseEther(deal.price.toString())._hex,
				},
			],
		});
		const contract = createEthereumContract();
		// Remove the deal from the list so that no one can see it ever again
		if (contract) await contract.removeDeal(deal.id);
	};

	const getDeals = async () => {
		const provider = new ethers.providers.Web3Provider(ethereum);
		if (!(await provider.listAccounts()).length) {
			setCurrentAccount("");
		}
		const contract = createEthereumContract();
		if (!contract) {
			return;
		}
		const fetchedDeals = ((await contract.getDeals()) as any[])
			.map(
				(d: any) =>
				({
					address: d.from,
					timestamp: d.timestamp,
					id: d.id,
					price: d.price * 0.001,
					email: d.email,
					item: d.item,
					description: d.description,
					imageUrl: d.imageUrl,
				} as Deal)
			)
			.sort((a, b) => b.timestamp - a.timestamp);
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
		if (!contract) {
			return;
		}
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
				sendMoney: purchaseDeal,
			}}
		>
			{children}
		</HermitradeContext.Provider>
	);
};

export default HermitradeContextProvider;
