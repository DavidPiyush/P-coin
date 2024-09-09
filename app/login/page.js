import Image from "next/image";
import logo from "@/public/logo.jpg";
import walletLogo from "@/public/wallet-logo.png";
import Login from "./login";

export const metadata = {
  title: "Login",
};

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks

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
        <Login />
      </div>
    </section>
  );
}

export default page;
