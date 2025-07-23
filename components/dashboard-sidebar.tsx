'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import {
  BarChart,
  Home,
  Settings,
  Users,
  Activity,
  FileText,
  Phone,
  MessageSquare,
  FolderOpen,
  UserCheck,
} from 'lucide-react';

const menuItems = [
  {
    title: 'Dashboard',
    icon: Home,
    href: '/',
  },
  {
    title: 'Customers',
    icon: Users,
    href: '/customers',
  },
  {
    title: 'Leads',
    icon: UserCheck,
    href: '/leads',
  },
  {
    title: 'Activities',
    icon: Activity,
    href: '/activities',
  },
  {
    title: 'Reports',
    icon: FileText,
    href: '/reports',
  },
  {
    title: 'Communications',
    icon: MessageSquare,
    href: '/communications',
  },
  {
    title: 'Calls',
    icon: Phone,
    href: '/calls',
  },
  {
    title: 'Documents',
    icon: FolderOpen,
    href: '/documents',
  },
  {
    title: 'Analytics',
    icon: BarChart,
    href: '/analytics',
  },
  {
    title: 'Settings',
    icon: Settings,
    href: '/settings',
  },
];

export function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>CRM Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.href}>
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
