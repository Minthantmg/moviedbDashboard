'use client'
import Settings from '../../components/sections/Settings';
import { useSidebar } from "@/app/components/contexts/SidebarContext";
import { useEffect, useState } from "react";

export default function SectionPage({ params }: { params: { section: string } | Promise<{ section: string }> }) {
    const [section, setSection] = useState<string | null>(null);
    const { setShowSidebar } = useSidebar();

    useEffect(() => {
        const loadSection = async () => {
            const resolvedParams = await (params instanceof Promise ? params : Promise.resolve(params));
            setSection(resolvedParams.section);
        };
        loadSection()
    }, [params]);

    useEffect(() => {
        setShowSidebar(section === 'settings');
        return () => setShowSidebar(true);
    }, [section, setShowSidebar]);

    if (section === null) {
        return <div>Loading...</div>;
    }

    switch (section) {
        case 'settings':
            return <Settings />;
        default:
            return (
                <div className="flex justify-center items-center h-screen">
                    {`${section} route does not exist.`}
                </div>
            );
    }
}
