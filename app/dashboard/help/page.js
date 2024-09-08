export const metadata = {
  title: "Help",
};
function page() {
  return (
    <section className="bg-coolGray ">
    <div className="min-h-screen  p-6">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-600">
          Ethereum Help Center
        </h1>
        <p className="text-slate-400">
          Find answers to your questions about Ethereum and blockchain
          technology.
        </p>
      </header>

      {/* Help Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* FAQ Section */}
        <div>
          <h2 className="text-2xl font-semibold text-slate-500 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="font-bold text-slate-500">What is Ethereum?</h3>
              <p className="text-slate-500 mt-2">
                Ethereum is a decentralized, open-source blockchain with smart
                contract functionality. Ether (ETH) is its native
                cryptocurrency.
              </p>
            </div>

            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="font-bold text-slate-500">
                How do I use MetaMask with Ethereum?
              </h3>
              <p className="text-slate-500 mt-2">
                MetaMask allows you to interact with the Ethereum blockchain by
                providing a user-friendly interface for managing your wallet and
                sending transactions.
              </p>
            </div>

            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="font-bold text-slate-500">What are gas fees?</h3>
              <p className="text-slate-500 mt-2">
                Gas fees are transaction fees paid to miners on the Ethereum
                network to process transactions and execute smart contracts.
              </p>
            </div>
          </div>
        </div>

        {/* Ethereum Guides Section */}
        <div>
          <h2 className="text-2xl font-semibold text-slate-500 mb-4">
            Ethereum Guides
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="font-bold text-slate-500">
                How to Create an Ethereum Wallet
              </h3>
              <p className="text-slate-500 mt-2">
                A step-by-step guide to creating your own Ethereum wallet using
                MetaMask or other wallet services.
              </p>
              <a
                href="#"
                className="text-blue-800 hover:underline mt-2 inline-block"
              >
                Read More
              </a>
            </div>

            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="font-bold text-slate-500">
                How to Send and Receive Ether (ETH)
              </h3>
              <p className="text-slate-500 mt-2">
                Learn how to send and receive Ether using your wallet.
                Understand transaction details, gas limits, and gas fees.
              </p>
              <a
                href="#"
                className="text-blue-800 hover:underline mt-2 inline-block"
              >
                Read More
              </a>
            </div>

            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="font-bold text-slate-500">
                Understanding Smart Contracts
              </h3>
              <p className="text-slate-500 mt-2">
                Discover what smart contracts are and how they function on the
                Ethereum network.
              </p>
              <a
                href="#"
                className="text-blue-800 hover:underline mt-2 inline-block"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Help Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-slate-500 mb-4">
          Need More Help?
        </h2>
        <p className="text-slate-500 mb-4">
          If you didn't find an answer to your question, you can contact our
          support team or explore more resources below.
        </p>
        <div className="space-y-4 space-x-4">
          <a href="#" className="text-blue-800 hover:underline">
            Contact Support
          </a>
          <a href="#" className="text-blue-800 hover:underline">
            Ethereum Official Documentation
          </a>
          <a href="#" className="text-blue-800 hover:underline">
            Ethereum Foundation
          </a>
        </div>
      </div>
    </div>

    </section>
  );
}

export default page;
