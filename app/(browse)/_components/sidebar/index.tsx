
import getSeft from "@/lib/auth-services"
import { Toggle } from "./toggle"
import { Wrapper } from "./wrapper"
import { Recommended } from "./recommended";
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