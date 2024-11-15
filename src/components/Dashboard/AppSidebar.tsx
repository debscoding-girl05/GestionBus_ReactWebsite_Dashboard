import {
  Users,
  FileText,
  Truck,
  Route,
  User as UserIcon,
  Car,
  CreditCard,
  Box,
  Mail,
  UserCircle,
} from "lucide-react"; // Import icons
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"; // Import Shadcn sidebar components

// Define items with the icons as React components (not JSX elements)
const items = [
  { title: "Clients", url: "/dashboard/clients", icon: Users },
  { title: "Reservations", url: "/dashboard/reservations", icon: FileText },
  { title: "Vehicles", url: "/dashboard/vehicles", icon: Car },
  { title: "Voyages", url: "/dashboard/voyages", icon: Route },
  { title: "Personnel", url: "/dashboard/personnel", icon: UserIcon },
  { title: "Classe", url: "/dashboard/classe", icon: UserCircle },
  { title: "Trajet", url: "/dashboard/trajet", icon: Truck },
  { title: "Paiements", url: "/dashboard/paiements", icon: CreditCard },
  { title: "Colis", url: "/dashboard/colis", icon: Box },
  { title: "Courrier", url: "/dashboard/courrier", icon: Mail },
  { title: "Chauffeur", url: "/dashboard/chauffeur", icon: UserCircle },
  { title: "Billets", url: "/dashboard/billets", icon: FileText },
];

export function AppSidebar() {
  return (
    <Sidebar className="w-64 bg-gray-800 text-black">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a
                    href={item.url}
                    className="flex items-center p-4 hover:bg-gray-700"
                  >
                    {/* Render the icon as a component */}
                    <item.icon className="mr-2" />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
