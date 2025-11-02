// import BrandFilter from "@/components/website/BrandFilter";
// import CategoryFilter from "@/components/website/CategoryFilter";
// import ColorFilter from "@/components/website/ColorFilter";
// import PriceFilter from "@/components/website/PriceFilter";
// import Link from "next/link";
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
        
//    <div>
//         <div className="w-full bg-gray-50 py-4 px-4 mt-5 mb-6 shadow-2xl rounded-2xl">
//         <nav className="text-gray-500 text-sm flex flex-wrap items-center">
//           <Link href="/" className="hover:underline">Home</Link>
//           <span className="mx-2">/</span>
//           <Link href="/pages" className="hover:underline">pages</Link>
//           <span className="mx-2">/</span>
//          <Link href="/about"> <span className="text-black font-semibold">about</span></Link>
//         </nav>
//       </div>
//     </div>
//     <section className="w-full bg-white py-6 px-4 mt-10 rounded-2xl shadow-md">
//       {/* Section Title */}
//       <h2 className="text-lg sm:text-xl font-bold text-black mb-4">
//         TOP CELL PHONES & TABLETS
//       </h2>

//       {/* Grid Layout */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {/* Left Card */}
//         <div className="relative bg-gray-100 rounded-2xl p-6 flex flex-col justify-between overflow-hidden">
//           <div>
//             <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
//               Noise Cancelling
//             </h3>
//             <p className="text-lg text-gray-600 mb-2">Headphone</p>
//             <p className="text-sm text-gray-500">
//               Boso Over-Ear Headphone <br />
//               Wifi, Voice Assistant, <br />
//               Low Latency Game Mode
//             </p>
//           </div>

//           <div className="mt-6">
//             <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
//               BUY NOW
//             </button>
//           </div>

//           {/* Image placeholder */}
//           <div className="absolute right-0 bottom-0 w-1/2 h-full">
//             {/* Replace this with your <img src="" /> */}
//           </div>
//         </div>

//         {/* Right Card */}
//         <div className="relative bg-gradient-to-r from-gray-100 via-purple-100 to-orange-100 rounded-2xl p-6 flex flex-col justify-between overflow-hidden">
//           <div>
//             <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
//               redmi note 12 <br /> Pro+ 5g
//             </h3>
//             <p className="text-sm text-gray-600 mt-2">Rise to the challenge</p>
//           </div>

//           <div className="mt-6">
//             <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
//               SHOP NOW
//             </button>
//           </div>

//           {/* Image placeholder */}
//           <div className="absolute right-0 bottom-0 w-1/2 h-full">
//             {/* Replace this with your <img src="" /> */}
//           </div>
//         </div>
//       </div>
//     </section>



//       <div className="max-w-7xl mx-auto px-2 py-4 my-10 grid grid-cols-7 gap-2">
//      <div className="col-span-2 px-6 py-8 ">
//         <CategoryFilter/>
//         < BrandFilter/>
//         <ColorFilter />
//         <PriceFilter/>
//      </div>
//    <div className="col-span-5 px-2 py-8 ">
//      {children}
//    </div>


//       </div>
   
    
//       </body>
//     </html>
//   );
// }


import BrandFilter from "@/components/website/BrandFilter";
import CategoryFilter from "@/components/website/CategoryFilter";
import ColorFilter from "@/components/website/ColorFilter";
import PriceFilter from "@/components/website/PriceFilter";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        <div>
          <div className="w-full bg-gray-50 py-4 px-4 mt-5 mb-6 shadow-2xl rounded-2xl">
            <nav className="text-gray-500 text-sm flex flex-wrap items-center">
              <Link href="/" className="hover:underline">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/pages" className="hover:underline">pages</Link>
              <span className="mx-2">/</span>
              <Link href="/about">
                <span className="text-black font-semibold">about</span>
              </Link>
            </nav>
          </div>
        </div>

        <section className="w-full bg-white py-6 px-4 mt-10 rounded-2xl shadow-md">
          {/* Section Title */}
          <h2 className="text-lg sm:text-xl font-bold text-black mb-4">
            TOP CELL PHONES & TABLETS
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left Card */}
            <div className="relative bg-gray-100 rounded-2xl p-6 flex flex-col justify-between overflow-hidden">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Noise Cancelling
                </h3>
                <p className="text-lg text-gray-600 mb-2">Headphone</p>
                <p className="text-sm text-gray-500">
                  Boso Over-Ear Headphone <br />
                  Wifi, Voice Assistant, <br />
                  Low Latency Game Mode
                </p>
              </div>

              <div className="mt-6">
                <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
                  BUY NOW
                </button>
              </div>
            </div>

            {/* Right Card */}
            <div className="relative bg-gradient-to-r from-gray-100 via-purple-100 to-orange-100 rounded-2xl p-6 flex flex-col justify-between overflow-hidden">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  redmi note 12 <br /> Pro+ 5g
                </h3>
                <p className="text-sm text-gray-600 mt-2">Rise to the challenge</p>
              </div>

              <div className="mt-6">
                <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ Responsive Filters + Product Grid Section with Sticky Sidebar */}
        <div className="max-w-7xl mx-auto px-2 py-4 my-10 grid grid-cols-1 md:grid-cols-7 gap-6">

          {/* Filters Section */}
          <div className="md:col-span-2 order-2 md:order-1 px-4 md:px-6 py-4 md:py-8 bg-white rounded-xl shadow-sm">
            {/* Desktop Filters (Sticky) */}
            <div className="md:block hidden sticky top-24 space-y-4">
              <CategoryFilter />
              <BrandFilter />
              <ColorFilter />
              <PriceFilter />
            </div>

            {/* Mobile Filters Collapse */}
            <div className="md:hidden mb-4">
              <details className="bg-gray-100 rounded-lg p-3">
                <summary className="cursor-pointer font-semibold text-gray-800">
                  Filters
                </summary>
                <div className="mt-3 space-y-3">
                  <CategoryFilter />
                  <BrandFilter />
                  <ColorFilter />
                  <PriceFilter />
                </div>
              </details>
            </div>
          </div>

          {/* Product Section */}
          <div className="md:col-span-5 order-1 md:order-2 px-2 py-4 md:py-8">
            {children}
          </div>
        </div>

      </body>
    </html>
  );
}
