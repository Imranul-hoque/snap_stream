import { create } from 'zustand';

export enum ChatVariant {
    CHAT = "CHAT",
    COMMUNITY = "COMMUNITY"
}

interface ChatSidebarStore {
    collapsed: boolean;
    onExpand: () => void;
    onCollapsed: () => void;
    variant: ChatVariant;
    onChangeVarint: (varinat : ChatVariant) => void;
}

export const useChatSidebar = create<ChatSidebarStore>((set) => ({
    collapsed: false,
    onCollapsed: () => set(() => ({ collapsed: true })),
    onExpand: () => set(() => ({ collapsed: false })),
    variant: ChatVariant.CHAT,
    onChangeVarint : (variant : ChatVariant) => set(() => ({ variant }))
}))