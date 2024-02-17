import { Inter } from "next/font/google";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <>
            <div className="flex flex-col md:flex-row bg-[#151C2D] text-white">
                <Sidebar />
                <div className="flex flex-col w-full">
                    <Navbar />
                    {children}
                </div>
            </div>
        </>
    );
}