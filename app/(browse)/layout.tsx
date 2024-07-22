import Navbar from "@/app/(browse)/_components/navbar";


export default function Browselayout({children}: {children: React.ReactNode}) {
    return (
        <>
            <Navbar />
            <div className="h-full pt-20">
                {children}
            </div>
        </>
    )
}