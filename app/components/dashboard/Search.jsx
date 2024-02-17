"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const Search = () => {

    // get the url
    const pathname = usePathname();
    // add data to the url
    const search = useSearchParams();
    // get the replace function to replace the url
    const { replace } = useRouter()
    // convert the query params into string
    const params = new URLSearchParams(search);
    // set the params
    const handleChange = (e) => {
        if (e.target.value === '') {
            params.delete('q')
        } else {
            params.set('q', e.target.value)
        }
        replace(`${pathname}?${params}`)
    }




    return (
        <>
            <form action="">
                <input onChange={handleChange} type="search" className='p-2 rounded-lg bg-[#2E374A] outline-none text-gray-400' name="search" placeholder='Search user...' id="" />
            </form>
        </>
    )
}

export default Search