import Image from "next/image";

import Copyright from "@/app/_components/Copyright";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import referImage from "@/public/refer-side.png";
import Link from "next/link";
import Button from "../_components/Button";

export const metadata = {
  title: "Refer",
};

{
  /* <SocialMediaLink />
          <DailyClaim /> */
}

function page() {
  return (
    <div>
      <Header />
      <section className=" bg-[#fce79f] ">
        <div className="grid md:grid-cols-2 lg:max-w-7xl md:max-w-2xl mx-auto pt-24 items-center  justify-items-center md:justify-items-start">
          <div className="mx-4 my-4 text-center md:text-left">
            <h1 className="text-6xl text-sunrise mb-10 tracking-tight font-normal">
              Refer a Friend
            </h1>
            <p className="text-sunriseLight pb-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
              nam velit quia accusantium totam voluptatum rerum culpa, molestiae
              consequuntur repellendus perferendis consectetur itaque autem,
              beatae, incidunt atque consequatur ipsa dolore officia rem.
              Quisquam corrupti quod tempore molestias itaque laboriosam debitis
            </p>
            <Button>Label</Button>
          </div>

          <div className="">
            <Image
              src={referImage}
              alt="Refer Image"
              placeholder="blur"
              quality={80}
            />
          </div>
        </div>
      </section>
      <Footer />
      <Copyright />
    </div>
  );
}

export default page;
