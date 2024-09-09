"use client";

import { useEffect } from "react";
import { useAccount } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();
  const { openConnectModal } = useConnectModal();
  const { isConnected } = useAccount(); // Check if wallet is connected

  // Redirect if wallet is already connected
  useEffect(() => {
    if (isConnected) {
      router.push("/dashboard");
    }
  }, [isConnected, router]);

  // Handle connect and redirect
  function handleOpenAndRedirect() {
    if (!isConnected) {
      openConnectModal();
    }
  }

  return (
    <button
      className="text-white  focus:outline-none focus:ring-blue-300 font-medium  text-sm px-10  py-2.5 rounded-full lg:px-24 md:px-20 bg-[#e27360] hover:bg-[#ab3d2a] mt-4"
      onClick={handleOpenAndRedirect}
      type="button"
    >
      Connect to Wallet
    </button>
  );
}

export default Login;
