"use client";

import { useSidebar } from "@/hooks/use-sidebar";
import { Stream, User } from "@prisma/client";
import { UserItem, UserItemSkeleton } from "./user-item";

interface RecommendedProps {
  users: (User & {
    stream : Stream | null
  })[];
}

export const Recommended = ({ users }: RecommendedProps) => {
  const { collapse } = useSidebar((state) => state);

  const canShow = !collapse && users.length > 0;

  return (
    <div className="p-3 space-y-4">
      {canShow && (
        <div className="pl-2 mb-2">
          <p className="text-sm text-muted-foreground">Recommended</p>
        </div>
      )}

      {users.map((user) => (
        <UserItem
          key={user.id}
          imageUrl={user.imageUrl}
          username={user.username}
          isLive={user.stream?.isLive}
        />
      ))}
    </div>
  );
};


export const RecommendedSkeleton = () => {
  return (
    <ul className="px-2">
      {[...Array(3)].map((_, i) => (
        <UserItemSkeleton key={i} />
      ))}
    </ul>
  );
};
