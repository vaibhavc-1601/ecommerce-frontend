import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

export default function ContactPage() {
    return (
        <div className="px-4 sm:px-6 lg:px-12 py-8 space-y-12">
            {/* Heading */}
            <h2 className="text-xl md:text-2xl font-semibold uppercase text-center md:text-left">
                Ready to work with us
            </h2>

            {/* Contact Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 md:p-8 rounded-2xl shadow-md">
                {/* Contact Form */}
                <form className="space-y-5">
                    <p className="text-sm text-gray-600">
                        Contact us for all your questions and opinions
                    </p>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full">
                            <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                                First Name <span className="text-red-500">*</span>
                            </label>
                            <input id="firstName" type="text" className="border p-3 rounded-md w-full" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                                Last Name <span className="text-red-500">*</span>
                            </label>
                            <input id="lastName" type="text" className="border p-3 rounded-md w-full" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                            Email Address <span className="text-red-500">*</span>
                        </label>
                        <input id="email" type="email" className="border p-3 rounded-md w-full" />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1">
                            Phone Number <span className="text-gray-400">(Optional)</span>
                        </label>
                        <input id="phone" type="text" className="border p-3 rounded-md w-full" />
                    </div>

                    <div>
                        <label htmlFor="country" className="block text-sm font-medium mb-1">
                            Country / Region <span className="text-red-500">*</span>
                        </label>
                        <select id="country" className="border p-3 rounded-md w-full">
                            <option>United States (US)</option>
                            <option>United Kingdom (UK)</option>
                            <option>India</option>
                            <option>Australia</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-1">
                            Subject <span className="text-gray-400">(Optional)</span>
                        </label>
                        <input id="subject" type="text" className="border p-3 rounded-md w-full" />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            className="border p-3 rounded-md w-full h-32 resize-none"
                            placeholder="Note about your order, e.g. special note for delivery"
                        ></textarea>
                    </div>

                    <div className="flex items-start gap-2">
                        <input type="checkbox" id="terms" className="mt-1" />
                        <label htmlFor="terms" className="text-sm">
                            I want to receive news and updates once in a while. By submitting, I agree to the{" "}
                            <a href="#" className="text-green-600 underline">Terms & Conditions</a>.
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-3 rounded-md transition duration-200"
                    >
                        Send Message
                    </button>
                </form>

                {/* Contact Info and Image */}
                <div className="flex flex-col justify-between space-y-8">
                    <div className="bg-[#EDEFF6] p-6 rounded-lg space-y-6">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-600 mb-1">
                                United States (Headquarters)
                            </h3>
                            <p className="text-sm">152 Thatcher Road St, Manhattan, 10463, US</p>
                            <p className="text-sm">+025 388 26 15</p>
                            <a href="mailto:help@switchsmart.com" className="text-green-600 text-sm">
                                help@switchsmart.com
                            </a>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-gray-600 mb-1">
                                United Kingdom Branch
                            </h3>
                            <p className="text-sm">12 Buckingham Rd, Thronthewalte, HD3 4TY, UK</p>
                            <p className="text-sm">+7181 895-9330</p>
                            <a href="mailto:contact@switchsmart.co.uk" className="text-green-600 text-sm">
                                contact@switchsmart.co.uk
                            </a>
                        </div>

                        <div className="flex gap-4 text-xl text-gray-700">
                            <a href="#" aria-label="Twitter"><FaTwitter /></a>
                            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                            <a href="#" aria-label="Instagram"><FaInstagram /></a>
                            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="w-full">
                        <Image
                            src="/contact.png.png"
                            alt="Laptop work"
                            width={1000}
                            height={600}
                            className="rounded-md shadow-md w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Google Map Section */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md">
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Find us on Google Map</h2>
                <div className="w-full h-[300px] md:h-[400px] rounded overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.052574716216!2d12.239309515426018!3d41.792265679229244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13259b0cf60a4bbd%3A0x55c1978c1b67d896!2sChiesa%20di%20San%20Francesco!5e0!3m2!1sen!2sit!4v1617189541302!5m2!1sen!2sit"
                        width="100%"
                        height="100%"
                        allowFullScreen
                        loading="lazy"
                        className="w-full h-full border-none"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
