import { onFollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";
import { isFollowingUser } from "@/lib/follow-service";
import { getUserByUsername } from "@/lib/user-service";
import { toast } from "sonner";
import { Actions } from "../_components/actions";
import { StreamPlayer } from "@/components/stream-player";
import { notFound } from "next/navigation";
import { isBlockedByUser } from "@/lib/block-service";

const Username = async ({params}:{ params : {username : string} }) => {
     const user = await getUserByUsername(params.username);

     if (!user || !user.stream) {
       notFound();
     }

     const isFollowing = await isFollowingUser(user.id);
     const isBlocked = await isBlockedByUser(user.id);

     if (isBlocked) {
       notFound();
     }
    
    return (
      <StreamPlayer
        user={user}
        stream={user.stream}
        isFollowing={isFollowing}
      />
    );
}
 
export default Username;