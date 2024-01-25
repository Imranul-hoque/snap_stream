import { Toogle } from "./toogle"
import { Wrapper } from "./wrapper";
import { getRecommended } from "@/lib/recommended";
import { Recommended, RecommendedSkeleton } from "./recommended";
import { Following } from "./following";
import { getFollowedUsers } from "@/lib/follow-service";

export const Sidebar = async () => {

  const following = await getFollowedUsers();
  const users = await getRecommended();
 
    return (
      <Wrapper>
        <Toogle />
        <div className="space-y-4 pt-4 lg:pt-0">
          <Following data={following} />
          <Recommended users={users} />
        </div>
      </Wrapper>
    );
}


export const SidebarSkeleton = () => {
  return (
    <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
      <RecommendedSkeleton />
    </aside>
  );
};
