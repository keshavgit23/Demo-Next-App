// import {useRouter} from "next/navigation";
import AdminNavbar from "../components/AdminNavbar";
import SmallCard from "../components/SmallCard";
import AdminFooter from "../components/AdminFooter"; 

export default function AdminPage() {

    return (

        <>
            <AdminNavbar />
            <SmallCard />
            <div>

                <div className="flex justify-start mt-20 mb-10 overflow-y-auto bg-white rounded-lg shadow">
                    <table className="w-180 border-collapse border border-2-grey ml-22 rounded-lg">
                        <thead className="bg-blue-200">
                            <tr>
                                <th className="text-xl font-semibold text-black-600 border-b">Recent Users</th>
                                <th className="text-xl font-semibold text-black-500 border-b">Latest Orders</th>
                                <th className="text-xl font-semibold text-black-500 border-b">Order Status</th>
                                <th className="text-xl font-semibold text-black-500 border-b">Payment Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white hover:bg-sky-50">
                                <td className="px-5 py-10 text-center">Pawan Singh</td>
                                <td className="px-5 py-10 text-center">Website Design</td>
                                <td className="px-5 py-10 text-center">Completed</td>
                                <td className="px-5 py-10 text-center">UPI</td>
                            </tr>
                            <tr className="bg-white hover:bg-sky-50">
                                <td className="px-5 py-10 text-center">Vishal More</td>
                                <td className="px-5 py-10 text-center">Banner Design</td>
                                <td className="px-5 py-10 text-center">Pending</td>
                                <td className="px-5 py-10 text-center">UPI</td>
                            </tr>
                            <tr className="bg-white hover:bg-sky-50">
                                <td className="px-5 py-10 text-center">Kartik Tripathi</td>
                                <td className="px-5 py-10 text-center">Youtube Thumnail</td>
                                <td className="px-5 py-10 text-center">Completed</td>
                                <td className="px-5 py-10 text-center">UPI</td>
                            </tr>
                            <tr className="bg-white hover:bg-sky-50" >
                                <td className="px-5 py-10 text-center">Karan Pawar</td>
                                <td className="px-5 py-10 text-center">Instagram Post</td>
                                <td className="px-5 py-10 text-center">Pending</td>
                                <td className="px-5 py-10 text-center">Cash</td>
                            </tr>
                            <tr className="bg-white hover:bg-sky-50">
                                <td className="px-5 py-10 text-center">Madhav Chadda</td>
                                <td className="px-5 py-10 text-center">Website Design</td>
                                <td className="px-5 py-10 text-center">Completed</td>
                                <td className="px-5 py-10 text-center">UPI</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="border border-black-500 w-70 h-92 ml-4 rounded-lg p-2 shadow-xl">
                        <h3 className="bg-blue-200 text-xl font-semibold text-center rounded-lg">Sales By Location</h3>
                        <img src="/Earth.jpeg" alt="Earth Image" className="h-45 w-70 rounded-3xl py-2" />
                        <div className="w-full mt-3">
                            <div className="flex justify-between mb-1">
                                <span className="font-medium text-sm">India</span>
                                <span className="text-sm font-medium">70%</span>
                            </div>
                            <div className="bg-blue-500 h-2 rounded-full w-[70%]"></div>
                            <div className="flex justify-between mb-1">
                                <span className="font-medium text-sm">Australia</span>
                                <span className="text-sm font-medium">30%</span>
                            </div>
                            <div className="bg-blue-500 h-2 rounded-full w-[30%]"></div>
                            <div className="flex justify-between mb-1">
                                <span className="font-medium text-sm">New York</span>
                                <span className="font-medium text-sm">45%</span>
                            </div>
                            <div className="bg-blue-500 h-2 rounded-full w-[45%]"></div>
                            <div className="flex justify-between mb-1">
                                <span className="font-medium text-sm">USA</span>
                                <span className="font-medium text-sm">80%</span>
                            </div>
                            <div className="bg-blue-500 h-2 rounded-full w-[80%]"></div>
                        </div>
                    </div>
                    <div className="border border-black-500 w-70 h-92 ml-4 rounded-lg p-2 shadow-xl">
                        <h3 className="bg-blue-200 text-xl font-semibold text-center rounded-lg">Total Sales</h3>
                        <div className="relative w-40 h-40 mx-auto mt-4 rounded-full bg-[conic-gradient(#2563eb_0deg_144deg,#22c55e_144deg_252deg,#f59e0b_252deg_324deg,#ef4444_324deg_360deg)]">
                            <div className="absolute inset-6 bg-white rounded-full flex items-center justify-center text-sm font-semibold"></div>
                        </div>


                        <div className="mt-4 space-y-1 text-sm p-2">
                            <p><span className="inline-block w-3 h-3 bg-blue-600 mr-2"></span>Direct <span className="ml-30">1000rs</span></p>
                            <p><span className="inline-block w-3 h-3 bg-green-500 mr-2"></span>Affiliate <span className="ml-28">3000rs</span></p>
                            <p><span className="inline-block w-3 h-3 bg-yellow-500 mr-2"></span>Sponsored <span className="ml-23">2000rs</span></p>
                            <p><span className="inline-block w-3 h-3 bg-red-500 mr-2"></span>E-mail <span className="ml-30">1000rs</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <AdminFooter/>
        </>
    );
}


