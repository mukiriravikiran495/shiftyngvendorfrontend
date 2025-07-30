import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";

const transactions = [
  {
    bookingId:"1000342",
    id: "TXN001",
    date: "2024-07-30",
    amount: 2500,
    status: "Success",
    mode: "UPI",
    reference: "REF12345UPI",
  },
  {
    bookingId:"1000645",
    id: "TXN002",
    date: "2024-07-29",
    amount: 1500,
    status: "Failed",
    mode: "Card",
    reference: "REF99876CARD",
  },
  {
    bookingId:"1000342",
    id: "TXN003",
    date: "2024-07-28",
    amount: 2000,
    status: "Pending",
    mode: "Wallet",
    reference: "REF55522WALLET",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Success":
      return "bg-green-100 text-green-800";
    case "Failed":
      return "bg-red-100 text-red-800";
    case "Pending":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const Transactions = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <SidebarProvider>
        <div className="flex flex-1 min-h-[calc(100vh-4rem)]">
          <AppSidebar />
          <main className="flex flex-col flex-1 p-6">
            <h1 className="text-3xl font-bold text-foreground mb-6">My Transactions</h1>

            <Card>
              <CardContent className="overflow-x-auto p-4">
                <table className="min-w-full text-sm text-left">
                  <thead className="bg-muted text-muted-foreground">
                    <tr>
                      <th className="py-2 px-4">Booking ID</th>
                      <th className="py-2 px-4">Transaction ID</th>
                      <th className="py-2 px-4">Date</th>
                      <th className="py-2 px-4">Amount</th>
                      <th className="py-2 px-4">Status</th>
                      <th className="py-2 px-4">Mode</th>
                      <th className="py-2 px-4">Reference</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((txn) => (
                      <tr key={txn.id} className="border-b hover:bg-gray-100">
                        <td className="py-2 px-4 font-medium">{txn.bookingId}</td>
                        <td className="py-2 px-4 font-medium">{txn.id}</td>
                        <td className="py-2 px-4">{txn.date}</td>
                        <td className="py-2 px-4">₹{txn.amount}</td>
                        <td className="py-2 px-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                              txn.status
                            )}`}
                          >
                            {txn.status}
                          </span>
                        </td>
                        <td className="py-2 px-4">{txn.mode}</td>
                        <td className="py-2 px-4">{txn.reference}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Transactions;
