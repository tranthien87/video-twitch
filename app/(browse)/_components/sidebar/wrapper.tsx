"use client"
import { cn } from "@/lib/utils"
import { useSideBar } from "@/store/use-sidebar"

interface WrapperProps {
    children: React.ReactNode
}

export const Wrapper = ({children}: WrapperProps) => {
    const { collapsed } = useSideBar(state => state)

    return (
        <aside className={cn(
            "fixed left-0 z-50 h-full w-60 bg-sideBarBG flex flex-col border-r border-[#2d2e35]",
            collapsed && "w-[70px]"
        )}>
            {children}
        </aside>
    )
}