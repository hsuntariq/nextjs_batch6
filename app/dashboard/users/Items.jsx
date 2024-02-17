import Link from 'next/link'
import React from 'react'

const Items = ({ title, items }) => {
    return (
        <>
            <h5 className="text-1xl font-bold text-gray-500 capitalize">
                {title}
            </h5>
            <ul className="flex flex-col gap-3 capitalize">
                {items.map((item) => {
                    return (
                        <>
                            <li className='flex transition-all gap-2 items-center hover:bg-[#151C2D] px-3 py-2'> {item.icon}
                                <Link href={item.link}>
                                    {item.name}
                                </Link>
                            </li>
                        </>
                    )
                })}
            </ul>
        </>
    )
}

export default Items