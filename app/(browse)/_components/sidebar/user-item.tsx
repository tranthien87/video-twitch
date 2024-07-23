"use client"

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSideBar } from "@/store/use-sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation"
import { UserAvatar } from "./user-avatar";

interface UserItemProps {
    userName: string,
    imageUrl: string,
    isLive: boolean
}

export const UserItem = ({userName, imageUrl, isLive}: UserItemProps) => {
    const pathname = usePathname();
    const {collapsed} = useSideBar(state => state);
    const href = `/${userName}`;
    const isActive = pathname === href;
    return (
        <Button 
            variant="ghost"
            asChild
            className={cn(
                "w-full h-12",
                collapsed ? "justify-center" : "justify-start",
                isActive && "bg-accent"
            )}
        >
            <Link href={href}>
                <div className={cn(
                    "flex items-center w-full gap-x-4",
                    collapsed && "justify-center"
                )}>
                    <UserAvatar userName={userName} imageUrl={imageUrl} isLive={isLive} />
                </div>
            </Link>
        </Button>
    )
}