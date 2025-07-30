import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Header from "@/components/Header";

const Profile = () => {
    const user = {
        name: "Ravi Kiran",
        email: "ravi@example.com",
        image: "https://i.pravatar.cc/150?img=3", // Placeholder profile image
    };

    const handleLogout = () => {
        // Add logout logic here
        console.log("Logged out");
    };

    const handleEdit = () => {
        // Add edit profile logic or navigation
        console.log("Edit profile");
    };

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <SidebarProvider>
                <div className="flex flex-1 min-h-[calc(100vh-4rem)]">
                    <AppSidebar />
                    <main className="flex flex-col flex-1 p-6">
                        <h1 className="text-3xl font-bold text-foreground mb-4">My Profile</h1>
                    </main>
                </div>
            </SidebarProvider>
        </div>

    );
};

export default Profile;
