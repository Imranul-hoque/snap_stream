"use client";

import { Hint } from "../hint";
import { useChatSidebar } from "@/hooks/use-chat-sidebar";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import { Button } from "../ui/button";


export const ChatToggle = () => {
  const { collapsed, onCollapsed, onExpand } = useChatSidebar((state) => state);

  const Icon = collapsed ? ArrowLeftFromLine : ArrowRightFromLine ;
    const label = collapsed ? "Expand" : "Collapsed";

    const onToggle = () => {
        if (collapsed) {
            onExpand()
        } else {
            onCollapsed()
        }
    }
    
    return <Hint label={label} side="left">
        <Button
            onClick={onToggle}
            variant={"ghost"}
        >
            <Icon className="h-5 w-5" />
        </Button>
    </Hint>
};
