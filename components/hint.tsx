"use client";

import {
    TooltipProvider,
    Tooltip,
    TooltipContent,
    TooltipTrigger
} from "@/components/ui/tooltip";
 
interface HintProps {
    children: React.ReactNode;
    label: string;
    side: "top" | "bottom" | "left" | "right";
    align? : "start" | "end" | "center"
}


export const Hint = ({
    children,
    label,
    side,
    align = "center"
}: HintProps) => {
    return (
        <TooltipProvider>

            <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent className="p-2 border-none bg-white text-black" side={side} align={align} >
                    {label}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}