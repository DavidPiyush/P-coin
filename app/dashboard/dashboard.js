"use client";
import { useEffect, useState } from "react";
import { useAccount, useBalance } from "wagmi";

function Dashboard() {
  const [isMounted, setIsMounted] = useState(false); // New state to track client-side mounting
  const { address: accountAddress, chain, isConnected } = useAccount();

  // console.log(chains);
  const { data: balance } = useBalance({
    address: accountAddress,
    blockTag: "latest",
  });

  

  const formattedBalance = balance?.formatted ? balance.formatted : "0";

  // This useEffect ensures the component only renders after it's mounted on the client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Return null while rendering server-side
  }

  if (!isConnected) {
    return <p>Please connect your wallet to view your dashboard.</p>;
  }

  return (
    <div className="p-6">
      <div className="px-4 sm:px-0">
        <h3 className="text-2xl font-semibold leading-7 text-slate-600">
          Welcome to your Dashboard
        </h3>
        <p className="mt-2 max-w-2xl leading-6 text-accent-700 text-sm">
          Welcome back, user with Ethereum ID:{" "}
          <strong className="text-base"> ({accountAddress})</strong>
        </p>
      </div>
      <div className="mt-6 border-t border-gray-400">
        <dl className="divide-y divide-gray-300">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-xl leading-6 text-primary-600 font-medium ">
              Ethereum Address :
            </dt>
            <dd className="mt-1 text-base leading-6 text-accent-600 sm:col-span-2 sm:mt-0">
              <strong>{accountAddress}</strong>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-xl leading-6 text-primary-600 font-medium">
              Ethereum Chain
            </dt>
            <dd className="mt-1 text-base leading-6 text-accent-600 sm:col-span-2 sm:mt-0">
              <strong>{chain?.name || "Unknown"}</strong>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-xl font-medium leading-6 text-primary-600">
              Ethereum ChainId :
            </dt>
            <dd className="mt-1 text-base leading-6 text-accent-600 sm:col-span-2 sm:mt-0">
              <strong>{chain?.id || "Unknown"}</strong>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-xl font-medium leading-6 text-primary-600">
              Ethereum Balance
            </dt>
            <dd className="mt-1 text-base leading-6 text-accent-600 sm:col-span-2 sm:mt-0">
              <strong>{formattedBalance}</strong> {balance?.symbol || ""}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default Dashboard;
