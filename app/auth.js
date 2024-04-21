import NextAuth from 'next-auth'
import { authConfig } from './authConfig'
import CredentialProvider from 'next-auth/providers/credentials'
import { User } from './libs/models';
import { connectDB } from './libs/connection';
import bcrypt from 'bcrypt'

const login = async (credentials) => {
  try {
    connectDB();
    const user = await User.findOne({ email: credentials.email });


    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong credentials!");

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};


export const { signIn, signOut, auth } = NextAuth({
    ...authConfig,
    providers: [
        CredentialProvider({
            async authorize(credentials) {
                try {
                    const user = await login(credentials)
                    return user
                } catch (error) {
                    return null
                }
            }
        })
    ]
})