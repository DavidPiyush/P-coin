export const metadata = {
  title: "Dashboard",
};

function Page() {
  return (
    <section className="bg-coolGray h-screen">
      <div className="p-6">
        <div class="px-4 sm:px-0">
          <h3 class="text-2xl font-semibold leading-7 text-slate-600">
            Welcome to your Dashboard
          </h3>
          <p class="mt-2 max-w-2xl  leading-6 text-slate-400 text-sm">
            Welcome back, user with Ethereum ID: (ethereumId)
          </p>
        </div>
        <div class="mt-6 border-t border-gray-400">
          <dl class="divide-y divide-gray-300">
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-xl leading-6 text-slate-500 font-medium ">
                Ethereum Address
              </dt>
              <dd class="mt-1 text-sm leading-6 text-slate-400 sm:col-span-2 sm:mt-0">
                (ethereum Id)
              </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-xl c leading-6 text-slate-500">
                Ethereum Network
              </dt>
              <dd class="mt-1 text-sm leading-6 text-slate-400 sm:col-span-2 sm:mt-0">
                (Network)
              </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-xl font-medium leading-6 text-slate-500">
                Ethereum ChainId
              </dt>
              <dd class="mt-1 text-sm leading-6 text-slate-400 sm:col-span-2 sm:mt-0">
                (Ethereum ChainId)
              </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-xl font-medium leading-6 text-slate-500">
                Ethereum Balance
              </dt>
              <dd class="mt-1 text-sm leading-6 text-slate-400 sm:col-span-2 sm:mt-0">
                ( $120,000)
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

export default Page;
