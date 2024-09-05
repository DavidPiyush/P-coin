import Button from "./Button";
import { cardData } from "../../utlis/roadmap.js";

function Roadmap() {
  return (
    <section className="mt-24 bg-[#e1deb8] pb-16">
      <div className="lg:max-w-7xl mx-auto md:max-w-2xl max-w-md">
        <h3 className="mt-24 text-center text-xl text-sunriseLight py-10">
          Roadmap
        </h3>

        <div className="grid pt-12 gap-10 grid-cols-2 md:grid-cols-3 ">
          {cardData.map((data) => (
            <article
              className="p-6 shadow-2xl bg-[#fffdd5] rounded-xl text-center md:text-left"
              key={data.id}
            >
              <h4 className="text-sunrise  text-xl lg:text-2xl capitalize ">
                {data.name}
              </h4>
              <p className="text-sunriseLight mb-4 mt-6 lg:text-sm text-xs ">
                {data.descripiton}
              </p>
              <Button className="lg:px-8  lg:py-2 px-4.2 py-1.5">
                {data.label}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
