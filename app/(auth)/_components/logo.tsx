import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800']
})

export const Logo = () => {
    return (
        <div className="flex flex-col gap-y-2">
            <div className="flex rounded-full justify-center bg-white w-[100px] h-[100px]">
                <Image src='./Jackolantern.svg' alt="game hub" width="100" height='100' />
            </div>
            <div className={cn("flex flex-col items-center", poppins.className)}>
                <p className='text-xl font-semibold'>GameHub</p>
                <p className='text-l font-semibold'>Let&apos;s Play</p>
            </div>
        </div>
    )
}