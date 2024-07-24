"use client"

import { Button } from "@/components/ui/button";
import { LiveBadge } from "@/components/ui/live-badge";
import { Skeleton } from "@/components/ui/skeleton";
import { UserAvatar } from "@/components/ui/user-avatar";
import { cn } from "@/lib/utils";
import { useSideBar } from "@/store/use-sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation"


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
                "w-full h-12 space-y-1",
                collapsed ? "justify-center" : "justify-start",
                isActive && "bg-accent"
            )}
        >
            <Link href={href}>
                <div className={cn(
                    "flex items-center w-full gap-x-4",
                    collapsed && "justify-center"
                )}>
                    <UserAvatar 
                        userName={userName}
                        imageUrl={imageUrl} 
                        isLive={isLive} 
                        showBadge={false} />
                    { !collapsed && (
                        <div className="truncate">
                            {userName}
                        </div>
                    )}
                    { !collapsed && isLive && (
                        <LiveBadge className="ml-auto"/>
                    )}    
                </div>
            </Link>
        </Button>
    )
}


export const UserSkeleton = () => {
    return (
        <li className="flex items-center gap-x-4 px-3 py-2">
            <Skeleton className="min-h-[32px] min-w-[32px] rounded-full" />
            <div className="flex-1">
                <Skeleton className="h-6" />
            </div>
        </li>
    )
}