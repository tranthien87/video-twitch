
export default function AuthLayout(
    {children,} : {children: React.ReactNode}
) {
    return (
        <div className="">
            <nav className="w-full bg-red-500 p-4 mb-2">
                NavBar
            </nav>
            {children}
            </div>
    )
}