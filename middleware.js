import NextAuth from 'next-auth'
import { authConfig } from './app/authConfig'

export default NextAuth(authConfig).auth