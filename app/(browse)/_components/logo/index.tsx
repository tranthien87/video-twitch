import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800']
})

export const Logo = () => {
    return (
        <Link href="/" className="hidden lg:flex gap-x-2 hover:opacity-75 transition">
            <div className="flex rounded-full justify-center bg-white w-[32px] h-[32px]">
                <Image src='./Jackolantern.svg' alt="game hub" width="32" height='32' />
            </div>
            <div className={cn("flex flex-col items-left", poppins.className)}>
                <p className='text-lg font-semibold'>GameHub</p>
                <p className='text-xs text-muted-foreground'>Let&apos;s Play</p>
            </div>
        </Link>
    )
}