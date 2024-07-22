import { Logo } from "../logo";
import { Search } from "./search";


export default function NavBar() {
    return (
        <nav className="fixed top-0 z-[49] h-20 w-full flex items-center justify-between px-2 lg:px-4 bg-[#253731] shadow-lg">
            <Logo />
            <Search />
        </nav>
    )
}