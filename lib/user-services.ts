import User from '../models/user'

export const getUserByUserName = async (userName: string) => {
    const user = await User.findOne({ userName });
    if(!user) {
        throw new Error('User not found');
    }
    return user;
}