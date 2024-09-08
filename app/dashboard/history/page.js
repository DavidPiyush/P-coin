// export const metadata = {
//   title: "History",
// };

'use client'
import React, { useState } from "react";

function TransactionHistory() {
  const [transactions, setTransactions] = useState([
    // sample data
    {
      id: 1,
      date: "2022-01-01",
      amount: 100,
      sender: "John Doe",
      receiver: "Jane Doe",
      status: "Completed",
    },
    {
      id: 2,
      date: "2022-01-02",
      amount: 200,
      sender: "Jane Doe",
      receiver: "John Doe",
      status: "Pending",
    },
    {
      id: 3,
      date: "2022-01-03",
      amount: 300,
      sender: "John Doe",
      receiver: "Jane Doe",
      status: "Completed",
    },
    // ...
  ]);

  const [filter, setFilter] = useState("all");

  const filteredTransactions = transactions.filter((transaction) => {
    if (filter === "all") return true;
    return transaction.status === filter;
  });

  return (
    <section className="bg-coolGray h-screen">
      <div className="lg:max-w-7xl max-w-xl md:max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Transaction History
        </h1>

        <div className="flex justify-end mb-4">
          <button
            className={`mr-2 py-2 px-4 ${
              filter === "all"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`mr-2 py-2 px-4 ${
              filter === "Pending"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setFilter("Pending")}
          >
            Pending
          </button>
          <button
            className={`py-2 px-4 ${
              filter === "Completed"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setFilter("Completed")}
          >
            Completed
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">Transaction ID</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Amount</th>
                <th className="px-4 py-2 text-left">Sender</th>
                <th className="px-4 py-2 text-left">Receiver</th>
                <th className="px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className={`border-b ${
                    transaction.status === "Pending" ? "bg-yellow-100" : ""
                  }`}
                >
                  <td className="border px-4 py-2 text-sm text-gray-900">
                    {transaction.id}
                  </td>
                  <td className="border px-4 py-2 text-sm text-gray-900">
                    {transaction.date}
                  </td>
                  <td className="border px-4 py-2 text-sm text-gray-900">
                    {transaction.amount}
                  </td>
                  <td className="border px-4 py-2 text-sm text-gray-900 break-all">
                    {transaction.sender}
                  </td>
                  <td className="border px-4 py-2 text-sm text-gray-900 break-all">
                    {transaction.receiver}
                  </td>
                  <td
                    className={`border px-4 py-2 text-sm font-medium ${
                      transaction.status === "Completed"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {transaction.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default TransactionHistory;