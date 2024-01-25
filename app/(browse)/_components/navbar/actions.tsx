import { SignInButton, UserButton, currentUser } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { Clapperboard } from "lucide-react";

export const Actions = async  () => {

    const user = await currentUser();

    return (
        <div className="flex items-center justify-end gap-x-3">
            {
                !user && (
                    <SignInButton>
                        <Button
                            variant={"primary"}
                            size={"sm"}
                        >
                            Login
                        </Button>
                    </SignInButton>
                )
            }
            {
                !!user && (
                    <Button variant={"ghost"} asChild className="flex items-center gap-x-2 text-muted-foreground">
                        <Link href={`/u/${user.username}`}>
                            <Clapperboard className="h-5 w-5" />
                            <p className="hidden lg:block">
                                Dashboard
                            </p>
                        </Link>
                    </Button>
                )
            }
            <UserButton
              afterSignOutUrl="/"
            />
        </div>
    )
}