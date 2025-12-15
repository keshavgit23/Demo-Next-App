

import Button from "../components/Button";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white shadow-2xl shadow-blue-500 p-8 rounded-xl w-full max-w-sm">

                <div className="flex flex-col mb-4"></div>

                <div>
                    <h1 className="text-2xl font-semibold text-center mb-6">Login Form</h1>
                </div>
                <div>
                    <label htmlFor="email" className="mb-1 font-medium mt-4 mr-10 ml-6">Email:</label>
                    <input type="email" id="email" placeholder="Enter your email" required className="border border-gray-300 mx-4 my-1 ml-6 w-64 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                </div>
                <div className="flex flex-col mt-4"></div>
                <div>
                    <label htmlFor="password" className="mb-1 font-medium mt-4 mr-10 ml-6">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required className="border border-gray-300 mx-4 my-1 ml-6 w-64 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                </div>
                <div className="flex justify-center mt-6 py-3 text-lg">
                    <Button text="Login" />
                </div>
            </div>
        </div>
    );
}