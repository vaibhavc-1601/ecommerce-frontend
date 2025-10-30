import React from "react";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-center p-4 sm:p-6 md:p-8">
      <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56">
        {/* 404 SVG Illustration */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          className="w-full h-full text-indigo-600 animate-bounce-slow"
        >
          <circle cx="100" cy="100" r="90" fill="currentColor" opacity="0.1" />
          <path
            d="M60 120c0-20 10-40 40-40s40 20 40 40-10 40-40 40-40-20-40-40z"
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
          />
          <text
            x="100"
            y="110"
            textAnchor="middle"
            fontSize="40"
            fill="currentColor"
            fontWeight="bold"
          >
            404
          </text>
        </svg>
      </div>

      <h1 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
        Page Not Found
      </h1>
      <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xs sm:max-w-md md:max-w-lg">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <Link href="/">
          <span className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 transition text-center">
            Go Home
          </span>
        </Link>
        <Link href="/shop">
          <span className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition text-center">
            Continue Shopping
          </span>
        </Link>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.5s infinite;
        }
      `}</style>
    </div>
  );
}