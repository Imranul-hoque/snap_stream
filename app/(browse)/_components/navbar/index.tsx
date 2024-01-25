import { Logo } from "@/components/logo"
import { Search } from "./search";
import { Actions } from "./actions";


export const Navbar = () => {
    return (
        <div
        className="fixed top-0 w-full bg-background h-[60px] z-40 text-white"
        >
            <div
            className="flex items-center justify-between w-full h-full px-4"
            >
                <Logo />
                <Search />
                <Actions />
            </div>  
        </div>
    )
}