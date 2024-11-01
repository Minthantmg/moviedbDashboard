import { TvMinimal,Users,Settings,Clapperboard } from 'lucide-react'

export const sidebarItems = [
    {
        title: "Home",
        url: "../dashboard/home",
        icon: <TvMinimal />,
        tabValue: 1,
    },
    {
        title: "Users",
        url: "../dashboard/users",
        icon: <Users />,
        tabValue: 2,
    },
    {
        title: "Movies",
        url: "../dashboard/movies",
        icon: <Clapperboard />,
        tabValue: 3,
    },
    {
        title: "Setting",
        url: "../dashboard/settings",
        icon: <Settings />,
        tabValue: 4,
    },
];