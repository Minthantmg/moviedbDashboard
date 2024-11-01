'use client'
import { useSidebar } from "@/app/components/contexts/SidebarContext";
import { useEffect, useState } from "react";
import Settings from '../../components/sections/Settings';
import Users from '@/app/components/sections/Users';
import Home from '@/app/components/sections/home';
import { usePathname } from "next/navigation";
import Movies from "@/app/components/sections/movies/movies";

const sectionComponents: { [key: string]: React.ComponentType } = {
    settings: Settings,
    users: Users,
    home: Home,
    movies: Movies
};

export default function SectionPage({ params }: { params: { section: string } | Promise<{ section: string }> }) {
    const [section, setSection] = useState<string | null>(null);
    const { setShowSidebar } = useSidebar();
    const pathname = usePathname();

    useEffect(() => {
        const loadSection = async () => {
            const resolvedParams = await (params instanceof Promise ? params : Promise.resolve(params));
            setSection(resolvedParams.section);
        };
        loadSection();
    }, [params]);

    useEffect(() => {
        // Show the sidebar for all /dashboard/* route
        const isDashboardRoute = pathname.startsWith('/');
        setShowSidebar(isDashboardRoute);

        return () => setShowSidebar(false); // Hide sidebar on route changes away
    }, [pathname, setShowSidebar]);

    if (section === null) {
        return <div>Loading...</div>;
    }

    // Get the component for the section if it exists
    const SectionComponent = sectionComponents[section];

    // If no component is found for the section, show a 404 message
    return SectionComponent ? (
        <SectionComponent />
    ) : (
        <div className="flex justify-center items-center h-screen">
            {`${section} route does not exist.`}
        </div>
    );
}
