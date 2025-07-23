import { Users, Calendar, BarChart3, Settings, Phone, Mail, FileText, Home } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from './ui/sidebar';

interface DashboardSidebarProps {
  children: React.ReactNode;
  currentPage: string;
  onPageChange: (page: string) => void;
}

const items = [
  {
    title: 'Dashboard',
    key: 'dashboard',
    icon: Home,
  },
  {
    title: 'Customers',
    key: 'customers',
    icon: Users,
  },
  {
    title: 'Activities',
    key: 'activities',
    icon: Calendar,
  },
  {
    title: 'Reports',
    key: 'reports',
    icon: BarChart3,
  },
  {
    title: 'Communications',
    key: 'communications',
    icon: Mail,
  },
  {
    title: 'Calls',
    key: 'calls',
    icon: Phone,
  },
  {
    title: 'Documents',
    key: 'documents',
    icon: FileText,
  },
];

export function DashboardSidebar({ children, currentPage, onPageChange }: DashboardSidebarProps) {
  const getCurrentPageTitle = () => {
    const currentItem = items.find((item) => item.key === currentPage);
    return currentItem ? currentItem.title : 'CRM Dashboard';
  };

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>CRM Dashboard</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={currentPage === item.key}>
                      <button onClick={() => onPageChange(item.key)} className="w-full">
                        <item.icon />
                        <span>{item.title}</span>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Settings />
                <span>Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <main className="flex-1 overflow-auto">
        <div className="flex items-center gap-2 p-4 border-b">
          <SidebarTrigger />
          <h1>{getCurrentPageTitle()}</h1>
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
