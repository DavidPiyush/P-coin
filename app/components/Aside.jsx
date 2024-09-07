import Link from "next/link";
import Image from "next/image";
import {
  bank,
  bell,
  coin,
  grid,
  history,
  questionMark,
  rightArrow,
} from "../../utlis/svg";
function Aside() {
  return (
    <aside
      className={`w-64 h-screen fixed top-0  left-0 z-40 bg-gray-50 dark:bg-gray-800 
      transition-transform duration-300 ease-in-out transform `}
    >
      <div className="h-full px-3 py-12 overflow-y-auto bg-gray-50 dark:bg-[#111827] mt-16 ">
        <ul className="space-y-4 font-medium">
          <li className="flex items-center justify-center">
            <Image
              src="/metamask.svg"
              alt="user logo"
              width={0}
              height={0}
              quality={100}
              className="w-24 rounded-full bg-white"
            />
          </li>
          <li className="flex items-center justify-center flex-1 ms-3 whitespace-nowrap py-2">
            <span className="text-white font-bold text-xl ">0xx...0456 </span>
          </li>
          <li className="w-full border-2 rounded-lg border-gray-700 ">
            <Link href="" className="sidebar-btn justify-center fill-white ">
              {rightArrow}
              <span className="ms-3">Disconnect</span>
            </Link>
          </li>
          <li
            className="w-full 
         flex justify-around py-2"
          >
            <Link
              href=""
              className="rounded-full p-2 hover:bg-gray-100  dark:hover:bg-gray-700"
            >
              {grid}
            </Link>
            <Link
              href=""
              className="rounded-full p-2  hover:bg-gray-100  dark:hover:bg-gray-700"
            >
              {bell}
            </Link>
            <Link
              href=""
              className="rounded-full p-2  hover:bg-gray-100  dark:hover:bg-gray-700"
            >
              {questionMark}
            </Link>
          </li>
        </ul>
        <hr className="my-4" />
        <ul className="space-y-2 font-medium">
          <li>
            <Link href="" className="sidebar-btn ">
              {bank}
              <span className="flex-1 ms-3 whitespace-nowrap">Transaction</span>
            </Link>
          </li>

          <li>
            <Link href="" className="sidebar-btn ">
              {coin}
              <span className="flex-1 ms-3 whitespace-nowrap">Balance</span>
            </Link>
          </li>
          <li>
            <Link href="" className="sidebar-btn ">
              {history}
              <span className="flex-1 ms-3 whitespace-nowrap">History</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Aside;
