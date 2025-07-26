import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Header from "@/components/Header";

const MyBookings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <SidebarProvider>
        <div className="flex min-h-[calc(100vh-4rem)] w-full">
          <AppSidebar />
          
          <main className="flex-1 p-6">
            <h1 className="text-3xl font-bold text-foreground mb-6">My Bookings</h1>
            <p className="text-muted-foreground">Your booking history and current orders will appear here.</p>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default MyBookings;