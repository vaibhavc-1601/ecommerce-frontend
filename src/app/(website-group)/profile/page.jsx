import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex justify-center items-center">
      <div className="bg-white w-full max-w-7xl rounded-xl shadow-lg flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="md:w-1/3 p-6 flex flex-col items-center md:items-start">
          <Image
            width={150}
            height={150}
            src="/avatar.jpg.png"
            alt="User avatar"
            className="w-36 h-36  mb-4"
          />
          <h2 className="text-xl font-semibold text-center md:text-left">Mark Cole</h2>
          <p className="text-sm text-gray-500 mb-6 text-center md:text-left">swoo@gmail.com</p>
          <nav className="w-full">
            <ul className="space-y-4 text-left">
              <li>
                <a
                  href="#"
                  className="block px-4 flex justify-between items-center py-2 bg-teal-500 text-white rounded"
                >
                  Account info <FaArrowRight />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 flex justify-between items-center py-2 hover:bg-gray-100 rounded"
                >
                  My order <FaArrowRight />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 flex justify-between items-center py-2 hover:bg-gray-100 rounded"
                >
                  My address <FaArrowRight />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 flex justify-between items-center py-2 hover:bg-gray-100 rounded"
                >
                  Change password <FaArrowRight />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="md:w-2/3 p-6">
          <h3 className="text-2xl font-semibold mb-6">Account Info</h3>
          <form className="space-y-6">
            <div className="flex flex-col md:flex-row md:space-x-6">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2">First Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  defaultValue="Mark"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2">Last Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  defaultValue="Cole"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email Address <span className="text-red-500">*</span></label>
              <input
                type="email"
                defaultValue="swoo@gmail.com"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Phone Number <span className="text-[#666666]">(Optional)</span></label>
              <input
                type="tel"
                defaultValue="+1 0231 4554 452"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600 transition"
            >
              SAVE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
