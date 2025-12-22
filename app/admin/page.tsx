// import {useRouter} from "next/navigation";

export default function AdminPage() {

    return (

        <div>
            <nav className="border border-blue-700 w-full bg-blue-500 h-14 flex items-center">
                <h1 className="font-bold text-xl p-2">Admin Page</h1>

                <div className="flex flex-row ml-100 p-2">
                    <label htmlFor="text" className="font-semibold p-2">Search</label>
                    <input type="text" placeholder="Search here..." className="border-1 border-white-300 rounded-lg w-67 p-2 focus:border-white-500 focus:ring-2 focus:ring-white-500 focus:outline-none" />
                </div>
            </nav>
            <div className="flex justify-evenly relative right-8 rounded-3xl group p-6">
                <div className="border-4 border-blue-500 w-70 h-50 flex justify-center relative top-30 left-10 rounded-lg  bg-white p-4 hover:bg-blue-100 tansition">
                    <h1 className="text-xl font-semibold mt-5">Total Users</h1>
                    <p className="mt-20 absolute text-xl">10000</p>
                </div>

                <div className="border-4 border-blue-500 w-70 h-50 flex justify-center relative top-30 left-10 rounded-lg p-4 bg-white hover:bg-blue-100 tansition">
                    <h1 className="text-xl font-semibold mt-5">Total Orders</h1>
                    <p className="mt-20 absolute text-xl">500+</p>
                </div>
                <div className="border-4 border-blue-500 w-70 h-50 flex justify-center relative top-30 left-10 rounded-lg p-4 bg-white hover:bg-blue-100 tansition">
                    <h1 className="text-xl font-semibold mt-5">Revenue</h1>
                    <p className="mt-20 absolute text-xl">10000+ Rs</p>
                </div>
                <div className="border-4 border-blue-500 w-70 h-50 flex justify-center relative top-30 left-10 rounded-lg p-4 bg-white hover:bg-blue-100 tansition">
                    <h1 className="text-xl font-semibold mt-5">Pending/Reports</h1>
                    <p className="mt-20 absolute text-xl">150</p>
                </div>

            </div>

            <div className="flex justify-start mt-60 overflow-y-auto bg-white rounded-lg shadow">
                <table className=" w-200 border-collapse border border-2-grey ml-20">
                    <thead className="bg-blue-200 rounded-lg">
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
                            <span className="font-medium text-smm">45%</span>
                        </div>
                        <div className="bg-blue-500 h-2 rounded-full w-[45%]"></div>
                        <div className="flex justify-between mb-1">
                            <span className="font-medium text-sm">USA</span>
                            <span className="font-medium text-sm">80%</span>
                        </div>
                        <div className="bg-blue-500 h-2 rounded-full w-[80%]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}


