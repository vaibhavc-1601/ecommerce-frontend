import React from "react";

export default function EcommercePreloader({ visible = true, message = "Loading your shop..." }) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm dark:bg-black/60">
      <div className="w-full max-w-md p-6 rounded-2xl shadow-2xl bg-white dark:bg-gray-900 flex flex-col items-center gap-6">
        {/* Animated shopping bag + tag */}
        <div className="relative flex items-center justify-center">
          <svg
            viewBox="0 0 64 64"
            className="w-24 h-24 animate-bob"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <g fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 20h24v26a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4z" className="text-gray-900 dark:text-gray-100" />
              <path d="M26 20a6 6 0 1 1 12 0" className="text-gray-900 dark:text-gray-100" />
            </g>
          </svg>

          <div className="absolute -right-2 -bottom-2 flex items-center gap-1">
            <div className="px-2 py-1 text-xs rounded-md bg-indigo-600 text-white font-medium shadow-sm animate-tilt">Shop24</div>
          </div>
        </div>

        {/* Dots loader */}
        <div className="flex items-end gap-3 h-6">
          <span className="w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-600 animate-bounce-delay" style={{ animationDelay: '0s' }} />
          <span className="w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-600 animate-bounce-delay" style={{ animationDelay: '0.12s' }} />
          <span className="w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-600 animate-bounce-delay" style={{ animationDelay: '0.24s' }} />
        </div>

        {/* Progress bar / shimmer */}
        <div className="w-full">
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-progress" />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="h-14 rounded-lg bg-gray-200 overflow-hidden relative">
              <div className="absolute inset-0 animate-shimmer" />
            </div>
            <div className="h-14 rounded-lg bg-gray-200 overflow-hidden relative">
              <div className="absolute inset-0 animate-shimmer" />
            </div>
            <div className="h-14 rounded-lg bg-gray-200 overflow-hidden relative">
              <div className="absolute inset-0 animate-shimmer" />
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-600 dark:text-gray-300">{message}</div>

        <style>{`
          /* custom keyframes and tiny helper classes (works with Tailwind's JIT) */
          @keyframes bob {
            0% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-8px) rotate(-3deg); }
            100% { transform: translateY(0) rotate(0deg); }
          }

          @keyframes tilt {
            0% { transform: rotate(0deg); }
            50% { transform: rotate(-6deg); }
            100% { transform: rotate(0deg); }
          }

          @keyframes bounce-delay {
            0% { transform: translateY(0); opacity: 0.6 }
            50% { transform: translateY(-8px); opacity: 1 }
            100% { transform: translateY(0); opacity: 0.6 }
          }

          @keyframes progress {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          .animate-bob { animation: bob 1.6s ease-in-out infinite; }
          .animate-tilt { animation: tilt 1.8s ease-in-out infinite; }
          .animate-bounce-delay { animation: bounce-delay 0.9s infinite; }
          .animate-progress { animation: progress 2s linear infinite; transform-origin: left; }
          .animate-shimmer::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%);
            transform: translateX(-100%);
            animation: shimmer 1.2s linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
}
