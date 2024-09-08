import Image from "next/image";
import Button from "../_components/Button";
import logo from "@/public/logo.jpg";
import walletLogo from "@/public/wallet-logo.png";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export const metadata = {
  title: "Login",
};

function page() {
  return (
    <section className="h-full ">
      <Image
        src={walletLogo}
        fill
        alt="wallet logo"
        quality={80}
        className="opacity-10 object-cover object-top   "
      />

      <div className="h-screen flex justify-center items-center flex-col  z-50 backdrop-blur-sm  bg-white/30">
        <Image src={logo} alt="logo" width={100} className="rounded-full" />
        <h1 className="pb-4 mt-6 text-center lg:text-6xl text-[#40160f] font-bold tracking-wider md:text-4xl text-2xl">
          Make Your first <br />
          <strong className="text-[#ec8d7d]">Money</strong> on the Internet
        </h1>
        {/* <Button
          className="rounded-full lg:px-24 md:px-20 bg-[#e27360] hover:bg-[#ab3d2a] mt-4"
          href="/dashboard"
        >
          Connect to Wallet
        </Button> */}
        <ConnectButton />
      </div>
    </section>
  );
}

export default page;
