import Search from '@/app/components/dashboard/Search'
import Button from '@/app/components/user/Button'
import { deleteUser } from '@/app/libs/actions'
import { fetchData } from '@/app/libs/fetching'
import Link from 'next/link'
import React from 'react'

const page = async ({ searchParams }) => {
    const { q } = searchParams;
    const users = await fetchData(q)
    return (
        <>
            <div className="container flex items-center mx-auto mb-4 justify-between w-[90%] bg-[#192237] p-3 rounded-md">
                <Search />

                <Link href='/dashboard/users/add-user' className='bg-purple-500 p-2 rounded-md'>
                    Add  New
                </Link>

            </div>
            <div className="container w-[90%] mx-auto rounded-md bg-[#192237] p-3">
                <table className='capitalize text-center w-full'>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>email</th>
                            <th>phone</th>
                            <th>type</th>
                            <th>active</th>
                            <th>address</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user) => {
                            return (
                                <>
                                    <tr className=''>
                                        <td className='p-5'>{user?.username}</td>
                                        <td className='p-5'>{user?.email}</td>
                                        <td className='p-5'>{user?.phone}</td>
                                        <td className='p-5'>
                                            {user?.isAdmin ? 'Admin' : 'User'}
                                        </td>
                                        <td className='p-5'>Active</td>
                                        <td className='p-5'>islamabad</td>
                                        <td className='flex'>
                                            <form action={deleteUser}>
                                                <input type="hidden" value={user?._id.toString()} name="user_id" id="" />
                                                <Button content='Delete' />
                                            </form>
                                            <button className='bg-blue-500 px-4 py-2 text-white rounded-md mx-3'>
                                                Update
                                            </button>
                                        </td>

                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default page