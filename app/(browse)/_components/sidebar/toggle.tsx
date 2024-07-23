"use client"

import { Button } from "@/components/ui/button";
import { Hint } from "@/components/ui/hint";
import { useSideBar } from "@/store/use-sidebar"
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";

export const Toggle = () => {
   const {
    collapsed,
    onExpand, 
    onCollapse
   } = useSideBar(state => state);
    const label = collapsed ? "Expand" : "Collapse"
    return (
        <>
           {collapsed && (
            <div className="hidden lg:flex items-center justify-center w-full pt-4 mb-4">
               <Hint label={label} side="right" align="center" asChild>
               <Button 
                    variant="ghost" 
                    onClick={onExpand} 
                    className="w-full p-2"
                >
                    <ArrowRightFromLine className="w-4 h-4" />
                </Button>
               </Hint>
            </div>
           )}
           {!collapsed && (
            <div className="p-3 pl-6 mb-2 flex items-center w-full">
                <p className="font-semibol text-primary">For You</p>
                <Hint 
                    label={label}
                    side="right"
                    align="center"
                    asChild
                >
                    <Button 
                        onClick={onCollapse}
                        variant="ghost" 
                        className="h-auto p-2 ml-auto"
                    >
                        <ArrowLeftFromLine className="w-4 h-4"/>
                    </Button>
                </Hint>
            </div>
           )}
        </>
    )
}