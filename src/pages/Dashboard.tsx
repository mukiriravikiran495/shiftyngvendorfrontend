import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Calendar, 
  IndianRupee, 
  Package, 
  Clock,
  MapPin,
  Truck
} from "lucide-react";

const Dashboard = () => {
  const [recentOrders] = useState([
    {
      id: "ORD001",
      customer: "Rajesh Kumar",
      from: "Mumbai",
      to: "Delhi",
      amount: 15000,
      status: "In Transit",
      date: "2024-01-26",
      items: "Household Items"
    },
    {
      id: "ORD002", 
      customer: "Priya Sharma",
      from: "Bangalore",
      to: "Hyderabad",
      amount: 8500,
      status: "Delivered",
      date: "2024-01-25",
      items: "Office Equipment"
    },
    {
      id: "ORD003",
      customer: "Amit Patel",
      from: "Pune", 
      to: "Ahmedabad",
      amount: 12000,
      status: "Pending",
      date: "2024-01-24",
      items: "Electronics"
    },
    {
      id: "ORD004",
      customer: "Sunita Singh",
      from: "Chennai",
      to: "Kochi",
      amount: 6500,
      status: "In Transit", 
      date: "2024-01-23",
      items: "Books & Documents"
    },
    {
      id: "ORD005",
      customer: "Vikram Joshi",
      from: "Jaipur",
      to: "Indore",
      amount: 9800,
      status: "Delivered",
      date: "2024-01-22",
      items: "Furniture"
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-success text-success-foreground";
      case "In Transit":
        return "bg-warning text-warning-foreground";
      case "Pending":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <SidebarProvider>
        <div className="flex min-h-[calc(100vh-4rem)] w-full">
          <AppSidebar />
          
          <main className="flex-1 p-6 space-y-6">
            {/* Welcome Section */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Welcome back!</h1>
                <p className="text-muted-foreground text-lg">Here's what's happening with your business today.</p>
              </div>
            </div>

            {/* Earnings Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">My Earnings</CardTitle>
                  <div className="p-2 bg-primary/10 rounded-full">
                    <IndianRupee className="h-5 w-5 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">₹1,24,500</div>
                  <p className="text-sm text-muted-foreground flex items-center gap-1 mt-2">
                    <TrendingUp className="h-4 w-4 text-success" />
                    +12% from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">My Balance</CardTitle>
                  <div className="p-2 bg-success/10 rounded-full">
                    <TrendingUp className="h-5 w-5 text-success" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-success text-[#BA1C1C]">₹-354</div>
                  <p className="text-sm text-muted-foreground flex items-center gap-1 mt-2">
                    Recharge your Wallet
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">Today Earnings</CardTitle>
                  <div className="p-2 bg-warning/10 rounded-full">
                    <Calendar className="h-5 w-5 text-warning" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-warning">₹27,800</div>
                  <p className="text-sm text-muted-foreground flex items-center gap-1 mt-2">
                    January 2024
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Orders Section */}
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold flex items-center gap-2">
                    <Package className="h-6 w-6 text-primary" />
                    Recent Orders
                  </CardTitle>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-xl hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-primary/10 rounded-full">
                          <Truck className="h-5 w-5 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold">{order.id}</span>
                            <Badge className={getStatusColor(order.status)}>
                              {order.status}
                            </Badge>
                          </div>
                          <p className="text-sm font-medium">{order.customer}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {order.from} → {order.to}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {order.date}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground">{order.items}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-primary">₹{order.amount.toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Dashboard;