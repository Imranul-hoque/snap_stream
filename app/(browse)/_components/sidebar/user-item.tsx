"use client";

import { LiveBadge } from "@/components/live-badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { UserAvatar } from "@/components/user-avatar";
import { useSidebar } from "@/hooks/use-sidebar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface UserItemProps {
    imageUrl: string;
    username: string;
    isLive? : boolean
}

export const UserItem = ({
    imageUrl,
    username,
    isLive
}: UserItemProps) => {
    
  const pathname = usePathname();

  const { collapse } = useSidebar((state) => state);

  const href = `/${username}`;
  const isActive = pathname === href;

    return (
      <Button
        asChild
        variant="ghost"
        className={cn(
          "w-full h-12 ",
          collapse ? "justify-center" : "justfy-start",
          isActive && "bg-accent"
        )}
      >
        <Link href={href}>
          <div
            className={cn(
              "flex items-center w-full gap-x-4",
              collapse && "justify-center"
            )}
          >
            <UserAvatar
              imageUrl={imageUrl}
              username={username}
              isLive={isLive}
              showBadge
            />
            {!collapse && <p className="truncate">{username}</p>}

            {!collapse && isLive && <LiveBadge className="ml-auto" />}
          </div>
        </Link>
      </Button>
    );
}

export const UserItemSkeleton = () => {
  return (
    <li className="flex items-center gap-x-4 px-3 py-2">
      <Skeleton className="min-h-[32px] min-w-[32px] rounded-full" />
      <div className="flex-1">
        <Skeleton className="h-6" />
      </div>
    </li>
  );
};