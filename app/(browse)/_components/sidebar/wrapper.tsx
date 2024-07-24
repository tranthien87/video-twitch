"use client"
import { cn } from "@/lib/utils"
import { useSideBar } from "@/store/use-sidebar"
import { useEffect, useState } from "react"
import { ToggleSkeleton } from "./toggle"
import { RecommendedSkeleton } from "./recommended"
import { useIsClient } from "usehooks-ts"

interface WrapperProps {
    children: React.ReactNode
}

export const Wrapper = ({children}: WrapperProps) => {
    const { collapsed } = useSideBar(state => state);
    const isClient = useIsClient();


    if (!isClient) {
        return (
            <aside className="fixed left-0 z-50 h-full w-[70px] lg:w-60 bg-sideBarBG flex flex-col border-r border-[#2d2e35]">
                <ToggleSkeleton />
                <RecommendedSkeleton />
            </aside>
        );
    }

    return (
        <aside className={cn(
            "fixed left-0 z-50 h-full w-60 bg-sideBarBG flex flex-col border-r border-[#2d2e35]",
            collapsed && "w-[70px]"
        )}>
            {children}
        </aside>
    )
}