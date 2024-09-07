import Image from "next/image";
function Feature() {
  return (
    <section>
      <div className="lg:max-w-7xl md:mx-auto md:max-w-2xl grid justify-center md:block">
        <h3 className="mt-24 text-center text-xl text-sunriseLight">
          Featured by{" "}
        </h3>
        <article className="flex justify-between mt-8 grayscale md:shrink-0 space-x-6 md:space-x-0">
          <Image
            src="/coinbase.svg"
            alt="coinbase wallet"
            width={0}
            height={0}
            className="w-12 md:w-24"
          />
          <Image
            src="/metamask.svg"
            alt="metamask wallet"
            width={0}
            height={0}
            className="w-12 md:w-24"
          />
          <Image
            src="/ethereum.svg"
            alt="ethereum wallet"
            width={0}
            height={0}
            className="w-12 md:w-24"
          />
          <Image
            src="/trust-wallet.svg"
            alt="trust wallet"
            width={0}
            height={0}
            className="w-12 md:w-24"
          />{" "}
          <Image
            src="/trust-wallet.svg"
            alt="trust wallet"
            width={0}
            height={0}
            className="w-12 md:w-24"
          />
        </article>
      </div>
    </section>
  );
}

export default Feature;
