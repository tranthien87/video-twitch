import CreateUser from "@/lib/action";
import { UserButton } from "@clerk/nextjs";
import { log } from "console";


export default async function Page() {
  // const user = await CreateUser();
  // console.log('user created', user);
  
  return (
  <div className="">
    <h1>Dashboard</h1>
    <UserButton afterSwitchSessionUrl="/" />
  </div>
  );
}
