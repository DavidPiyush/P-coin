export const metadata = {
  title: "Message",
};

function page() {
  return (

    <section className="bg-coolGray h-screen">

    <div className=" flex flex-col">
      
      <div className="flex-1 overflow-y-auto">
        <ul className="divide-y divide-gray-200">
          {/* Message Item */}
          <li className="hover:bg-slate-400 cursor-pointer p-4 bg-slate-300">
            <div className="flex justify-between">
              <h2 className="font-bold text-gray-800">Message Title</h2>
              <span className="text-sm text-gray-500">Date</span>
            </div>
            <p className="text-gray-600">Message preview text goes here...</p>
          </li>

          {/* Repeat for more messages */}
          {/* <li className="hover:bg-gray-100 cursor-pointer p-4">
            <div className="flex justify-between">
              <h2 className="font-bold text-gray-800">Another Message</h2>
              <span className="text-sm text-gray-500">Date</span>
            </div>
            <p className="text-gray-600">
              Another message preview text goes here...
            </p>
          </li> */}
        </ul>
      </div>
    </div>
    </section>
  );
}

export default page;
