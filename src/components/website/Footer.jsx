// import React from "react";

// const Footer = () => (
//     <footer className="bg-gray-900 text-gray-200 py-8">
//         <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
//             <div className="mb-4 md:mb-0">
//                 <span className="text-xl font-bold">YourWebsite</span>
//             </div>
//             <ul className="flex space-x-6 mb-4 md:mb-0">
//                 <li>
//                     <a href="#" className="hover:text-white transition-colors">Home</a>
//                 </li>
//                 <li>
//                     <a href="#" className="hover:text-white transition-colors">About</a>
//                 </li>
//                 <li>
//                     <a href="#" className="hover:text-white transition-colors">Contact</a>
//                 </li>
//             </ul>
//             <div className="text-sm">
//                 &copy; {new Date().getFullYear()} YourWebsite. All rights reserved.
//             </div>
//         </div>
//     </footer>
// );

// export default Footer;



import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white text-sm text-gray-700 border-t border-gray-200">
      {/* Top Grid */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Contact Info */}
        <div className="space-y-3">
          <h2 className="font-bold text-[18px] text-black">SWOO - 1ST NYC TECH ONLINE MARKET</h2>
          <p className="text-[14px]">HOTLINE 24/7</p>
          <p className="text-[#1ABA1A] font-bold text-lg">(025) 3686 25 16</p>
          <p>267 Thatcher Road St, Brooklyn, Manhattan, NY 10002</p>
          <p>contact@swootechmart.com</p>
          <div className="flex space-x-3 text-lg mt-2">
            <a href="#" className="text-black hover:text-gray-600 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"><FaFacebookF /></a>
            <a href="#" className="text-black hover:text-gray-600 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"><FaTwitter /></a>
            <a href="#" className="text-black hover:text-gray-600 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"><FaInstagram /></a>
            <a href="#" className="text-black hover:text-gray-600 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"><FaYoutube /></a>
            <a href="#" className="text-black hover:text-gray-600 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Top Categories */}
        <div>
          <h3 className="font-bold mb-2 text-black">TOP CATEGORIES</h3>
          <ul className="space-y-1">
            {[
              "Laptops", "PC & Computers", "Cell Phones", "Tablets", "Gaming & VR",
              "Networks", "Camera", "Sounds", "Office"
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold mb-2 text-black">COMPANY</h3>
          <ul className="space-y-1">
            {["About Swoo", "Contact", "Career", "Blog", "Sitemap", "Store Locations"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Help Center */}
        <div>
          <h3 className="font-bold mb-2 text-black">HELP CENTER</h3>
          <ul className="space-y-1">
            {["Customer Service", "Policy", "Terms & Conditions", "Track Order", "FAQs", "My Account", "Product Support"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Partner */}
        <div>
          <h3 className="font-bold mb-2 text-black">PARTNER</h3>
          <ul className="space-y-1">
            {["Become Seller", "Affiliate", "Advertise", "Partnership"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Subscribe and Bottom Area */}
      <div className="bg-gray-50 border-t border-gray-200 px-4 py-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Currency / Language */}
         <div className="flex items-center gap-4 text-xs">
  {/* Currency Selector */}
  <select className="border border-gray-300 px-2 py-1 rounded">
    <option value="usd">USD</option>
    <option value="eur">EUR</option>
    <option value="inr">INR</option>
  </select>

  {/* Language Selector */}
  <select className="border border-gray-300 px-2 py-1 rounded">
    <option value="en">English</option>
    <option value="hi">हिन्दी</option>
    <option value="es">Español</option>
  </select>
</div>


          {/* Subscribe */}
          <div className="w-full max-w-2xl">
            <p className="text-gray-700 font-bold text-[18px] text-center lg:text-left">
              SUBSCRIBE & GET <span className="text-red-600 font-semibold">10% OFF</span> FOR YOUR FIRST ORDER
            </p>
            <form className="flex flex-col sm:flex-row mt-3 gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow border border-gray-300 px-3 py-2 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none"
              />
              <button className="bg-green-500 text-white px-4 py-2 rounded-md sm:rounded-l-none sm:rounded-r-md hover:bg-green-600">
                SUBSCRIBE
              </button>
            </form>
            <p className="text-xs mt-1 text-gray-500 text-center lg:text-left">
              By subscribing, you accept our <a href="#" className="underline">Policy</a>.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 border-t pt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center text-gray-500 text-xs">
          <p>&copy; 2024 <strong>Shawonetech</strong>. All Rights Reserved</p>

          <div className="flex justify-center items-center space-x-4">
            <img src="/paypal_PNG22.png" alt="PayPal" className="h-5" />
            <img src="/VISA-logo.png" alt="Visa" className="h-5" />
            <img src="/Stripe_Logo.webp" alt="Stripe" className="h-5" />
            <img src="/klarna logo.png" alt="Klarna" className="h-5" />
            <img src="/Mastercard-logo.png" alt="Mastercard" className="h-5" />

            
          </div>

          <p className="text-blue-600 hover:underline cursor-pointer">Mobile Site</p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
