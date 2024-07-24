
import { Toggle, ToggleSkeleton } from "./toggle"
import { Wrapper } from "./wrapper"
import { Recommended, RecommendedSkeleton } from "./recommended";
import RecommenedUsers from "@/lib/recommended-services";


export const SideBar = async () => {
  const recommendedUsers = await RecommenedUsers();
  const parseData = JSON.parse(JSON.stringify(recommendedUsers))
    return (
      <Wrapper>
        <Toggle />
        <div className="space-y-4 pt-4 lg:pt-0">
          <Recommended data={parseData}/>
        </div>
      </Wrapper>
    )
}


export const SideBarSkeleton = () => {
  return (
    <aside className="fixed left-0 flex flex-col items-cente w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
      <ToggleSkeleton />
      <RecommendedSkeleton />
    </aside>
  )
}