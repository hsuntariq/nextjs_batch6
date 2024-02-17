import { MdDashboard } from "react-icons/md";
import { RiUserSmileLine } from "react-icons/ri";
import { BsFillBasket2Fill } from "react-icons/bs";
import { GrTransaction } from "react-icons/gr";

export const data = [
    {
        id: 1,
        title: 'pages',
        items: [
            {
                id: 1,
                name: 'dashboard',
                link: '/dashboard',
                icon: <MdDashboard />
            },
            {
                id: 2,
                name: 'users',
                link: '/dashboard/users',
                icon: <RiUserSmileLine />
            },
            {
                id: 3,
                name: 'products',
                link: '/dashboard/products',
                icon: <BsFillBasket2Fill />
            },
            {
                id: 4,
                name: 'transaction',
                link: '/dashboard',
                icon: <GrTransaction />
            },

        ]
    },
    {
        id: 2,
        title: 'Analytics',
        items: [
            {
                id: 1,
                name: 'dashboard',
                link: '/dashboard',
                icon: <MdDashboard />
            },
            {
                id: 2,
                name: 'users',
                link: '/dashboard/user',
                icon: <RiUserSmileLine />
            },
            {
                id: 3,
                name: 'products',
                link: '/dashboard/products',
                icon: <BsFillBasket2Fill />
            },

        ]
    },
    {
        id: 3,
        title: 'user',
        items: [
            {
                id: 1,
                name: 'dashboard',
                link: '/dashboard',
                icon: <MdDashboard />
            },
            {
                id: 2,
                name: 'users',
                link: '/dashboard/user',
                icon: <RiUserSmileLine />
            },
            {
                id: 3,
                name: 'products',
                link: '/dashboard/products',
                icon: <BsFillBasket2Fill />
            },

        ]
    }
]