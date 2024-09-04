import User from '../models/user'

export const getUserByUserName = async (userName: string) => {
    return await User.findOne({ userName });
}