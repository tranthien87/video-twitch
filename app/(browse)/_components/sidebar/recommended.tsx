"use client"
import { useSideBar } from "@/store/use-sidebar"
import {User} from "@/lib/types";
import { UserItem, UserSkeleton } from "./user-item";
import { Link } from "lucide-react";


interface RecommendedProps {
    data: User[],
}

export const Recommended = ({data}: RecommendedProps) => { 
    const {collapsed} = useSideBar(state => state);
    const showLabel = !collapsed && data.length > 0
    return (
        <div>
            {showLabel && (
                <div className="pl-6 mb-4">
                    <p className="text-sm text-muted-foreground">
                        Recommended
                    </p>
                </div>
                
            )}
            <div className="space-y-2">
                {
                    data.map((user) => (
                        <UserItem 
                            key={user.userId} 
                            userName={user.userName}
                            imageUrl={user.imageUrl}
                            isLive={false}
                            />
                    ))
                }
            </div>
           
        </div>
    )
}

export const RecommendedSkeleton = () => {
    return (
        <ul className="px-2">
          {[...Array(3)].map((_, i) => (
             <UserSkeleton key={i} />
          ))}
        </ul>
    )
}