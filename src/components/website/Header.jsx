
"use client";
import { lstoCart } from "@/redux/features/cartSlice";
import { logoutHandler } from "@/redux/features/userSlice";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Header() {
   const dispatcher = useDispatch()
   const cartItems = useSelector((state) => state.cart);
   const user = useSelector((state) => state.user.data);
    useEffect(
      () => {
      dispatcher(lstoCart())
     
      },
      []
    )
    
  const [menuOpen, setMenuOpen] = useState(false);
  //  useEffect(() => {
  //   const loginAt = JSON.parse(localStorage.getItem("loginAt"));
  //   if (loginAt) {
  //     const now = Date.now();  //abhi ki date
  //     const sevenDays = 7 * 24 * 60 * 60 * 1000; //after saven
  //     console.log(now - loginAt)

  //     if (now - loginAt > sevenDays) {
  //       dispatcher(logoutHandler());
  //       window.location.href = "/user-login"; // redirect
  //     }
  //   }
  // }, []);

  return (
    <header className="w-full border-b border-gray-200 text-sm">
      {/* Top bar */}
      <div className="hidden lg:flex bg-white py-2 px-4 flex-col sm:flex-row justify-between items-center text-gray-600 gap-2">
        <div className="flex items-center space-x-2">
          <span className="bg-gray-100 text-xs px-2 py-1 rounded">Hotline 24/7</span>
          <span className="font-semibold text-black text-sm">(025) 3686 25 16</span>
        </div>
        <div className="flex items-center flex-wrap justify-center gap-2 sm:gap-4">
          <Link href="/">
            <Image
              width={500}
              height={500}
              src="/logo.png"
              alt="Illustration"
              className="w-[80px] h-auto max-w-md"
            />
          </Link>
          <select className="text-sm bg-white px-2 py-1 border rounded">
            <option>USD</option>
          </select>
          <select className="text-sm bg-white px-2 py-1 border rounded">
            <option>Eng</option>
          </select>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white py-2 px-4 flex flex-col lg:flex-row lg:items-center justify-between">
        {/* Logo */}
        <div className="hidden lg:flex items-center space-x-2 mb-2 lg:mb-0">
          <Link href="/">
            <Image
              width={1000}
              height={1000}
              src="/logo.png"
              alt="Illustration"
              className="w-[130px] h-auto max-w-md"
            />
          </Link>
        </div>

        {/* Navigation Links - hidden on mobile */}
        <nav className="hidden lg:flex flex-col lg:flex-row lg:space-x-6 text-sm font-medium w-full lg:w-auto mb-2 lg:mb-0">
          <Link href="/" className="hover:text-teal-600 py-1 lg:py-0">HOMES <span>▾</span></Link>
          <Link href="/singleproduct" className="hover:text-teal-600 py-1 lg:py-0">PAGES <span>▾</span></Link>
          <Link href="/store" className="hover:text-teal-600 py-1 lg:py-0">STORE <span>▾</span></Link>
          <Link href="/contact" className="hover:text-teal-600 py-1 lg:py-0">CONTACT <span>▾</span></Link>
           <Link href="/profile" className="hover:text-teal-600 py-1 lg:py-0">PROFILE <span>▾</span></Link>
        </nav>

        {/* Right Section (Welcome and Cart) - hidden on mobile */}
        <div className="hidden lg:flex items-center space-x-4 mt-2 lg:mt-0">
          <div className="text-sm">
            <span className="text-gray-500">Welcome {user?.name}</span>
           {
         user != null ?
         <button onClick={() => dispatcher(logoutHandler())}> Logout</button>
            :
             <p className="font-semibold">
              <Link href="/login" className="hover:underline text-teal-600">LOG IN</Link> / <Link href="/registions" className="hover:underline text-teal-600">REGISTER</Link>
            </p>
           }
          </div>
          <Link href="/cart" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">🛒 {cartItems.cart.length}</div>
            <span className="text-sm font-semibold text-teal-600"> ₹{Math.round(cartItems.final_total)}</span>
          </Link>
        </div>
      </div>

      {/* Mobile Toggle Menu */}
      <div className="lg:hidden flex justify-between items-center px-4 py-2 bg-white">
        <Link href="/">
          <Image
            width={1000}
            height={1000}
            src="/logo.png"
            alt="Illustration"
            className="w-[130px] h-auto max-w-md"
          />
        </Link>
        <div className="flex items-center space-x-4">
          <button
            className="p-2 text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="lg:hidden flex flex-col text-gray-700 font-medium bg-white p-4">
          <Link href="/" className="hover:text-teal-600 py-2">HOMES</Link>
          <Link href="/singleproduct" className="hover:text-teal-600 py-2">PAGES</Link>
          <Link href="/store" className="hover:text-teal-600 py-2">STORE</Link>
          <Link href="/contact" className="hover:text-teal-600 py-2">CONTACT</Link>
          <Link href="/profile" className="hover:text-teal-600 py-2">PROFILE</Link>
          <div className="flex flex-col mt-2">
            <span className="text-xs uppercase text-gray-500">Welcome {user?.name}</span>
            {
         user != null ?
         <button onClick={() => dispatcher(logoutHandler())}> Logout</button>
            : 
            <p className="text-sm font-semibold text-gray-800 hover:underline">
              <Link href="/login">LOG IN</Link> / <Link href="/registions">REGISTER</Link>
            </p>
            }
          </div>
          <div className="flex items-center mt-2 space-x-4">
            <Link href="/cart">
              <div className="relative flex items-center space-x-1">
                <button className="w-7 h-7 bg-teal-500 rounded-full text-white flex items-center justify-center text-xs font-bold">🛒 {cartItems.cart.length}</button>
                {/* <span className="text-xs absolute top-[-5px] left-[10px] bg-red-500  text-white rounded-full w-4 h-4 flex items-center justify-center"></span> */}
                 <span className="text-sm font-semibold text-teal-600"> ₹{Math.round(cartItems.final_total)}</span>
              </div>
            </Link>
            <Link href="/profile">
              <div className="w-7 h-7 bg-teal-500 rounded-full flex items-center justify-center text-white">👤</div>
            </Link>
          </div>
        </nav>
      )}

      {/* Teal search & promo bar */}
      <div className="bg-teal-600 text-white py-2 px-4 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
        <div className="flex items-center w-full md:w-1/2 bg-white text-black rounded overflow-hidden shadow-sm">
          <div className="px-4 py-2 text-sm font-medium cursor-pointer whitespace-nowrap">
            All Categories <span className="ml-1">▾</span>
          </div>
          <input
            type="text"
            placeholder="Search anything..."
            className="flex-grow px-2 py-2 outline-none text-sm"
          />
          <div className="px-4 cursor-pointer">
            <svg
              className="w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </div>
        </div>
        <div className="flex items-center flex-wrap justify-center space-x-4 text-xs md:text-sm font-semibold mt-2 md:mt-0">
          <span>FREE SHIPPING OVER $199</span>
          <span>30 DAYS MONEY BACK</span>
          <span>100% SECURE PAYMENT</span>
        </div>
      </div>

      {/* Breadcrumb */}
      
    </header>
  );
}

export default Header;
