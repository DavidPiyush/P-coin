import Dashboard from './dashboard.js'

export const metadata = {
  title: "Dashboard",
};

function Page() {
  return (
    <section className="bg-coolGray h-screen">
     <Dashboard/>
    </section>
  );
}

export default Page;
