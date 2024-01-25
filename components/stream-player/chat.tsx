"use client";

import { ChatVariant, useChatSidebar } from "@/hooks/use-chat-sidebar";
import { cn } from "@/lib/utils";
import {
  useChat,
  useConnectionState,
  useRemoteParticipant,
} from "@livekit/components-react";
import { ConnectionState } from "livekit-client";
import { useEffect, useMemo, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { ChatForm, ChatFormSkeleton } from "./chat-form";
import { ChatHeader, ChatHeaderSkeleton } from "./chat-header";
import { ChatList, ChatListSkeleton } from "./chat-list";
import { ChatCommunity } from "./chat-community";

interface ChatProps {
  viewerName: string;
  hostName: string;
  hostIdentity: string;
  isFollowing: boolean | undefined;
  isChatEnabled: boolean;
  isChatDelayed: boolean;
  isChatFollowersOnly: boolean;
}

export const Chat = ({
  viewerName,
  hostName,
  hostIdentity,
  isFollowing,
  isChatEnabled,
  isChatDelayed,
  isChatFollowersOnly,
}: ChatProps) => {
  const [value, setValue] = useState("");
  const connectionState = useConnectionState();
  const participant = useRemoteParticipant(hostIdentity);

  const isOnline = participant && connectionState === ConnectionState.Connected;

  const isHidden = !isOnline && !isChatEnabled;

  const { chatMessages: Messages, send } = useChat();

  const matches = useMediaQuery("(max-width:1024px)");
  const { onExpand, variant } = useChatSidebar((state) => state);

  useEffect(() => {
    if (matches) {
      onExpand();
    }
  }, [matches, onExpand]);

  const reversedMessages = useMemo(() => {
    return Messages.sort((a, b) => b.timestamp - a.timestamp);
  }, [Messages]);

  const onSubmit = () => {
    if (!send) return;

    send(value);
    setValue("");
  };

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <div
      className={cn(
        "flex flex-col bg-background border-l border-b pt-0 h-[calc(100vh-80px)]"
      )}
    >
      <ChatHeader />
      {variant === ChatVariant.CHAT && (
        <>
          <ChatList messages={reversedMessages} isHidden={isHidden} />
          <ChatForm
            onSubmit={onSubmit}
            value={value}
            onChange={onChange}
            isHidden={isHidden}
            isFollowersOnly={isChatFollowersOnly}
            isDelayed={isChatDelayed}
            isFollowing={isFollowing}
          />
        </>
      )}

      {variant === ChatVariant.COMMUNITY && (
        <ChatCommunity
          viewerName={viewerName}
          hostName={hostName}
          isHidden={isHidden}
        />
      )}
    </div>
  );
};


export const ChatSkeleton = () => {
  return (
    <div className="flex flex-col border-l border-b pt-0 h-[calc(100vh-80px)] border-2">
      <ChatHeaderSkeleton />
      <ChatListSkeleton />
      <ChatFormSkeleton />
    </div>
  );
};
