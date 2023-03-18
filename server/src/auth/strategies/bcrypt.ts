import {compareSync, genSalt, hashSync} from "bcrypt";

export const encodePassword = async (password: string) => {
    const salt = await genSalt(10)
    return hashSync(password, salt)
}

export const comparePasswords = (password: string, hash: string) => {
    return compareSync(password, hash)
}