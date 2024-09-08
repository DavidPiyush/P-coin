export const metadata = {
  title: "Transaction",
};

const NetworkChanger = () => {
  return (
    <section className="h-screen bg-coolGray">
      <div className="">
        <div className=" w-full p-4">
          <h2 className="text-2xl font-bold mb-4">Select Network</h2>
          <ul className="md:flex gap-24 space-y-6">
            <li className="">
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                BNB
              </button>
            </li>
            <li className="">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                // onClick={() => console.log("Ethereum Mainnet selected")}
              >
                Ethereum Mainnet
              </button>
            </li>
            <li className="">
              <button
                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                // onClick={() => console.log("Base Artrium selected")}
              >
                Base Artrium
              </button>
            </li>
            {/* Add more networks as needed */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NetworkChanger;
