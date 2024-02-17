import { FaUser } from 'react-icons/fa'
import { data } from '../dashboard/users/data'
import Items from '../dashboard/users/Items'
const Sidebar = () => {
    return (
        <>
            <div className="min-h-screen w-full md:w-[30%] lg:w-[20%] bg-[#192237] py-10 px-4 ">
                <div className="flex gap-4 items-center">
                    <div className="p-5 rounded-full bg-gray-400">
                        <FaUser />
                    </div>
                    <div className="flex flex-col">
                        <h4 className="text-sm font-bold">
                            user1
                        </h4>
                        <p className="text-gray-500">
                            Admin
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-5 mt-5">
                    {data.map((item) => {
                        return <Items {...item} />
                    })}
                </div>

            </div>
        </>
    )
}

export default Sidebar