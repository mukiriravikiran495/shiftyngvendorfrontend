import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Header from "@/components/Header";
import { Truck, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = ["Upcoming", "Ongoing", "Completed", "Cancelled"];

const orders = [
  {
    id: "ORD001",
    customer: "Rajesh Kumar",
    from: "Mumbai",
    to: "Delhi",
    amount: 15000,
    status: "In Transit",
    date: "2024-01-26",
    items: "Household Items",
  },
  {
    id: "ORD002",
    customer: "Priya Sharma",
    from: "Bangalore",
    to: "Hyderabad",
    amount: 8500,
    status: "Delivered",
    date: "2024-01-25",
    items: "Office Equipment",
  },
  {
    id: "ORD003",
    customer: "Amit Patel",
    from: "Pune",
    to: "Ahmedabad",
    amount: 12000,
    status: "Pending",
    date: "2024-01-24",
    items: "Electronics",
    bookingDate: "22-JUL-2025",
    dropDate: "24-JUL-2025",
    paymentStatus: "Paid",
    paymentMode: "Online",
    paymentDate: "22-JUL-2025",
    totalAmount: "17000",
    netAmount: "16600",
    walletAmount: "400",
    shiftType: "ONE BHK",
  },
  {
    id: "ORD004",
    customer: "Sunita Singh",
    from: "Chennai",
    to: "Kochi",
    amount: 6500,
    status: "In Transit",
    date: "2024-01-23",
    items: "Books & Documents",
    bookingDate: "22-JUL-2025",
    dropDate: "24-JUL-2025",
    paymentStatus: "Paid",
    paymentMode: "Online",
    paymentDate: "22-JUL-2025",
    totalAmount: "17000",
    netAmount: "16600",
    walletAmount: "400",
    shiftType: "ONE BHK",
  },
  {
    id: "ORD005",
    customer: "Vikram Joshi",
    from: "Jaipur",
    to: "Indore",
    amount: 9800,
    status: "Delivered",
    date: "2024-01-22",
    items: "Furniture",
    bookingDate: "22-JUL-2025",
    dropDate: "24-JUL-2025",
    paymentStatus: "Paid",
    paymentMode: "Online",
    paymentDate: "22-JUL-2025",
    totalAmount: "17000",
    netAmount: "16600",
    walletAmount: "400",
    shiftType: "ONE BHK",
  },
];

const MyBookings = () => {
  const [activeTab, setActiveTab] = useState("Upcoming");
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

  const getFilteredOrders = () => {
    switch (activeTab) {
      case "Upcoming":
        return orders.filter((order) => order.status === "Pending");
      case "Ongoing":
        return orders.filter((order) => order.status === "In Transit");
      case "Completed":
        return orders.filter((order) => order.status === "Delivered");
      case "Cancelled":
        return orders.filter((order) => order.status === "Cancelled");
      default:
        return [];
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Transit":
        return "bg-orange-100 text-orange-600";
      case "Delivered":
        return "bg-green-100 text-green-600";
      case "Pending":
        return "bg-gray-100 text-gray-600";
      case "Cancelled":
        return "bg-red-100 text-red-600";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const renderTabContent = () => {
    const filteredOrders = getFilteredOrders();

    if (filteredOrders.length === 0) {
      return (
        <div className="flex-1 flex items-center justify-center text-muted-foreground">
          No orders found.
        </div>
      );
    }

    return (
      <div className="flex-1 space-y-4 overflow-auto pr-2">
        {filteredOrders.map((order) => (
          <button
            key={order.id}
            className="w-full flex items-start justify-between border rounded-xl p-4 bg-white hover:bg-[#FAF9F6] shadow-sm transition-colors"
            onClick={() => setSelectedOrderId(selectedOrderId === order.id ? null : order.id)
            }
          >
            {/* Left */}
            <div className="flex gap-4">
              {/* Icon */}
              <div className="bg-blue-100 p-2 rounded-full h-fit mt-1">
                <Truck className="h-5 w-5 text-blue-600" />
              </div>

              {/* Info */}
              <div className="text-left space-y-1">
                {/* ID + Status */}
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-foreground">{order.id}</span>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </div>

                {/* Customer */}
                <div className="font-semibold">{order.customer}</div>

                {/* Route and date */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {order.from} → {order.to}
                  <span className="ml-2">{order.date}</span>
                </div>

                {/* Items */}
                <div className="text-sm text-muted-foreground">{order.items}</div>
              </div>
            </div>

            {/* Amount */}
            <div className="text-right font-bold text-blue-600 text-lg whitespace-nowrap">
              ₹{order.amount.toLocaleString()}
            </div>
            {selectedOrderId === order.id && (
              <div className="w-full mt-4 bg-gray-50 border-t pt-6 px-6 text-sm text-left rounded-b-xl space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                  <div>
                    <strong>Pickup Location:</strong> {order.from}
                  </div>
                  <div>
                    <strong>Drop Location:</strong> {order.to}
                  </div>
                  <div>
                    <strong>Booking ID:</strong> {order.id}
                  </div>
                  <div>
                    <strong>Booking Date:</strong> {order.bookingDate || "2024-07-30"}
                  </div>
                  <div>
                    <strong>Drop Date:</strong> {order.dropDate || "2024-08-01"}
                  </div>
                  <div>
                    <strong>Shift Type:</strong> {order.shiftType || "Morning"}
                  </div>
                  <div className="sm:col-span-2">
                    <strong>Household Items:</strong> {order.items || "Washing Machine, Sofa, TV"}
                  </div>
                </div>

                <div className="border-t pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
                  <div>
                    <strong>Total Amount:</strong> ₹{order.totalAmount || order.amount}
                  </div>
                  <div>
                    <strong>Net Amount:</strong> ₹{order.netAmount || order.amount - 500}
                  </div>
                  <div>
                    <strong>Wallet Amount Used:</strong> ₹{order.walletAmount || 500}
                  </div>
                  <div>
                    <strong>Payment Status:</strong>{" "}
                    <span className={order.paymentStatus === "Paid" ? "text-green-600 font-semibold" : "text-red-600"}>
                      {order.paymentStatus || "Pending"}
                    </span>
                  </div>
                  <div>
                    <strong>Payment Mode:</strong> {order.paymentMode || "Online"}
                  </div>
                  <div>
                    <strong>Payment Date:</strong> {order.paymentDate || "2024-07-30"}
                  </div>
                </div>
              </div>
            )}

          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <SidebarProvider>
        <div className="flex flex-1 min-h-[calc(100vh-4rem)]">
          <AppSidebar />
          <main className="flex flex-col flex-1 p-6">
            <h1 className="text-3xl font-bold text-foreground mb-4">My Bookings</h1>

            {/* Tabs */}
            <div className="flex gap-6 mb-4 border-b border-border">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={cn(
                    "pb-2 text-base font-medium border-b-2 transition-colors duration-200",
                    activeTab === tab
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  )}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content (full height) */}
            <div className="flex-1 flex flex-col">{renderTabContent()}</div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default MyBookings;
