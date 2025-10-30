import Image from "next/image";

const leaders = [
  { name: 'Henry Avery', title: 'Chairman', img: '/div.img(1).png' },
  { name: 'Michael Edward', title: 'Vice President', img: '/div.img (2).png' },
  { name: 'Eden Hazard', title: 'CEO', img: '/div.img (3).png' },
  { name: 'Robert Downey Jr', title: 'CEO', img: '/div.img (4).png' },
  { name: 'Nathan Drake', title: 'Strategist Director', img: '/div.img (5).png' },
];

export default function TechMartLanding() {
  return (
    <div className="p-4 w-full m-auto sm:p-6 md:p-8 lg:p-10 bg-gray-50 space-y-6">
      {/* Hero Section */}
      <div className="bg-white shadow-md rounded-2xl p-6 md:p-10">
        <div className="flex justify-center">
          <Image
            src="/banner.png"
            alt="Banner"
            width={900}
            height={500}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10 border-t border-gray-200 pt-6">
          <div>
            <p className="text-[18px] text-black font-bold mb-1">OUR PURPOSE IS TO</p>
            <p className="text-green-600 text-[18px] font-semibold">ENRICH AND ENHANCE LIVES</p>
            <p className="text-black mt-1 text-[18px]">THROUGH TECHNOLOGY</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-800">$12.5M</p>
            <p className="text-sm text-gray-500">TOTAL REVENUE FROM 2021 - 2023</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-800">12K+</p>
            <p className="text-sm text-gray-500">ORDERS DELIVERED SUCCESSFULLY IN ONE DAY</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-800">725+</p>
            <p className="text-sm text-gray-500">STORES AND OFFICES IN THE U.S. AND WORLDWIDE</p>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-2xl flex justify-center items-center p-4">
          <Image width={1000} height={1000} src="/div.img.png" alt="Courier" className="w-full h-auto object-contain" />
        </div>
        <div className="bg-[#E2E4EB] shadow-md rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-black">
              We connect millions of buyers and sellers around the world, empowering people &
              creating economic opportunity for all.
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              With our markets, millions of people around the world connect, both online and
              offline, to make, sell, and buy unique goods...
            </p>
          </div>
          <button className="mt-6 px-4 py-2 bg-[#01A49E] text-white rounded-lg hover:bg-green-700 w-fit">
            OUR SERVICES
          </button>
        </div>
      </div>

      {/* Features Cards */}
      <div className="bg-gray-100 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "100% AUTHENTIC PRODUCTS",
              desc: "Sweco Tech Mart only distributes 100% authorized products and guarantees quality.",
            },
            {
              title: "FAST DELIVERY",
              desc: "Fast shipping with multiple delivery options. Guaranteed on-time delivery and product care.",
            },
            {
              title: "AFFORDABLE PRICE",
              desc: "We offer affordable & competitive prices with special promotions.",
            },
          ].map((card, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-4">
              <div className="h-6 w-6 bg-teal-500 rounded-full self-end" />
              <div>
                <h3 className="text-lg font-bold">{card.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="px-4 py-8 max-w-7xl mx-auto">
        <section className="mb-12">
          <h2 className="text-xl md:text-3xl font-bold mb-4">OUR MISSION AND VISION</h2>
          <p className="text-gray-700 mb-4">
            Nam maximus nunc a augue pulvinar, non euismod mauris tempor. Cras non elit vel magna...
          </p>
          <Image width={1000} height={1000} src="/about3.png.png" alt="City Buildings" className="w-full h-auto rounded-lg shadow-md" />
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-xl md:text-3xl font-bold mb-4">
            FROM A RETAIL STORE TO THE GLOBAL CHAIN OF STORES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <ul className="space-y-2">
              <li><strong>1997:</strong> A small store in Brooklyn Town</li>
              <li><strong>1998:</strong> A new idea was born</li>
              <li><strong>2000:</strong> Entered the tech retail industry</li>
              <li><strong>2002:</strong> Gained industry recognition</li>
              <li><strong>2005:</strong> Expanded nationally</li>
              <li><strong>2006:</strong> Global distribution started</li>
              <li><strong>2009:</strong> Diversified product offerings</li>
              <li><strong>2010:</strong> Grew our team</li>
              <li><strong>2012:</strong> Revamped online platform</li>
            </ul>
            <ul className="space-y-2">
              <li><strong>2014:</strong> Cross-border expansion</li>
              <li><strong>2016:</strong> Automation and AI integration</li>
              <li><strong>2018:</strong> Eco-conscious packaging</li>
              <li><strong>2020:</strong> Pandemic resilience</li>
              <li><strong>2022:</strong> Record-breaking sales</li>
              <li><strong>2023:</strong> Celebrated global impact</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Leadership Section */}
      <div className="p-4 md:p-8 bg-gray-50">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Leadership</h1>
          <a href="#" className="text-blue-600 hover:underline text-sm">
            View All
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden p-2 hover:shadow-lg transition"
            >
              <Image
                width={1000}
                height={1000}
                
                src={leader.img}
                alt={leader.name}
                className="w-full h-[320px] object-cover rounded-md"
              />
              <h2 className="text-md font-semibold mt-2">{leader.name}</h2>
              <p className="text-sm text-gray-500">{leader.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final Image */}
      <div className="mt-6">
        <Image width={10000} height={10000} src="/Main → Section.png" alt="Section Banner" className="w-full h-auto" />
      </div>
    </div>
  );
}
