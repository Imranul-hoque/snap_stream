"use client";

import { useSidebar } from "@/hooks/use-sidebar";
import { cn } from "@/lib/utils";

interface ContainerProps {
    children : React.ReactNode
}

export const Container = ({ children }: ContainerProps) => {

    const { collapse } = useSidebar((state) => state);
    


    return (
        <div className={cn(collapse ? "ml-20": "ml-60", "flex-1")}>
            {children}
        </div>
    )
}