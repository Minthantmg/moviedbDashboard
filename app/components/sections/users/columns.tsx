"use client"

import {ColumnDef} from "@tanstack/react-table"
import {User} from "@/type";
import {ArrowDownAZ} from "lucide-react"
import {Button} from "@/components/ui/button";

import UserActionsDropdown from "@/app/components/sections/users/components/UserActionsDropdown";

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "name",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Username
                    <ArrowDownAZ className="ml-2 h-4 w-4"/>
                </Button>
            )
        }
    },
    {
        accessorKey: "email",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Username
                    <ArrowDownAZ className="ml-2 h-4 w-4"/>
                </Button>
            )
        }
    },
    {
        accessorKey: "password",
        header: "Password",
    },
    {
        accessorKey: "role",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Role
                    <ArrowDownAZ className="ml-2 h-4 w-4"/>
                </Button>
            )
        }
    },
    {
        id: "actions",
        cell: ({ row }) => <UserActionsDropdown user={row.original} />,
    },
]
