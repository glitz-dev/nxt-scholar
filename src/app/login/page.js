"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { API_URL } from "../../../utils/config";


export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(`${API_URL}account`)
    debugger;
      if (email && password ) {
        const loginUser = { emailId:email, password };
         const response = await fetch(`${API_URL}account/login`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(loginUser)
                });
        console.log(response);
        if (response.ok)
        {
          const result = await response.json();
          toast.success(result.message);
          router.push("/"); 
        }
        else
        {
          toast.warning(result.message);
        }
       
        
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      setError("Login failed. Try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="mb-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-md"
        >
          Login
        </button>
        <p className="mt-4 text-center text-sm">
          Dont have an account?{" "}
          <a href="/register" className="text-blue-500">
            Register here
          </a>
        </p>
      </form>
    </div>
  );
}
