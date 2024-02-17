import React from 'react'
import { FaUser } from 'react-icons/fa'
import Transactions from './Transactions'
import Charts from './Charts'

const Cards = () => {
    return (
        <>
            <div className="w-full">

                <div className="self-start flex gap-4">

                    <div className="w-full rounded-lg justify-between bg-[#192237] p-5 mx-auto flex gap-4">
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <FaUser />
                                <h4 className="text-sm text-gray-400">
                                    Total user
                                </h4>
                            </div>
                            <p className="font-bold text-gray-500">
                                10,400
                            </p>
                        </div>
                    </div>
                    <div className="w-full rounded-lg  justify-between bg-[#192237] p-5 mx-auto flex gap-4">
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <FaUser />
                                <h4 className="text-sm text-gray-400">
                                    Total user
                                </h4>
                            </div>
                            <p className="font-bold text-gray-500">
                                10,400
                            </p>
                        </div>
                    </div>
                    <div className="w-full rounded-lg  justify-between bg-[#192237] p-5 mx-auto flex gap-4">
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <FaUser />
                                <h4 className="text-sm text-gray-400">
                                    Total user
                                </h4>
                            </div>
                            <p className="font-bold text-gray-500">
                                10,400
                            </p>
                        </div>
                    </div>
                </div>

                <Transactions />
                <Charts />
            </div>





        </>
    )
}

export default Cards