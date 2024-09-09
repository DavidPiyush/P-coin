"use client";
import { UseChainData, UseSwitchNetwork, UseData } from "@/app/_lib/wagmiData";
import { useEffect, useState } from "react";
import Image from "next/image";

function ChainData() {
  const [isActive, setIsActive] = useState(null);
  const chains = UseChainData();
  // console.log(chains);

  const { chain } = UseData();

  const switchChain = UseSwitchNetwork();

  // to get active status
  useEffect(() => {
    if (chain) {
      setIsActive(chain.id); // Set isActive to the chain ID
    }
  }, [chain]);

  return (
    <ul className="md:flex gap-4 space-y-4 md:space-y-0 flex-wrap justify-center items-center">
      {chains?.map((chainItem) => (
        <li className="flex-shrink-0" key={chainItem.id}>
          <button
            disabled={chain?.id === chainItem.id}
            className={`border-2 font-bold py-2 px-4 w-[300px] rounded-full flex items-center justify-center gap-4 hover:bg-accent-600
              ${
                isActive === chainItem.id // Compare isActive with chainItem.id directly
                  ? "bg-accent-700 text-white disabled" // Active chain style
                  : "border-primary-500 hover:bg-accent-600"
              }`} // Inactive chain style
            onClick={() => switchChain({ chainId: chainItem.id })}
          >
            <span className="flex-shrink-0">
              <Image
                src={chainItem.iconUrl.src}
                width={chainItem.iconUrl.width}
                height={chainItem.iconUrl.height}
                alt={chainItem.name}
                className="object-contain"
              />
            </span>
            <strong>{chainItem.name}</strong>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ChainData;
