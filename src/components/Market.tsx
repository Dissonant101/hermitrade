import { useContext, useState } from "react";
import { Deal } from "../@types/Deal";
import { HermitradeContext } from "../context/HermitradeContext";

const DealCard = ({ dealInfo }: { dealInfo: Deal }) => {
  const { sendMoney } = useContext(HermitradeContext);
  console.log(dealInfo.timestamp);
  console.log(new Date(dealInfo.timestamp * 1000).toISOString().substring(0, 10));
  return (
    <div className="m-1 p-1 border-2 border-slate-400 shadow-lg rounded-xl">
      <img src={dealInfo.imageUrl} alt="Picture" className="" />
      <p>
        Email: {dealInfo.email}
        <br />
        Address: {dealInfo.address}
        <br />
        Price: {dealInfo.price.toString()}
        <br />
        Item: {dealInfo.item}
        <br />
        Description: {dealInfo.description}
        <br />
        Date posted: {new Date(dealInfo.timestamp * 1000).toISOString().substring(0, 10)}
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
      <h1>This is the market page.</h1>
      {currentAccount.length == 0 ? (
        <p>Connect your wallet.</p>
      ) : (
        <div className="grid grid-cols-3">
          {deals.reverse().map((deal: Deal) => (
            <DealCard dealInfo={deal} key={deal.timestamp + deal.description} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Market;
