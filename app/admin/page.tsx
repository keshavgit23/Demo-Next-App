// import {useRouter} from "next/navigation";

export default function AdminPage() {

    return (

        <div>
            <div>
                <nav className="border border-blue-700 w-full">
                    <h1 className="font-bold text-xl p-2">Admin Page</h1>
                </nav>
            </div>
            <div className="flex justify-evenly relative right-8">
                <div className="border border-blue-500 w-70 h-50 flex justify-center relative top-30 left-10 rounded-lg">
                    <h1 className="text-xl font-medium mt-5">Active Users</h1>
                    <p className="mt-20 absolute text-xl">120</p>
                </div>

                <div className="border border-blue-500 w-70 h-50 flex justify-center relative top-30 left-10 rounded-lg">
                    <h1 className="text-xl font-medium mt-5">Daily Active Users</h1>
                    <p className="mt-20 absolute text-xl">500+</p>
                </div>
                <div className="border border-blue-500 w-70 h-50 flex justify-center relative top-30 left-10 rounded-lg">
                    <h1 className="text-xl font-medium mt-5">Weekly Active Users</h1>
                    <p className="mt-20 absolute text-xl">10000+</p>
                </div>
                <div className="border border-blue-500 w-70 h-50 flex justify-center relative top-30 left-10 rounded-lg">
                    <h1 className="text-xl font-medium mt-5">Monthly Active Users</h1>
                    <p className="mt-20 absolute text-xl">15000+</p>
                </div>

            </div>
        </div>
    );
}


