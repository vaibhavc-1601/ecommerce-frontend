import React from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import CartBtn from "./CartBtn";


export default function ProductCard({ product }) {
  const { name, thumbnail, originalPrice, discountPercentage, colors } = product;

  // Always calculate final price
  const finalPrice = product.finalPrice
    ? product.finalPrice
    : originalPrice - (originalPrice * discountPercentage) / 100;

  return (
    <article className="relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group">
      {/* Discount Badge */}
      {discountPercentage > 0 && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md z-10">
          {discountPercentage}% OFF
        </div>
      )}

      {/* Wishlist Button */}
      <button
        type="button"
        className="absolute right-3 top-3 z-20 bg-white/70 backdrop-blur-sm p-2 rounded-full hover:scale-105 transform transition"
      >
        <FaHeart className="w-4 h-4 text-pink-600" />
      </button>

      {/* Thumbnail */}
      <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
        <img
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/product/${thumbnail}`}
          alt={name}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-semibold text-gray-800 mb-2 truncate">
            {name}
          </h3>

          {/* Colors */}
          {colors?.length > 0 && (
            <div className="flex gap-1">
              {colors.map((color, index) => (
                <span
                  key={index}
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: color.hexcode }}
                ></span>
              ))}
            </div>
          )}
        </div>

        {/* Prices */}
        <div className="flex justify-between items-center gap-2 mb-3">
          <span className="text-lg font-bold text-green-600">
            Rs. {Math.round(finalPrice).toLocaleString("en-IN")}
          </span>
          {originalPrice !== finalPrice && (
            <span className="text-sm line-through text-gray-500">
              Rs. {Math.round(originalPrice).toLocaleString("en-IN")}
            </span>
          )}
        </div>


        {/* Cart Button (always visible, like first version) */}
        <CartBtn product={product} />
      </div>
    </article>
  );
}
