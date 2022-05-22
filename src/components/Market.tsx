import { useContext, useState } from "react";
import { Deal } from "../@types/Deal";
import { HermitradeContext } from "../context/HermitradeContext";

const DealCard = ({ dealInfo }: { dealInfo: Deal }) => {
	const { sendMoney } = useContext(HermitradeContext);
	console.log(dealInfo.timestamp);
	console.log(new Date(dealInfo.timestamp * 1000).toISOString().substring(0, 10));
	return (
		<div className="glass-morphism">
			<img src={dealInfo.imageUrl} alt="Picture" className="" />
			<p>
				<b>Email:</b> {dealInfo.email}
				<br />
				<b>Address:</b> {dealInfo.address}
				<br />
				<b>Price:</b> {dealInfo.price.toString()} ETH
				<br />
				<b>Item:</b> {dealInfo.item}
				<br />
				<b>Description:</b> <br /> {dealInfo.description}
				<br />
				<b>Date posted:</b> {new Date(dealInfo.timestamp * 1000).toISOString().substring(0, 10)}
			</p>
			<button onClick={() => {
				sendMoney(dealInfo);

			}}
				className="hover:cursor-pointer hover:bg-slate-600 hover:text-gray-200 duration-150 rounded-md px-1.5 py-0.5">
				Purchase
			</button>
		</div>
	);
};

const Market = () => {

	const {
		currentAccount,
		deals,
	}: {
		currentAccount: string;
		deals: Deal[];
	} = useContext(HermitradeContext);
	// getDeals().then(() => console.log("Finished fetching deals"));

	return (
		<div>
			<div className="market-bg px-10 py-20">
				<div className="">
					{currentAccount.length == 0 ? (
						<p className="py-60 text-white font-semibold text-2xl text-center">Connect your wallet to see the market deals.</p>
					) : (
						<div className="grid grid-cols-3">
							{deals.reverse().map((deal: Deal) => (
								<DealCard dealInfo={deal} key={deal.timestamp + deal.description} />
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Market;
