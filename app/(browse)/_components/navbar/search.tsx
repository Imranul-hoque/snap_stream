"use client";

import qs from "query-string";
import { Input } from "@/components/ui/input";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { SearchIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";


export const Search = () => {

    const [value, setValue] = useState<string>("");
    const router = useRouter()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!value) return;
        const url = qs.stringifyUrl({
            url: "/search",
            query: {
                term : value
            }
        }, { skipEmptyString: true })

        router.push(url)
    }

    return (
        <form onSubmit={handleSubmit} className="relative w-full lg:w-[400px] flex items-center gap-x-3">
            <Input
                value={value}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                className="w-full py-1 focus-visible:ring-transparent px-3 focus-visible:ring-0 ring-0 focus-visible:ring-offset-0"
                placeholder="Search here..."
            />
            {
                value && (
                    <X className="w-4 h-4 absolute right-16 top-2.5 cursor-pointer text-muted-foreground" onClick={() => setValue("")} />
                )
            }

            <Button type="submit" variant={"ghost"} size={"sm"}>
                <SearchIcon className="w-5 h-5 text-muted-foreground" />
            </Button>
        </form>
    )
}