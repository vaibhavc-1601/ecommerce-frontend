'use client'
import Link from "next/link";

const ThankYou = ({params}) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="bg-white shadow-2xl rounded-2xl p-10 text-center max-w-md w-full animate-fadeIn">
        
        {/* Success Circle */}
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-green-500 animate-pulse"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Message */}
        <h1 className="text-2xl font-bold text-gray-800 mb-3 animate-slideUp">
          Thank You for Your Order!
        </h1>
        <p className="text-gray-600 mb-6 animate-fadeIn delay-200">
          We’ve received your order and will process it soon.  
        </p>

        {/* Back to Home Button */}
        <Link
          href="/"
          className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow-lg hover:scale-105 transition-transform inline-block"
        >
          Go to Home
        </Link>
      </div>

      {/* Tailwind Custom Animations */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default ThankYou;
