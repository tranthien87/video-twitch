import User from "@/models/user";

export default async function CreateUser () {
    const user = new User({
        username: "TranNguyen",
        imageUrl: "url_abczyx",
        bio: "this is tesst document"
    })
    return user.save()
}