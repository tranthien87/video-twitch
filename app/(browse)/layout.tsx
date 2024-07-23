import Navbar from "@/app/(browse)/_components/navbar";
import { SideBar } from "./_components/sidebar";
import { Container } from "./_components/container";



export default function Browselayout({children}: {children: React.ReactNode}) {
    return (
        <>
            <Navbar />
            <div className="h-full pt-20">
                <SideBar />
                <Container>
                    {children}
                </Container>
            </div>
        </>
    )
}