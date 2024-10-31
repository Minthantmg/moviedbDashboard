import { LayoutDashboard,ShieldCheck,Settings } from 'lucide-react'

export const sidebarItems = [
    {
        title: "Dashboard",
        url: "../dashboard/dashboard",
        icon: <LayoutDashboard />,
        tabValue: 1,
    },
    {
        title: "Users",
        url: "../dashboard/users",
        icon: <ShieldCheck />,
        tabValue: 2,
    },
    {
        title: "Setting",
        url: "../dashboard/settings",
        icon: <Settings />,
        tabValue: 2,
    },
];