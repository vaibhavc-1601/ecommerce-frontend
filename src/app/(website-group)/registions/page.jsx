import Image from "next/image";
import Link from "next/link";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full flex flex-col md:flex-row overflow-hidden">
        {/* Left Illustration */}
        <div className="md:w-1/2 flex items-center justify-center p-8 bg-blue-50">
          <Image
            width={1000}
            height={1000}
            src="/login.svg.png" // Replace this path with your actual image path
            alt="Illustration"
            className="w-full h-auto max-w-md"
          />
        </div>

        {/* Right Form */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-teal-600 mb-2">Register</h2>
          <p className="text-sm text-gray-500 mb-6">Join us</p>

          <form action="/register" method="POST" className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Your name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                placeholder="••••••"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirm_password"
                placeholder="••••••"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition"
            >
              REGISTER
            </button>
          </form>

          <p className="mt-4 text-sm text-center text-gray-600">
            Already a user?{" "}
            <Link href="/login" className="text-teal-600 hover:underline">
              LOGIN
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
