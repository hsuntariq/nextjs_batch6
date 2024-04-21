"use server"
import { permanentRedirect } from 'next/navigation'

import { revalidatePath } from "next/cache"
import { User } from "./models"
import bcrypt from 'bcrypt'
import { signIn } from '../auth'
export const addUser = async (formData) => {
    const { username, email, password, phone, isAdmin, isActive } = Object.fromEntries(formData)
    // salt
    const salt = await bcrypt.genSalt(10);
    // hash the password
    const hashed = await bcrypt.hash(password, salt)
    try {
        const createdUser = await User.create({
            username, email, password: hashed, phone, isAdmin, isActive
        })

        console.log(createdUser)



    } catch (error) {
        console.log(error)
    }



}


export const deleteUser = async (formData) => {
    const { user_id } = Object.fromEntries(formData);
    const deletedUser = await User.findByIdAndDelete(user_id)
    console.log(deletedUser)
    revalidatePath('dashboard/users');
}

export const authenticate = async (formData) => {
    const { email, password } = Object.fromEntries(formData);
    try {
        await signIn("credentials",{email,password})
    } catch (error) {
        throw new Error('Invalid Credentials')
    }
}