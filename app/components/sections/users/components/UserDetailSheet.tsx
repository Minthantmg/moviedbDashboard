import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {User} from "@/type";

interface UserDetailSheetProps {
    user: User;
}

const UserDetailSheet: React.FC<UserDetailSheetProps> = ({user}) => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className="text-sm cursor-pointer py-2 hover:bg-gray-100 px-2">View Detail</div>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>{user.name}</SheetTitle>
                        <div className="text-black text-sm">
                            <div className="flex mt-4">
                                <div className="w-1/3">
                                    Name
                                </div>
                                <div className="w-2/3 text-gray-500 break-all">
                                    {user.email}
                                </div>
                            </div>
                            <div className="flex mt-4">
                                <div className="w-1/3">
                                    Password
                                </div>
                                <div className="w-2/3 text-gray-500 break-all">
                                    {user.password}
                                </div>
                            </div>
                            <div className="flex mt-4">
                                <div className="w-1/3">
                                    Role
                                </div>
                                <div className="w-2/3 text-gray-500 break-all">
                                    {user.role}
                                </div>
                            </div>
                        </div>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
};

export default UserDetailSheet;