"use client";

import { onFollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { toast } from "sonner";

export const Actions = ({ userId }: { userId : string }) => {

    const [isPending, startTransiton] = useTransition();

    const handleFollow = () => {
        startTransiton(() => {
            onFollow(userId).then((data) => toast.success("followd"))
        })
    }

    return (
        <div>
            <Button disabled={isPending} onClick={handleFollow} variant={"primary"}>
                Follow
            </Button>
        </div>
    )
}