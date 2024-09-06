import Image from "next/image";
import SocialMedia from "../components/SocialMedia";

function page() {
  return (
    <section className="bg-[#fbe4a7] lg:h-screen">
      <div className="grid grid-cols-1 lg:pt-[90px] lg:max-w-7xl md:max-w-2xl   items-center lg:gap-8 py-24 md:grid-cols-2 max-w-md gap-2 px-5 md:mx-auto">
        <article className="md:shrink-0 ">
          <Image
            src="/about.png"
            alt="P-coin background image"
            width={0}
            height={0}
            sizes="100vw"
            quality={100}
            style={{ width: "85%", height: "auto" }}
            className="rounded-full shadow-lg bg-[#349c47] "
          />
        </article>
        <article>
          <h2 className="lg:text-5xl text-2xl md:text-3xl font-semibold text-sunrise mb-3">
            About us
          </h2>
          <p className="mb-8 text-stone-500">Know about P-coin developer</p>

          <p className="lg:text-lg text-sunriseLight md:text-sm text-xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            nam velit quia accusantium totam voluptatum rerum culpa, molestiae
            consequuntur repellendus perferendis consectetur itaque autem,
            beatae, incidunt atque consequatur ipsa dolore officia rem. Quisquam
            corrupti quod tempore molestias itaque laboriosam debitis esse quae,
            consectetur saepe vero obcaecati odio autem, tempora illum veniam?
            Iure molestias soluta necessitatibus beatae unde debitis commodi
            maxime sint molestiae asperiores
          </p>

          <div className="mt-4">
            <SocialMedia />
          </div>
        </article>
      </div>
    </section>
  );
}

export default page;
