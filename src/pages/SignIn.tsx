import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SignInForm } from "../interface";
import api from "../apis/axios/Axios";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../state/Auth";
import portfolio from "../assets/Portfoilo.png";

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<SignInForm>({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [user, setUserState] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserState(JSON.parse(storedUser));
    }
  }, []);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (Sign In)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    try {
      const res = await api.post("/api/v1/auth/signin", formData);

      if (res.data.token) {
        const { token, user } = res.data;

        // Dispatch token & user
        dispatch(setToken(token));
        dispatch(setUser({ name: user.name, email: user.email }));

        // Store user data in localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        setUserState(user); // Update state to trigger re-render
        console.log("Login successful:", res.data);
      }
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || "Login failed. Please try again.");
    }
  };

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUserState(null);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      {/* If user is logged in, show their details */}
      {user ? (
        <div className="bg-gray-800 text-white p-6 rounded-md shadow-lg w-96 text-center">
          <img src={portfolio} className="w-20 h-20 rounded-full mx-auto border-2 border-green-500" alt="User" />
          <h2 className="text-lg font-semibold">Welcome, {user.name} 👋</h2>
          <p className="mt-2 text-sm text-gray-300">{user.email}</p>
          <button
            onClick={handleLogout}
            className="w-full p-3 bg-red-500 text-white rounded-md mt-4 hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 text-white p-6 rounded-md shadow-lg w-96"
        >
          {/* Tabs for Sign In & Sign Up */}
          <div className="flex justify-between mb-4">
            <Link
              to="/SignIn"
              className="w-full p-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 ease-in-out mr-2 text-center"
            >
              Sign In
            </Link>
            <Link
              to="/SignUp"
              className="w-full p-3 bg-gray-500 text-white rounded-md hover:bg-green-600 transition duration-300 ease-in-out text-center"
            >
              Sign Up
            </Link>
          </div>

          <h2 className="text-center text-lg font-semibold mb-4">Sign In</h2>

          {/* Display error message if login fails */}
          {errorMessage && (
            <div className="bg-red-500 text-white text-sm p-2 rounded-md mb-3">
              {errorMessage}
            </div>
          )}

          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded bg-gray-700 text-white mt-2"
          />

          {/* Password Input */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded bg-gray-700 text-white mt-2"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-green-500 text-white rounded-md mt-4 hover:bg-green-600"
          >
            SIGN IN
          </button>
        </form>
      )}
    </div>
  );
};

export default SignIn;
