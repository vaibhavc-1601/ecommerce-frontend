import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left side (image/empty space) */}
        <div className="hidden md:block">
          <Image width={1000} height={1000} src="/login.svg fill.png" alt="Login image" />
        </div>

        {/* Right side (form) */}
        <div className="p-6 sm:p-8 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-teal-600 mb-2">Welcome Back</h2>
          <p className="text-sm sm:text-base text-gray-500 mb-6">LOGIN TO CONTINUE</p>

          <form className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Example@gmail.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="••••••"
                />
                <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
                  <i className="fas fa-eye-slash" />
                </span>
              </div>
              <a href="#" className="text-sm text-gray-400 hover:underline mt-1 inline-block">
                Forgot Password?
              </a>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-md text-sm font-semibold"
            >
              LOGIN
            </button>

            {/* Signup link */}
            <p className="text-sm text-center text-gray-600 mt-2">
              NEW USER?{" "}
              <Link href="/registions" className="text-teal-600 font-semibold hover:underline">
                REGISTER
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
