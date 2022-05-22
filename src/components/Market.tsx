import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Deal } from "../@types/Deal";
import { HermitradeContext } from "../context/HermitradeContext";

const DealCard = ({ dealInfo }: { dealInfo: Deal }) => {
  const { sendMoney } = useContext(HermitradeContext);
  const navigate = useNavigate();

  const redirectOnPurchase = () => {
    navigate("/");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="glass-morphism justify-center text-center text-white p-16">
      <img src={dealInfo.imageUrl} alt="Picture" className="mb-5 rounded-md" />
      <p className="text-2xl">
        <b>{dealInfo.item}</b>
      </p>
      <p className="text-center">
        {dealInfo.description} <br /> <br />
        <b>Email:</b> {dealInfo.email}
        <br />
        <b>Address:</b> {dealInfo.address}
        <br />
        <b>Price:</b> {dealInfo.price.toString()} ETH
        <br />
        <b>Date posted:</b>{" "}
        {new Date(dealInfo.timestamp * 1000).toISOString().substring(0, 10)}
      </p>
      <button
        onClick={() => {
          sendMoney(dealInfo);
          redirectOnPurchase();
        }}
        className="hover:cursor-pointer hover:text-gray-200 duration-150 rounded-md px-2 py-1 mt-10 w-64 bg-[#e29608] hover:bg-[#bd7e0a]"
      >
        Purchase
      </button>
    </div>
  );
};

const Market = () => {
  const { currentAccount } = useContext(HermitradeContext);

  const {
    deals,
    getDeals,
  }: {
    deals: Deal[];
    getDeals: () => Promise<void>;
  } = useContext(HermitradeContext);
  if (!deals.length) {
    getDeals();
  }

  return (
    <div>
      <div className="market-bg px-10 py-20">
        <div className="">
          {currentAccount.length == 0 ? (
            <p className="py-60 text-white font-semibold text-2xl text-center">
              Connect your wallet to see the market deals.
            </p>
          ) : (
            <div className="grid grid-cols-3 gap-11">
              {deals.reverse().map((deal: Deal) => (
                <DealCard
                  dealInfo={deal}
                  key={deal.timestamp + deal.description}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Market;
