import { useState } from "react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex items-center justify-center h-screen bg-pink-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">

        {/* Tabs */}
        <div className="flex mb-6 border-b">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 text-center font-semibold ${
              isLogin ? "text-pink-600 border-b-2 border-pink-600" : "text-gray-500"
            }`}
          >
            Login
          </button>

          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 text-center font-semibold ${
              !isLogin ? "text-pink-600 border-b-2 border-pink-600" : "text-gray-500"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Login Form */}
        {isLogin && (
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg mb-4"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg mb-4"
            />

            <button className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700">
              Login
            </button>

            <p className="text-sm text-right mt-3 text-pink-600 cursor-pointer hover:underline">
              Forgot Password?
            </p>

            <p className="text-center text-sm mt-4">
              Don’t have an account?{" "}
              <span
                onClick={() => setIsLogin(false)}
                className="text-pink-600 cursor-pointer font-semibold hover:underline"
              >
                Create new account
              </span>
            </p>
          </div>
        )}

        {/* Sign Up Form */}
        {!isLogin && (
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg mb-4"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg mb-4"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg mb-4"
            />

            <button className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700">
              Sign Up
            </button>

            <p className="text-center text-sm mt-4">
              Already have an account?{" "}
              <span
                onClick={() => setIsLogin(true)}
                className="text-pink-600 cursor-pointer font-semibold hover:underline"
              >
                Login
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
