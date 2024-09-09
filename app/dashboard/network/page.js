import ChainData from "./chainData";

export const metadata = {
  title: "Transaction",
};

const Page = () => {
  return (
    <section className="h-screen bg-coolGray">
      <div className="">
        <div className=" w-full p-4">
          <h2 className="text-3xl font-bold mb-4 py-4 text-accent-700">Select Network</h2>
          <ChainData />
        </div>
      </div>
    </section>
  );
};

export default Page;
