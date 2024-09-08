"use client";

import { useState } from "react";
const Page = () => {
  const [pCoinBalance, setPCoinBalance] = useState(1000); // Example P-Coin balance
  const [pCoinInput, setPCoinInput] = useState("");
  const [convertedValue, setConvertedValue] = useState(0);
  const [currency, setCurrency] = useState("USD");

  const conversionRates = {
    USD: 0.00001,
  };

  const handleConvert = () => {
    const pCoinAmount = parseFloat(pCoinInput);
    if (!isNaN(pCoinAmount)) {
      const rate = conversionRates[currency];
      setConvertedValue(pCoinAmount * rate);
    }
  };

  return (
    <section className="bg-coolGray h-screen">
      <div className="lg:max-w-7xl md:max-w-2xl max-w-xl mx-auto">
        {/* P-Coin Balance Display */}
        <div className="py-8 ">
          <h3 className="text-2xl font-bold text-gray-600 mb-4">
            P-Coin Balance
          </h3>
          <div className="p-6 bg-slate-300 shadow rounded-lg">
            <p className="text-base text-slate-400 pb-2">Your P-Coin Balance</p>
            <p className="text-3xl font-semibold text-slate-600">
              {pCoinBalance} P-Coins
            </p>
          </div>
        </div>

        {/* P-Coin Converter */}
        <form className="flex flex-col gap-4">
          <label
            htmlFor="pCoin"
            className="block text-sm font-medium leading-6 text-gray-400"
          >
            P-Coin Amount
          </label>
          <input
            type="text"
            name="pCoin"
            id="pCoin"
            value={pCoinInput}
            onChange={(e) => setPCoinInput(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 pl-14 pr-20 text-gray-400 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Enter amount"
          />
          <select
            id="currency"
            name="currency"
            disabled
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 pl-14 pr-20 text-gray-400 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option>USD</option>
          </select>
          <button
            onClick={handleConvert}
            disabled
            className="w-full bg-slate-600 text-white py-3 rounded-lg hover:bg-slate-700 mt-4"
          >
            Convert to USD
          </button>
          <div className="p-6 bg-slate-300 shadow rounded-lg">
            <p className="mt-4 text-xl text-gray-600">
              {pCoinInput} P-Coins ={" "}
              <span className="font-bold">{convertedValue.toFixed(6)} USD</span>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Page;
