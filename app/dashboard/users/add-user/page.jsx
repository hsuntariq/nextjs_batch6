import Button from '@/app/components/user/Button'
import { addUser } from '@/app/libs/actions'
import React from 'react'

const page = () => {



    return (
        <>
            <div className="container w-[90%] mx-auto p-4 bg-[#192237]">
                <form action={addUser}>
                    <div className="flex gap-3">
                        <input name='username' className='bg-[#151C2D] p-4 w-full my-2 outline-none text-gray-400' type="text" placeholder='Username' />
                        <input name='email' className='bg-[#151C2D] p-4 w-full my-2 outline-none text-gray-400' type="email" placeholder='Email' />
                    </div>
                    <div className="flex gap-3">
                        <input name='password' className='bg-[#151C2D] p-4 w-full my-2 outline-none text-gray-400' type="password" placeholder='password' />
                        <input name='phone' className='bg-[#151C2D] p-4 w-full my-2 outline-none text-gray-400' type="phone" placeholder='Email' />
                    </div>
                    <div className="flex gap-3">
                        <select name='isAdmin' className='bg-[#151C2D] p-4 w-full my-2 outline-none text-gray-400' id="">
                            <option value="1">Admin</option>
                            <option value="0">User</option>
                        </select>
                        <select className='bg-[#151C2D] p-4 w-full my-2 outline-none text-gray-400' name="isActive" id="">
                            <option value="1">Active</option>
                            <option value="0">Inactive</option>
                        </select>
                    </div>
                    <textarea className='bg-[#151C2D] p-4 w-full my-2 outline-none text-gray-400' name="" id="" cols="30" rows="5"></textarea>
                    <Button content="Add User" />
                </form>
            </div>
        </>
    )
}

export default page