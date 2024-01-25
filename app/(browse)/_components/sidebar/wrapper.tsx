"use client";

import { useSidebar } from "@/hooks/use-sidebar";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { ToggleSkeleton } from "./toogle";
import { RecommendedSkeleton } from "./recommended";

interface WrapperProps {
    children : React.ReactNode
}

export const Wrapper = ({ children }: WrapperProps) => {

  const matches = useMediaQuery("(max-width:1024px)");
  const [isMounted, setIsMounted] = useState(false);

  const { collapse, onCollapse, onExpand } = useSidebar((state) => state);

  
  useEffect(() => {
    if (matches) {
      onCollapse()
    } else {
      onExpand()
    }
  }, [matches, onCollapse, onExpand])
  
  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  if (!isMounted) {
    return (
      <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
        <ToggleSkeleton />
        <RecommendedSkeleton />
      </aside>
    );
  }
  
    return (
      <div className={cn("fixed w-60 left-0 bg-background h-full", collapse && "w-20")}>
        {children}
      </div>
    );
}