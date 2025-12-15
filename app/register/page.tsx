"use client";

import { useState } from "react";  //useState componenet ke ander data ko yaad rakhne wur update hone per UI ko dobara render karne ka kaam aata hai
import Button from "../components/Button";

 export default function RegisterPage() {  // syntax of useState:-
                                            //const[state,setState]=useState(initialValue);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/register", {   //send data to api/register and show success message
        method: "POST",
        headers: {
          "Content-Type": "application/json",  //await paauses excecution of an async function until the Promise resolves
                                                //await always comes under async function
                                                // async function myFunc(){
                                                //   await spmeasyncTask();
                                                // }
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || "Something went wrong");
      } else {
        setMessage("Registration Successful");
        setName("");
        setEmail("");
        setPassword("");
      }
    } catch (err) {
      setMessage("Server error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl shadow-blue-500 p-8 rounded-xl w-full max-w-sm"
      >
        <h1 className="text-2xl font-semibold text-center mb-6">Register Form</h1>

        <label className="font-medium">Username:</label>
        <input
          type="text"
          value={name}
          placeholder="Enter your username"
          onChange={(e) => setName(e.target.value)}
          required
          className="border border-gray-300 mb-2 w-full rounded-lg p-2"
        />

        <label className="font-medium">Email:</label>
        <input
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border border-gray-300 mb-2 w-full rounded-lg p-2"
        />

        <label className="font-medium">Password:</label>
        <input
          type="password"
          value={password}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border border-gray-300 mb-2 w-full rounded-lg p-2"
        />

        <div className="flex justify-center mt-4">
          <Button text={loading ? "Registering..." : "Register"} type="submit" />
        </div>

        {message && (
          <p className="text-center mt-3 text-red-500">{message}</p>
        )}
      </form>
    </div>
  );
}