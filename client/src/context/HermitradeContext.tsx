import { createContext, useState } from 'react';
import { ethers } from "ethers";

const { ethereum } = window;

export const HermitradeContext = createContext({}) as any;

export const HermitradeContextProvider = ({ children }: { children: any }) => {
	const [currentAccount, setCurrentAccount] = useState("");


	const connectWallet = async () => {
		try {
			if (!ethereum) return alert("Please install MetaMask.");

			const accounts: string[] = await ethereum.request({ method: "eth_requestAccounts", });
			console.log(accounts[0]);
			setCurrentAccount(accounts[0]);
			console.log(currentAccount);
		} catch (error) {
			console.log(error);

			throw new Error("No ethereum object");
		}
	};

	const sendMoney = async (addressTo: string, amount: string) => {
		await ethereum.request({
			method: "eth_sendTransaction",
			params: [{
				from: currentAccount,
				to: addressTo,
				gas: "0x5208",
				value: ethers.utils.parseEther(amount)._hex,
			}],
		});
	}

	return (
		<HermitradeContext.Provider value={{
			currentAccount,
			connectWallet,
			sendMoney
		}}>
			{children}
		</HermitradeContext.Provider>
	)
}

export default HermitradeContextProvider;
