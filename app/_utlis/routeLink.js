import { bank, bell, coin, grid, history, questionMark } from "../_utlis/svg";

export const dashboardLink = [
  {
    title: "",
    path: "/dashboard",
    svg: grid,
    className: "",
    linkClass: "rounded-full p-2 hover:bg-gray-100  dark:hover:bg-gray-700",
  },
  {
    title: "",
    path: "/dashboard/notification",
    svg: bell,
    className: "",
    linkClass: "rounded-full p-2 hover:bg-gray-100  dark:hover:bg-gray-700",
  },
  {
    title: "",
    path: "/dashboard/help",
    svg: questionMark,
    className: "",
    linkClass: "rounded-full p-2 hover:bg-gray-100  dark:hover:bg-gray-700",
  },
];
export const dashboardLinkBelow = [
  {
    title: "Ethereum Network",
    path: "/dashboard/network",
    svg: bank,
    className: "",
    linkClass: "sidebar-btn justify-center fill-white ",
  },
  {
    title: "Balance",
    path: "/dashboard/balance",
    svg: coin,
    className: "",
    LinkClass: "rounded-full p-2 hover:bg-gray-100  dark:hover:bg-gray-700",
  },
  {
    title: "Transaction History",
    path: "/dashboard/history",
    svg: history,
    className: "",
    LinkClass: "rounded-full p-2 hover:bg-gray-100  dark:hover:bg-gray-700",
  },
];
