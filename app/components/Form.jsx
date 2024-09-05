import Image from "next/image";
import Input from "./Input";
import Button from "./Button";

function Form() {
  return (
    <section className="mb-24">
      <div className="lg:max-w-7xl mx-auto max-w-md md:max-w-2xl">
        <h3 className="mt-24 text-center text-xl text-sunriseLight">
          Contact Us{" "}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 items-center ">
          <article>
            <form>
              <div>
                <label className="block pb-2 text-sunriseLight">Name</label>
                <Input placeholder="John Doe" type="text" className=" " />
              </div>
              <div>
                <label className="block pb-2 text-sunriseLight mt-6">
                  Email
                </label>
                <Input placeholder="John@gmail.com" type="email" />
              </div>
              <div>
                <label className="block pb-2 text-sunriseLight mt-6">
                  Meassage
                </label>
                <textarea
                  placeholder="John Doe"
                  type="text"
                  className="px-4 w-full lg:py-3 py-2 rounded-md bg-[#faf596] focus:outline-none text-sunriseLight focus:ring-2 focus:ring-offset-2 focus:ring-[#6b4c15] text-sm"
                  rows="4"
                  cols="40"
                />
              </div>

              <Button className="w-full mt-8 lg:py-5">Send Message</Button>
            </form>
          </article>
          <article className="md:shrink-0">
            <Image
              src="/form.png"
              width={0}
              height={0}
              sizes="100vh"
              alt="Form image"
              // style={{ width: "100%", height: "auto" }}
              className="w-full"
            />
          </article>
        </div>
      </div>
    </section>
  );
}

export default Form;
