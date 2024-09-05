import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.jpg";

function Logo() {
  return (
    <Link href="/" class="flex gap-4 items-center">
      <Image
        src={logo}
        height="60"
        quality={100}
        width="50"
        alt="P-coin logo"
        className="rounded-3xl"
      />
      <span class="text-xl font-semibold text-primary-100 ">P-Coin</span>
    </Link>
  );
}

export default Logo;
