"use client";

import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useSidebar } from "@/hooks/use-sidebar";
import { ArrowLeftToLine, ArrowRightToLine } from "lucide-react";

export const Toogle = () => {

    const { collapse, onCollapse, onExpand } = useSidebar((state) => state)

    return (
      <div className="flex flex-col relative mb-2">
        {collapse && (
          <div className="hidden lg:flex items-center justify-center w-full p-2">
            <Hint side="right" label="Expand">
              <Button
                variant={"ghost"}
                className="font-bold text-white"
                onClick={onExpand}
              >
                <ArrowRightToLine className="w-5 h-5" />
              </Button>
            </Hint>
          </div>
        )}

        {!collapse && (
          <div className="flex items-center w-full">
            <p className="font-semibold text-sm text-white pl-6">For you</p>

            <Hint label="Collapse" side="right">
              <Button
                onClick={onCollapse}
                variant={"ghost"}
                size={"sm"}
                className="ml-auto"
              >
                <ArrowLeftToLine className="h-5 w-5 font-bold text-white" />
              </Button>
            </Hint>
          </div>
        )}
      </div>
    );
}

export const ToggleSkeleton = () => {
  return (
    <div className="p-3 pl-6 mb-2 hidden lg:flex items-center justify-between w-full">
      <Skeleton className="h-6 w-[100px]" />
      <Skeleton className="h-6 w-6" />
    </div>
  );
};