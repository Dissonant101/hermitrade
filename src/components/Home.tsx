import { useState, useContext } from "react";
import { HermitradeContext } from "../context/HermitradeContext";

const Home = () => {
  const { currentAccount, connectWallet } = useContext(HermitradeContext)
  return (
    <div className="w-full">
      <h1>Welcome to HermitTrade.</h1>
      <br />
      {currentAccount.length == 0 ? (
        <button type="button" onClick={connectWallet} className="w-20 bg-[#e29608] p-3 m-1 rounded-full">Connect wallet</button>
      ) : (<div className="m-1 p-1">Wallet connected!</div>)}
    </div>
  );
};

export default Home;
