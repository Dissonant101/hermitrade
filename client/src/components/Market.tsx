import React, { useContext, useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Deal } from "../@types/Deal";
import { HermitradeContext } from "../context/HermitradeContext";

const DealCard = ({ dealInfo }: { dealInfo: Deal }) => {
  const { sendMoney } = useContext(HermitradeContext);
  const navigate = useNavigate();

  const redirectOnPurchase = () => {
    navigate("/");
  };

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
        <b>Address:</b> {`${dealInfo.address.substring(0, 5)}...${dealInfo.address.substring(dealInfo.address.length - 4)}`}
        <br />
        <b>Price:</b> {dealInfo.price.toString().substring(0, Math.min(dealInfo.price.toString().length, 6))} ETH
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

  useEffect(() => {
    window.scrollTo(0, 0);
    getDeals();
  }, []);

  const [query, setQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const blacklistedItems = ["asdf"]; // oops

  const dealsMemo = useMemo(() => {
    if (!query) {
      return deals.filter((deal) => {
        return !blacklistedItems.includes(deal.item.toLowerCase());
      });
    }

    return deals.filter((deal) => {
      return (
        deal.item.toLowerCase().includes(query.toLowerCase()) &&
        !blacklistedItems.includes(deal.item.toLowerCase())
      );
    });
  }, [query, deals]);

  return (
    <div>
      <div className="market-bg px-10 pt-5 pb-10">
        <div className="">
          {currentAccount.length == 0 ? (
            <p className="py-60 text-white font-semibold text-2xl text-center">
              Connect your wallet to see the market deals.
            </p>
          ) : (
            <div>
              <div className="text-center mb-5">
                <input className="glass-morphism placeholder:text-white text-white"
                  type="text"
                  value={query}
                  placeholder="Search"
                  onChange={handleChange}
                  style={{ width: "300px", height: "36px", paddingLeft: "5px" }}
                ></input>
              </div>

              {dealsMemo.length !== 0 || !query ? (
                <div className="grid grid-cols-3 gap-11">
                  {dealsMemo.reverse().map((deal: Deal) => (
                    <DealCard
                      dealInfo={deal}
                      key={deal.timestamp + deal.description}
                    />
                  ))}
                </div>
              ) : (
                <p className="py-60 text-white font-semibold text-2xl text-center">
                  {"No deals found :("}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Market;
