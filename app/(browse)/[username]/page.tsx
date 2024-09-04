
import { notFound } from "next/navigation";
import { getUserByUserName } from "@/lib/user-services"




interface UserPageProps {
    params: {
        username: string
    }
}

const UserPage = async ({ params }: UserPageProps) => {
    const userName = params.username;
    const user = await getUserByUserName(userName);
    if(!user) {
        notFound();
    }
    return (
        <div className="flex flex-col gap-y-4">
            <p>UserName: {user.userName}</p>
            <p>User Id: {user.userId}</p>
        </div>
    )
}

export default UserPage;