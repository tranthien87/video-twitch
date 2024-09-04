import { Button } from "@/components/ui/button";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server"
import { Clapperboard } from "lucide-react";
import Link from "next/link";

export const Actions = async () => {
    const user = await currentUser();

    return (
        <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
            { !user && (
                <SignInButton>
                    <Button size={'sm'} variant="primary" className=" h-9">
                        Login
                    </Button>
                </SignInButton>
            )}
            {!!user && (
                <div className="flex items-center gap-x-4">
                    <Button 
                        size="sm"
                        variant="ghost"
                        className="text-muted-foreground hover:text-primary"
                        asChild>
                        <Link href={`/${user.username}`}>
                            <Clapperboard className="h-5 w5 lg:mr-2"/>
                            <span className="hidden lg:block">
                                Dash Board
                            </span>
                        </Link>
                    </Button>
                    <UserButton  />
                </div>
            )}
        </div>
    )
}