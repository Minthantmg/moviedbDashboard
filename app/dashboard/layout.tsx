'use client'
import { useSidebar } from '../components/contexts/SidebarContext';
import Sidebar from '../components/Sidebar';
import ErrorPage from "@/app/dashboard/errorPage";

export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode;
}) {
    const { showSidebar } = useSidebar();

    return (
        <>
            <div className="lg:flex hidden">
                <div className="sideBar_width">
                    {showSidebar && <Sidebar/>}
                </div>
                <main className="detail_width flex-1 p-4">{children}</main>
            </div>
            <div className="lg:hidden block">
                <ErrorPage />
            </div>
        </>

    );
}
