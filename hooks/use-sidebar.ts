import { create } from "zustand";

interface useSidebarProps {
    collapse: boolean;
    onCollapse: () => void;
    onExpand: () => void;
}

export const useSidebar = create<useSidebarProps>((set) => ({
    collapse: false,
    onCollapse: () => set(() => ({ collapse: true })),
    onExpand : () => set(() => ({ collapse : false }))
}))