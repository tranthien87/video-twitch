"use client"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { AvatarFallback } from "@radix-ui/react-avatar"
import { cva, VariantProps } from "class-variance-authority"
import { LiveBadge } from "./live-badge"
import { Skeleton } from "./skeleton"



const AvatarSize = cva("",{
    variants: {
        size: {
            default: "h-8 w-8",
            lg: "h-14 w-14",
            xl: "h-20 w-20"
        }
    },
    defaultVariants: {
        size: "default"
    }
})

interface UserAvatarProps extends VariantProps<typeof  AvatarSize> {
    userName: string,
    imageUrl: string,
    isLive?: boolean,
    showBadge?: boolean
}

export const UserAvatar = ({
    userName, 
    imageUrl, 
    isLive, 
    showBadge,
    size
}: UserAvatarProps) => {
    const canShowBadge = showBadge && isLive;
    return (
        <div className="relative">
            <Avatar
                className={cn(
                    isLive && "ring-2 ring-rose-500 border-background",
                    AvatarSize({size})
                )}
            >
                <AvatarImage src={imageUrl} className="object-cover" />
                <AvatarFallback>
                    {userName[0].toUpperCase()}
                    {userName[userName.length - 1]}
                </AvatarFallback>
            </Avatar>
            {canShowBadge && (
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                   <LiveBadge />
                </div>
            )}
        </div>
    )
}

interface UserAvatarSkeletonProps extends VariantProps<typeof AvatarSize> {};

export const UserAvatarSkeleton = ({size,}: UserAvatarSkeletonProps) => {
    return (
        <Skeleton className={cn(
            "rounded-full",
            AvatarSize({size})
        )}/>
    )
}
