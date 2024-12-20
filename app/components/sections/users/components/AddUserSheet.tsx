import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {useUser} from "@/hooks/useUser";

interface AddUserDialogProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    onUserAdded: () => void;
}

const AddUserSheet: React.FC<AddUserDialogProps> = ({isOpen, setIsOpen, onUserAdded }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState<'admin' | 'user'>('admin');
    const {createUserHook} = useUser()
    const {mutateAsync:createUser,isPending,isSuccess} = createUserHook()

    useEffect(() =>{
        if(isSuccess){
            onUserAdded();
        }
    },[isSuccess,setIsOpen,onUserAdded])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try{
            e.preventDefault()
            await createUser({name: name, email, password,role})
            setIsOpen(false);
        }catch (error){
            throw error;
        }
    }

    return (
        <div>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <Button className="text-sm mt-4" variant="outline">Add user or admin</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add User or Admin</DialogTitle>
                        <DialogDescription>
                            You can add the user or admin details here.
                        </DialogDescription>
                    </DialogHeader>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter user name"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                required
                                onChange={e => setName(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter user email"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                required
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="password" className="text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter password"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                required
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="role" className="text-sm font-medium text-gray-700">
                                Role
                            </label>
                            <select
                                id="role"
                                name="role"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                required
                                onChange={e => setRole(e.target.value as 'admin' | 'user')}
                            >
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                            </select>
                        </div>

                        <div className="flex items-center justify-end space-x-2">
                            <button
                                type="button"
                                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                                onClick={() => setIsOpen(false)}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                            >
                                {isPending ? <span className="loading loading-spinner loading-sm"></span> : "Save"}
                            </button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default AddUserSheet;