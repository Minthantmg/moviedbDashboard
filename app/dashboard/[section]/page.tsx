'use client'
import { useSidebar } from "@/app/components/contexts/SidebarContext";
import { useEffect, useState } from "react";
// import Settings from '../../components/sections/Settings';
import Page from '@/app/components/sections/users/page';
// import Home from '@/app/components/sections/home';
import { usePathname } from "next/navigation";
import Movies from "@/app/components/sections/movies/page";
import Loading from "@/app/components/sections/loading";

const sectionComponents: { [key: string]: React.ComponentType } = {
    //settings: Settings,
    users: Page,
    // home: Home,
    movies: Movies,
};

interface SectionPageProps {
    params: Promise<{
        section: string;
    }>;
}

export default function SectionPage({ params }: SectionPageProps) {
    const [section, setSection] = useState<string | null>(null);
    const { setShowSidebar } = useSidebar();
    const pathname = usePathname();

    useEffect(() => {
        const loadSection = async () => {
            // Unwrap the params promise
            const resolvedParams = await params;
            setSection(resolvedParams.section);
        };
        loadSection();
    }, [params]);

    useEffect(() => {
        // Show the sidebar for all /dashboard/* routes
        const isDashboardRoute = pathname.startsWith('/');
        setShowSidebar(isDashboardRoute);

        return () => setShowSidebar(false); // Hide sidebar on route changes away
    }, [pathname, setShowSidebar]);

    if (section === null) {
        return <div><Loading /></div>;
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