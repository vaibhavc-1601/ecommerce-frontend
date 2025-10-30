import {
  FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaTruck, FaGift, FaTag, FaCheckCircle
} from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";


export default function ProductPage() {
  const imgarr = [
    "Midnight Blue", "Deep Purple", "Space Black"
  ]
  return (
    <div className="min-h-screen bg-gray-100 p-4 ">
      <div className="max-w-7xl w-full bg-white rounded-xl shadow-lg grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">

        {/* Left: Product Images */}
        <div className="col-span-1 flex flex-col items-center">
          <div className="w-full rounded-lg overflow-hidden">
            <span className="inline-block bg-[#222222] text-[white] text-xs px-2 py-1 rounded">NEW</span>
            <img
              src="3 → prod1.jpg.png"
              alt="Product"
              className="w-full object-cover hover:scale-105 transition duration-300"
            />
          </div>
          <div className="flex space-x-3 mt-4">
            {[1, 2, 3].map((_, i) => (
              <img
                key={i}
                src="3 → prod1.jpg (1).png"
                alt={`Thumb ${i + 1}`}
                className="w-16 h-16 object-cover rounded-md hover:scale-110 transition"
              />
            ))}
          </div>
        </div>

        {/* Center: Product Details */}
        <div className="col-span-1 flex flex-col space-y-5">
          <div className="space-y-2">

            <h1 className="text-[16px] font-bold text-gray-800">Somseng Galatero X6 Ultra LTE 4G/128GB, Black Smartphone</h1>
            <div className="text-[22px] text-green-600 font-semibold">$569.00 - $609.00</div>
          </div>

          <ul className="text-[12px] list-disc list-inside text-gray-600 space-y-1">
            <li>Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core</li>
            <li>DDR5 Compatible: 4*DIMM DIMMs with XMP 3.0 Memory</li>
            <li>Commanding Power Design: Twin 16+1+2 Phases Digital VRM</li>
          </ul>

          <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-green-100 text-[#1ABA1A] text-xs px-3 py-1 rounded-full">FREE SHIPPING</span>
            <span className="bg-pink-100 text-pink-700 text-xs px-3 py-1 rounded-full">FREE GIFT</span>
          </div>


          {/* Color Options */}
          <div className="space-y-2">
            <h2 className="font-semibold">COLOR: <span className="text-gray-500 font-normal">Midnight Blue</span></h2>
            <div className="flex space-x-3">
              {imgarr.map((color, i) => (
                <div key={i} className="border p-2 rounded-md hover:border-black text-xs text-center">
                  {color}<br />${i === 0 ? 589 : 609}.00
                </div>
              ))}
            </div>
          </div>

          {/* Memory Size */}
          <div className="space-y-2">
            <h2 className="text-[black] font-semibold">MEMORY SIZE: <span className="text-[#666666]">128GB</span></h2>
            <div className="flex space-x-3 flex-wrap">
              {["64GB", "128GB", "256GB", "512GB"].map((size, i) => (
                <button
                  key={i}
                  className={`border px-4 py-2 rounded-md text-xs ${size === "128GB" ? "bg-gray-200 border-black" : "hover:border-black"
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Promotions */}
          <div className="bg-[#ECF6EC] p-2 flex rounded-lg text-sm text-[black] ">
            <img src="gift.png.png" alt="" />
            <div>
              <ul>
                <li>
                  Buy <b className="text-[red]">02</b> boxes get a <b>Snack Tray</b>
                </li>
                <li>
                  Buy <b className="text-[red]">04</b> boxes get a free <b>Block Toys</b>
                </li>
              </ul>
              <p className="mt-4 text-xs text-gray-500">Promotion will expire in: 9:00pm, 25/5/2024</p>
            </div>
          </div>

          {/* SKU and Brand Info */}
          <div className="text-sm text-gray-500 mt-6 space-y-1">
            <p><b className="text-[#000000]">SKU:</b> ABC025168</p>
            <p><b className="text-[#000000]">Category:</b> Cell Phones & Tablets</p>
            <p className="text-[#1ABA1A]"><b className="text-[#000000]">Brand:</b> Somsung</p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center transition cursor-pointer">
              <FaTwitter />
            </div>
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center transition cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center transition cursor-pointer">
              <FaInstagram />
            </div>
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center transition cursor-pointer">
              <FaYoutube />
            </div>
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center transition cursor-pointer">
              <FaEarthAmericas />
            </div>
          </div>
        </div>

        {/* Right: Purchase Sidebar */}
        <div className="col-span-1  p-6 rounded-lg shadow-inner flex flex-col justify-between">
          <div className="space-y-6 bg-[#EDEFF6] p-6 rounded-lg">
            <div className="text-[12px] text-[#666666]">Total Price:</div>
            <div className="text-3xl font-bold text-gray-800">$609.00</div>
            <div className="text-sm flex items-center  text-gray-500">
              <img src="affirm.png.png" alt="" />
              <span className="text-[12px] pt-3 pl-3"> <span className="text-[#DC3545] font-bold">$49/m</span> in 12 months</span>
            </div>

            <div className="flex items-center space-x-2 text-green-600 text-sm">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              In Stock
            </div>
            <div className="bg-[#99999933] flex justify-between w-full px-4  py-3 rounded-lg font-semibold text-lg">
              <div>-</div>
              <div>1</div>
              <div>+</div>
            </div>
            <button className="bg-[#01A49E] w-full text-white py-3 rounded-lg font-semibold text-[12px]">Add to Cart</button>

            <button className="bg-[#F6AB4A]  w-full  py-3 rounded-lg font-semibold text-[12px] flex items-center justify-center gap-2">
              Buy with <img src="paypal.png.png" alt="" />
            </button>

            <div className="flex justify-between mt-4">

              <div className="flex gap-3">
                <img src="Symbol.png" alt="" />
                <button className="text-gray-600 text-sm underline"><span>Wishlist</span></button>
              </div>
              <button className="text-gray-600 text-sm underline">Add to Compare</button>
            </div>

            <div>
              <p className="text-[12px]">Guaranteed Safe Checkout</p>
            </div>
            {/* Secure Payment Badges */}
            <div className="flex flex-wrap gap-2 mt-6">

              <div className=" bg-gray-200 rounded-md flex items-center justify-center">
                <img src="pay.png.png" alt="" />
              </div>

            </div>

          </div>

          {/* Quick Order Button */}
          <div className="mt-4 bg-[#EDEFF6] p-6 rounded-lg">
            <button className="w-full py-3 bg-[#333333] text-white rounded-lg text-lg">Quick Order 24/7</button>
            <div className="text-center text-[#000000] text-[22px] font-bold mt-2">(025) 3886 25 16</div>

          </div>
          <div className="text-center mt-5 text-gray-500 flex gap-4 text-[14px] mt-1">
            <img src="Symbol (1).png" alt="" />
            <span> Ships from <span className="font-bold text-black">United States</span></span>
          </div>
        </div>
      </div>
      <div className="h-[410px] pl-[-0px] bg-gray-100 p-4 flex flex-col lg:flex-row gap-3">

        {/* Left Section */}
        <div className="bg-white gap-4 flex w-[1018px]  rounded-xl shadow-md p-6">
          <div>
            <h2 className="text-xl font-bold mb-6">FREQUENTLY BOUGHT TOGETHER</h2>
            {/* Products Display */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Product 1 */}
              <div className="flex flex-col items-center">
                <img
                  src="prod1.jpg.png"
                  alt="Phone"
                  className="w-24 md:w-28"
                />
              </div>

              <div className="text-3xl font-bold hidden md:block">+</div>

              {/* Product 2 */}
              <div className="flex flex-col items-center">
                <img
                  src="prod1.jpg.png"
                  alt="Headphones"
                  className="w-24 md:w-28"
                />
              </div>

              <div className="text-3xl font-bold hidden md:block">+</div>

              {/* Product 3 */}
              <div className="flex flex-col items-center opacity-40">
                <img
                  src="prod1.jpg.png"
                  alt="Watch"
                  className="w-24 md:w-28"
                />
              </div>
            </div>

            {/* Checkbox List */}
            <div className="mt-8 space-y-4 text-[14px]">
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-5 w-5" />
                <label className="text-gray-700">
                  This item: Somseng Galatero X6 Ultra LTE 4G/128 Gb, Black Smartphone
                  <span className="text-red-600 font-semibold"> ($569.00)</span>
                </label>
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-5 w-5" />
                <label className="text-gray-700">
                  BOSO 2 Wireless On Ear Headphone
                  <span className="text-red-600 font-semibold"> ($369.00)</span>
                </label>
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-5 w-5" />
                <label className="text-gray-700">
                  Oppio Watch Series 8 GPS + Cellular Stainless Steel Case with Milanese Loop
                  <span className="text-red-600 font-semibold"> ($129.00)</span>
                </label>
              </div>
            </div>
          </div>
          {/* Total Price Card */}
          <div className=" w-[400px] rounded-xl  p-6 flex flex-col">
            <h2 className="text-[12px]  mb-2">TOTAL PRICE:</h2>
            <p className="text-[30px] font-bold  mb-4">$609.00</p>
            <button className="bg-[#01A49E] w-full  text-white py-3 px-6 rounded-lg font-semibold">
              ADD TO CART
            </button>
            <p className="mt-3 text-gray-500">♡ Add all to Wishlist</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col h-full w-[300px]  gap-6">
          {/* Sale Banner */}
          <div className=" flex items-center h-1/2 justify-between ">
            <img
              src="Main → Section → Link → ban1.png.png"
              alt="Controllers"
              className="w-full h-full"
            />
          </div>

          {/* oPad Pro Card */}
          <div className="flex h-1/2 items-center relative overflow-hidden justify-between">
            <div className="absolute top-[25px] left-[25px]">
              <p className="text-lg text-white w-[100px] font-bold">oPad Pro Mini 5</p>
              <p className="text-green-600 mt-[30px] text-[24px]"><div className="text-[10px] text-[#999999]">From</div> $169</p>
            </div>
            <img
              src="Main → Section → Link → ban2.png.png"
              alt="oPad Pro Mini"
              className="w-full h-full"
            />
          </div>
        </div>

      </div>
      <div className="w-full bg-white rounded-xl shadow-lg mx-auto p-4 space-y-8">
        {/* Tabs */}
        <div className="flex space-x-8">
          <button className="pb-2 border-b-2 border-blue-500 font-semibold text-blue-600">
            DESCRIPTION
          </button>
          <button className="pb-2 text-gray-600 hover:text-blue-600">
            REVIEWS (5)
          </button>
          <button className="pb-2 text-gray-600 hover:text-blue-600">
            ADDITIONAL INFORMATION
          </button>
        </div>

        {/* Main Image */}
        <div className="w-full">
          <p className="text-[14px] text-black">Built for ultra-fast performance, the thin and lightweight Samsung Galaxy Tab S2 goes anywhere you go. Photos, movies and documents pop on a crisp, clear Super AMOLED display. Expandable
            memory lets you enjoy more of your favorite content. And connecting and sharing between all your Samsung devices is easier than ever. Welcome to life with the reimagined Samsung Galaxy Tab
            S2. Watch thev world come to life on your tablet's <b>Super AMOLED display * </b>. With deep contrast, rich colors and crisp details, you won't miss a thing</p>
          <img
            src="det1.jpeg.png" // Replace with your image link
            alt="Tablet Display"
            className="w-full mt-5 rounded-lg object-cover"
          />
          <p className="text-sm text-center text-gray-500 mt-2">
            * The Galaxy Tab S2 8.0-inch display provides you with vivid and immersive...
          </p>
        </div>

        {/* From the Manufacturer */}
        <div className="space-y-4">
          <h2 className="text-[18px] font-semibold">From the manufacturer</h2>
          <p className="text-gray-700 leading-relaxed">
            Dive into the blockbuster movies you can't wait to see. Switch between your favorite apps quickly and easily. The new and improved octa-core processor gives you the power and speed you need
            to see more and do more. Expand your tablet's memory from 32GB to up to an additional 128GB and enjoy more of your favorite music, photos, movies and games on the go with a microSD card.
            With Quick Connect, start a show on your Smart TV and, with the touch of a button, take it with you by moving it to your Galaxy Tab S2.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Or send videos and photos from your tablet screen to your TV screen to share with everyone in the room. Work effortlessly between your Samsung tablet and Samsung smartphone with SideSync.
            Quickly drag and drop photos between devices. And even respond to a call from your smartphone right on your tablet screen.
          </p>
        </div>

        {/* Two Column Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <img
            src="det2.png.png" // Replace with your image link
            alt="Person using tablet"
            className="w-full rounded-lg object-cover"
          />
          <img
            src="det3.png.png" // Replace with your image link
            alt="Tablet Apps"
            className="w-full rounded-lg object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <h2 className="text-[18px] font-bold">Samsung Galaxy Tab S2, 8-inch, White</h2>
          <p className="text-gray-700 leading-relaxed">
            The Samsung Galaxy Tab S2 offers ultra-fast performance thanks to its 8.0" super AMOLED screen...
            Customize your Galaxy Tab with all your favorite apps and widgets!
          </p>
        </div>

        {/* Show More */}
        <div>
          <button className="text-blue-600 text-[13px] font-semibold hover:underline">
            SHOW MORE
          </button>
        </div>
      </div>
      <div className="p-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Product 1 */}
            <div className="bg-white rounded-lg shadow p-4 flex flex-col">
              <div className="relative">
                <img
                  src="175d4e01c3ccc08552a7608516d07ff4f2593a4a.png"
                  alt="SROK Smart Phone"
                  className="w-full h-48 object-cover rounded-md"
                />
                <span className="absolute top-[-10px] left-[-10px] flex items-center gap-1 bg-[#01A49E] text-white text-xs font-semibold px-4 py-1 rounded">
                  SAVE <br /> $199.00
                </span>
              </div>
              <div className="mt-4 flex-grow">
                <h3 className="text-sm font-medium text-[#000000]">SROK Smart Phone 128GB, Oled Retina</h3>
                <div className="flex items-center mt-2 gap-2">
                  <div className=" text-[#F1352B] font-bold text-lg">$579.00</div>
                  <div className="text-gray-400 text-sm line-through">$850.00</div>
                </div>
                <div className="mt-2 space-x-2">
                  <span className="flex items-center gap-1 text-[#1ABA1A] text-xs px-2 py-1 rounded">
                    FREE SHIPPING
                  </span>
                  <span className="text-xs flex gap-2 items-center"><FaCheckCircle className="text-[#1ABA1A]" />In stock</span>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-lg shadow p-4 flex flex-col">
              <div className="relative">
                <img
                  src="f7311fe8359d8e443a010f51a2a03878d38edca5.png"
                  alt="aPod Pro Tablet"
                  className="w-full h-48 object-cover rounded-md"
                />
                <span className="absolute top-[-10px] left-0 bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded">
                  NEW
                </span>
              </div>
              <div className="mt-4 flex-grow">
                <h3 className="text-sm font-medium">aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB</h3>
                <div className="mt-2  font-bold text-lg">$979.00 - $1,259.00</div>
                <div className="mt-2 space-x-2">
                  <span className="flex items-center gap-1 text-xs px-2 py-1 rounded">
                    $2.98 SHIPPING
                  </span>
                  <span className="text-xs flex gap-2 items-center"><FaCheckCircle className="text-[#1ABA1A]" />In stock</span>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-lg shadow p-4 flex flex-col">
              <div>
                <img
                  src="df9547993afc5947db6801bc7b775bddbd69947b.png"
                  alt="OPod Pro"
                  className="w-full h-48 object-cover rounded-md"
                />

              </div>
              <div className="mt-4 flex-grow">
                <h3 className="text-sm font-medium">OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS</h3>
                <div className="mt-2 py-2 font-bold text-lg">$659.00</div>
                <div className=" flex space-x-1">
                  <span className="flex items-center gap-1 bg-green-100 text-green-600 text-xs px-2 py-1 rounded">
                    FREE SHIPPING
                  </span>
                  <span className="flex items-center gap-1 bg-red-100 text-red-600 text-xs px-2 py-1 rounded">
                    FREE GIFT
                  </span>
                </div>
                <div className="mt-2 flex items-center space-x-2">
                  <span className="text-xs flex gap-2 items-center"><FaCheckCircle className="text-[#1ABA1A]" />In stock</span>
                </div>
                <div className="flex gap-3 py-2">
                  <div>
                    <img width="40px" src="df9547993afc5947db6801bc7b775bddbd69947b (1).png" alt="" />
                  </div>
                  <div>
                    <img width="40px" src="175d4e01c3ccc08552a7608516d07ff4f2593a4a (1).png" alt="" />
                  </div>
                  <div>
                    <img width="40px" src="e9716b3da8adab464285c71a3f34ecbb005d65b2 (1).png" alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* Product 4 */}
            <div className="bg-white rounded-lg shadow p-4 flex flex-col">
              <div className="relative">
                <img
                  src="e9716b3da8adab464285c71a3f34ecbb005d65b2.png"
                  alt="Xiaomi Redmi Note"
                  className="w-full h-48 object-cover rounded-md"
                />
                <span className="absolute top-[-10px] left-[-10px] flex items-center gap-1 bg-[#01A49E] text-white text-xs font-semibold px-4 py-1 rounded">
                  SAVE <br /> $59.00
                </span>
              </div>
              <div className="mt-4 flex-grow">
                <h3 className="text-sm font-medium">Xiaomi Redmi Note 5, 64GB</h3>
                <div className="flex mt-2 gap-2 items-center">
                  <div className=" text-[#F1352B] font-bold text-lg">$1,239.00</div>
                  <div className="text-[#666666] text-sm line-through">$1,819.00</div>
                </div>
                <div className="mt-2 items-center  space-x-2">
                  <span className="flex items-center gap-1 text-green-600 text-xs px-2 py-1 rounded">
                    FREE SHIPPING
                  </span>
                  <span className="text-xs px-2">Contact</span>
                </div>
              </div>
            </div>

            {/* {product 5} */}
            <div className="bg-white rounded-lg shadow p-4 flex flex-col">
              <div className="relative">
                <img
                  src="42eb7d4d774278b9ccbcc9f8fbb93c2ef1a71ce1.png"
                  alt="Xiaomi Redmi Note"
                  className="w-full h-48 object-cover rounded-md"
                />
                <span className="absolute top-2 left-2 flex items-center gap-1 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  <FaTag /> SAVE $59.00
                </span>
              </div>
              <div className="mt-4 flex-grow">
                <h3 className="text-sm font-medium">Microsute Alpha Ultra S5
                  Surface 128GB 2022, Sliver</h3>
                <div className="mt-2 text-lg font-bold text-lg">$1,239.00</div>
                <div className="mt-2  space-x-2">
                  <span className="flex items-center gap-1  text-green-600 text-xs px-2 py-1 rounded">
                    FREE SHIPPING
                  </span>
                  <span className=" px-2 py-1 text-xs">Contact</span>
                </div>
              </div>
              <div className="flex gap-3 py-2">
                <div>
                  <img width="40px" src="42eb7d4d774278b9ccbcc9f8fbb93c2ef1a71ce1 (1).png" alt="" />
                </div>
                <div>
                  <img width="40px" src="70fb3352120a006a36410fe660bdcf040428d535.png" alt="" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-md p-4 overflow-x-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">YOUR RECENTLY VIEWED</h2>
          <a href="#" className="text-sm text-gray-500 hover:underline">
            View All
          </a>
        </div>

        <div className="flex space-x-6 w-full sm:min-w-full ">
          {/* Item 1 */}
          <div className="w-[325px]">
            <div className="bg-black text-white text-xs rounded px-2 py-1 w-fit mb-2">
              NEW
            </div>
            <div className="flex gap-1 justify-center items-center">
              <div>
                <img
                  src="6964b4b695280548d1addf6a64f60e42f217efb6.png"
                  alt="Xomie Remid Watch"
                  className="mb-2"
                />
              </div>
              <div>
                <p className="text-sm font-medium">Xomie Remid 8 Sport Water Resistance Watch</p>
                <p className="text-sm mt-2 font-medium">$579.00</p>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="w-[325px]">
            <div className="bg-black text-white text-xs rounded px-2 py-1 w-fit">
              NEW
            </div>
            <div className="flex gap-1 justify-center items-center">
              <div>
                <img
                  src="bf7cc387fee5960d068fa7e24bec5f8bb6aa0242.png"
                  alt="Microte Surface"
                  className="mb-2"
                />
              </div>
              <div>
                <p className="text-sm font-medium">Microte Surface 2.0 Laptop</p>
                <p className="text-sm font-medium mt-2">$979.00</p>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="w-[325px] flex gap-1 justify-center items-center">
           <div>
           <img
              src="a4e1f6fc23ab898ccf43fce87f84e61430d36233.png"
              alt="iPod Pro"
              className="mb-2"
            />
           </div>
            <div>
            <p className="text-sm font-medium">
              iPod Pro Tablet 2023 LTE + WiFi, GPS Cellular 12.9 inch, 512GB
            </p>
            <p className="text-sm font-medium mt-2">$979.00 - $1,259.00</p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="w-[325px] relative">
            <div className="absolute top-[5px] left-[-10px] bg-[#01A49E] text-white text-xs rounded px-1 py-1">
              SAVE <br /> $190.00
            </div>
            <div  className="flex gap-1 justify-center items-center">
              <div>
                <img
                  src="f3c0dacb6d5add279aaa6437be1c77d3c8b0eb72.png"
                  alt="SROK Smart Phone"
                  className="mb-2 mt-6"
                />
              </div>
              <div>
                <p className="text-sm font-medium">SROK Smart Phone 128GB, Oled Retina</p>
                <p className="text-sm text-red-600 mt-2 font-semibold">$579.00 <span className="text-gray-400 line-through">$779.00</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
