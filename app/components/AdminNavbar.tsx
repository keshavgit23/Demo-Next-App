export default function AdminNavbar() {
    return (

         <nav className="border border-blue-700 w-full bg-blue-500 h-14 flex items-center">
                <h1 className="font-bold text-xl p-2">Admin Page</h1>

                <div className="flex flex-row ml-100 p-2">
                    <label htmlFor="text" className="font-semibold p-2">Search</label>
                    <input type="text" placeholder="Search here..." className="border-1 border-white-300 rounded-lg w-67 p-2 focus:border-white-500 focus:ring-2 focus:ring-white-500 focus:outline-none" />
                </div>
            </nav>

    );
}