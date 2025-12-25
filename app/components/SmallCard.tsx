export default function SmallCard(){
    return (

        <div className="flex justify-evenly relative right-8 rounded-3xl group p-6">
                    <div className="border-4 border-blue-500 w-70 h-50 flex justify-center relative top-10 left-10 rounded-lg  bg-white p-4 hover:bg-blue-100 tansition">
                        <h1 className="text-xl font-semibold mt-5">Total Sales</h1>
                        <p className="mt-20 absolute text-xl">10000</p>
                    </div>

                    <div className="border-4 border-blue-500 w-70 h-50 flex justify-center relative top-10 left-10 rounded-lg p-4 bg-white hover:bg-blue-100 tansition">
                        <h1 className="text-xl font-semibold mt-5">Total Orders</h1>
                        <p className="mt-20 absolute text-xl">500+</p>
                    </div>
                    <div className="border-4 border-blue-500 w-70 h-50 flex justify-center relative top-10 left-10 rounded-lg p-4 bg-white hover:bg-blue-100 tansition">
                        <h1 className="text-xl font-semibold mt-5">Revenue</h1>
                        <p className="mt-20 absolute text-xl">10000+ rs</p>
                    </div>
                    <div className="border-4 border-blue-500 w-70 h-50 flex justify-center relative top-10 left-10 rounded-lg p-4 bg-white hover:bg-blue-100 tansition">
                        <h1 className="text-xl font-semibold mt-5">Pending/Reports</h1>
                        <p className="mt-20 absolute text-xl">150</p>
                    </div>

                </div>

    );
}