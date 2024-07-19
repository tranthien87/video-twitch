import { UserButton } from "@clerk/nextjs";


export default function Page() {
  return (
  <div className="">
    <h1>Dashboard</h1>
    <UserButton afterSwitchSessionUrl="/" />
  </div>
  );
}
