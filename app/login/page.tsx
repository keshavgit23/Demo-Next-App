"use client";

import { useState } from "react";
import Button from "../components/Button";

export default function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent) {

        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application-json",
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();
            if (!res.ok) {
                setMessage(data.error || "Something went wwrong! ");
            } else {
                setMessage("Login succesfull");
                setUsername("");
                setPassword("");
            }
        } catch (err) {
            setMessage("Server Error!");
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-2xl shadow-blue-500 p-8 rounded-xl w-full max-w-sm space-y-4">

                <h1 className="text-2xl font-semibold text-center mb-4 ">Login Form</h1>

                <div className="flex flex-col">
                    <label htmlFor="username" className="font-medium block">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        placeholder="Enter your username"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="border border-gray-300  w-full rounded-lg p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"></input>
                </div>
                <div>
                    <label htmlFor="password" className="font-medium">Password:</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="border border-gray-300 w-full rounded-lg p-2 focus:outline-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"></input>
                </div>
                <div className="flex justify-center space-x-4">
                    <Button text={loading ? "Login..." : "Login"} type="submit"></Button>
                </div>

                {message && (
                    <p className="text-center mt-3 text-red-500">{message}</p>
                )}

            </form>
        </div>
    );
}