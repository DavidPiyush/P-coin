import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.jpg";

function Logo({ textColor, hidden }) {
  return (
    <Link href="/" class={`flex gap-4 items-center ${hidden}`}>
      <Image
        src={logo}
        height="60"
        quality={100}
        width="50"
        alt="P-coin logo"
        className="rounded-3xl"
      />
      <span class={`text-xl font-semibold  ${textColor}`}>P-Coin</span>
    </Link>
  );
}

export default Logo;
