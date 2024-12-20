'use client'
import React, {useState} from 'react';
import {useUser} from "@/hooks/useUser";
import {DataTable} from "@/app/components/sections/users/data-table";
import {columns} from "@/app/components/sections/users/columns";
import Loading from "@/app/components/sections/loading";
import AddUserSheet from "@/app/components/sections/users/components/AddUserSheet";

const Page = () => {
    const {getUserListHook} = useUser()
    const {data: user,isLoading,isSuccess,refetch} = getUserListHook()
    const [isAddDialogOpen, setAddDialogOpen] = useState(false);

    const handleUserChange = () => {
        refetch();
    };

    return (
        <div>
            {isLoading && <><Loading /></>}
            {isSuccess && (
                <div>
                    <div className='text-3xl mt-4'>User and Admin List</div>
                    <div className='mt-4'>Total: {user.length} person</div>
                    <AddUserSheet isOpen={isAddDialogOpen} setIsOpen={setAddDialogOpen} onUserAdded={handleUserChange}/>
                    <DataTable columns={columns} data={user} />
                </div>
            )}
        </div>
    );
};

export default Page;