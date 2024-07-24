import { Suspense } from "react";
import Navbar from "@/app/(browse)/_components/navbar";
import { SideBar, SideBarSkeleton } from "./_components/sidebar";
import { Container } from "./_components/container";



export default function Browselayout({children}: {children: React.ReactNode}) {
    return (
        <>
            <Navbar />
            <div className="h-full pt-20">
                <Suspense fallback={<SideBarSkeleton />}>
                    <SideBar />
                </Suspense>
                <Container>
                    {children}
                </Container>
            </div>
        </>
    )
}