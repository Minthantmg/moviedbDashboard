'use client'
import { useSidebar } from '../components/contexts/SidebarContext';
import Sidebar from '../components/Sidebar';

export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode;
}) {
    const { showSidebar } = useSidebar();

    return (
        <div className="flex">
            {showSidebar && <Sidebar />}
            <main className="flex-1 p-4">{children}</main>
        </div>
    );
}
