import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Cards from '../components/dashboard/Cards'
import Ads from '../components/dashboard/Ads'
import { fetchData } from '../libs/fetching'

const page = async () => {
    return (
        <>
            <div className="flex gap-4 w-[90%] mx-auto">
                <Cards />
                <Ads />
            </div>
        </>
    )
}

export default page