"use client"
import { cn } from "@/lib/utils";
import { useSideBar } from "@/store/use-sidebar";
import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
interface ContainerProps {
    children: React.ReactNode;
}

export const Container = ({children}: ContainerProps) => {
    const {collapsed, onCollapse, onExpand} = useSideBar(state => state);
    const matched = useMediaQuery("(max-width: 1024px)");
    
    useEffect(() => {
        if(matched) {
            onCollapse();
        } else {
            onExpand()
        }
    
    }, [matched, onCollapse, onExpand])
    return (
      <div className={cn("flex-1", collapsed ? "ml-[70px]" : "ml-[70px] lg:ml-60")}>
          {children}
      </div>
    )
}