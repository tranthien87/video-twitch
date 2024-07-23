"use client"
import { useSideBar } from "@/store/use-sidebar"
import {User} from "@/lib/types";
import { UserItem } from "./user-item";

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
            <ul>
                {
                    data.map((user) => (
                        <UserItem 
                            key={user.userId} 
                            userName={user.userName}
                            imageUrl={user.imageUrl}
                            isLive={true}
                            />
                    ))
                }
            </ul>
        </div>
    )
}