import { useContext, useState } from "react";
import { Deal } from "../@types/Deal";
import { HermitradeContext } from "../context/HermitradeContext";


const DealCard = ({ dealInfo }: { dealInfo: any }) => {
	return (
		<div className="m-1 p-1 border-2 border-slate-400 hover:cursor-pointer shadow-lg rounded-xl">
			<img src={dealInfo.imageUrl} alt="Picture" className="" />
			<p>
				Email: {dealInfo.email}<br />
				Address: {dealInfo.address}<br />
				Price: {dealInfo.price}<br />
				Description: {dealInfo.description}<br />
				Date posted: {new Date(dealInfo.timestamp * 1000).toISOString().substring(0, 10)}
			</p>
		</div>
	)
}

const Market = () => {
	const { currentAccount, deals, getDeals }: { currentAccount: string, deals: Deal[], getDeals: () => Promise<Deal[]> }
		= useContext(HermitradeContext);
	// getDeals().then(() => console.log("Finished fetching deals"));

	return (
		<div>
			<h1>This is the market page.</h1>
			{
				currentAccount.length == 0 ?
					(<p>Connect your wallet.</p>)
					:
					(<div className="grid grid-cols-3">
						{deals.map((deal: Deal) => (<DealCard dealInfo={deal} key={deal.timestamp + deal.description} />))}
					</div>)
			}
		</div>
	);
};

export default Market;
