import React from 'react'

const Transactions = () => {
    return (
        <>
            <div className="rounded-md bg-[#192237] my-4 p-5">
                <h1 className="text-gray-400 text-3xl">
                    Latest Transactions
                </h1>
                <table className='capitalize text-center w-full my-2'>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>status</th>
                            <th>Date</th>
                            <th>amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 5 }).map((_, index) => {
                            return (
                                <>
                                    <tr>
                                        <td>Ali</td>
                                        <td>Active</td>
                                        <td>21-09-24</td>
                                        <td>$1200</td>
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

export default Transactions