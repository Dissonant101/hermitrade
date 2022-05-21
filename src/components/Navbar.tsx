import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { HermitradeContext } from "../context/HermitradeContext";

const Navbar = () => {
  const { currentAccount, connectWallet } = useContext(HermitradeContext)
  return (
    <div className="navigation w-full font-sans text-xl opacity-100">
      <nav className="navbar navbar-expand navbar-dark bg-dark w-full">
        <div className="container w-full justify-between bg-blue-400">
          <ul className="navbar-nav ml-auto flex flex-wrap items-start justify-start px-2 py-3 align-middle">
            <li className="nav-item mx-3">
              <div className="duration-300 hover:bg-blue-500 rounded-md px-2 py-2">
                <NavLink className="nav-link p-3" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </div>
            </li>
            <li className="nav-item mx-3;">
              <div className="duration-300 hover:bg-blue-500 rounded-md px-2 py-2">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </div>
            </li>
            <li className="nav-item mx-3">
              <div className="duration-300 hover:bg-blue-500 rounded-md px-2 py-2">
                <NavLink className="nav-link" to="/market">
                  Marketplace
                </NavLink>
              </div>
            </li>
            <li className="nav-item mx-3">
              <div className="duration-300 hover:bg-blue-500 rounded-md px-2 py-2">
                <NavLink className="nav-link" to="/post">
                  Post Deals
                </NavLink>
              </div>
            </li>
          {currentAccount.length == 0 ? (
          <button type="button" onClick={connectWallet} className=" inset-y-0 bg-[#e29608] px-3 py-2 rounded-full float-right mr-2 ml-auto duration-300 hover:bg-[#bd7e0a]">Connect wallet</button>) : (<div className="m-1 p-1">Wallet connected!</div>)}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
