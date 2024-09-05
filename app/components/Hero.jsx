import Image from "next/image";
import Button from "./Button";

function Hero() {
  return (
    <section className="gradient-home-page ">
      <div className="grid grid-cols-1 md:grid-cols-2  pt-[90px] lg:max-w-7xl mx-auto md:max-w-2xl max-w-md md:items-center md:pb-8">
        <div>
          <h1 className="lg:text-6xl text-4xl font-bold  text-[#5b4406] md:mt-16 text-center md:text-left md:text-5xl">
            P-Coin Your GateWay <br /> to the Crypto World
          </h1>
          <p className="mt-4 py-4 text-[#7f6f53] text-xs  text-center md:text-left lg:text-base">
            P-Coin is your trusted digital currency,offering uparralleled <br />
            security,speed and ease for all your crypto transactions <br />
            Embrance the future!
          </p>

          <div className="space-x-6 mt-6 text-center md:text-left ">
            <Button className="lg:px-24 md:px-12">Label 1</Button>
            <Button className="lg:px-24 md:px-12">Label 2</Button>
          </div>
        </div>
        <div className="w-full h-100 relative md:shrink-0 mt-6 md:mt-0">
          <Image
            src="/hero-background.png"
            alt="P-coin background image"
            width={0}
            height={0}
            sizes="100vw"
            quality={100}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
