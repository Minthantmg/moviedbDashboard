import {sidebarItems} from "@/constants/sideBarItems";
import Link from "next/link";
import movie from '../public/movie.png'
import Image from "next/image";

const Sidebar = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between border-r-2">
            <div>
                <div className='flex justify-center items-center px-2 pt-4 pb-16'>
                    <div className="flex justify-center items-center gap-2">
                        <Image src={movie} alt="title_img" width={32} height={32}/>
                        MovieDb
                    </div>
                </div>
                {sidebarItems.map((item) => (
                    <Link
                        href={item.url}
                        key={item.title}
                        className="py-4 px-4 flex items-center mx-2 sidebarItem"
                    >
                        <div className="mr-2">{item.icon}</div>
                        <h1 className="ml-3">{item.title}</h1>
                    </Link>
                ))}
            </div>
            <div className='flex items-center justify-center'>
                v1.0.0
            </div>
        </div>
    )
};

export default Sidebar;
