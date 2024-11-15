// app/layout.tsx

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"; // Import the necessary sidebar components
import { AppSidebar } from "@/components/Dashboard/AppSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Sidebar Trigger for Mobile */}
          <SidebarTrigger>
            <button className="lg:hidden text-white bg-purple-500 p-2 rounded-full mb-4">
              <span className="h-6 w-6">☰</span> {/* This is your menu icon */}
            </button>
          </SidebarTrigger>

          {/* Content Area */}
          <div className="lg:flex lg:flex-1">
            {children} {/* This will render the nested routes */}
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
