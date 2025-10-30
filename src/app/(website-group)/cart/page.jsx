'use client';
import React, { useEffect, useState } from 'react';
import { FiCheck, FiTrash2 } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { getproducts } from '@/library/api-call';
import { useRouter } from 'next/navigation';
import { removeFromCart, emptyCart, updateQty } from '@/redux/features/cartSlice';

export default function CartPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const cartData = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.token);

  async function getProducts() {
    const productJSON = await getproducts(null);
    setProducts(productJSON.data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  function checkoutHandler() {
    if (!user) {
      router.push("/user-login?ref=checkout");
    }
  }

  return (
    <div className="p-4 md:p-6 lg:p-10 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        
        {/* Product List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Shopping Cart</h2>
            {cartData?.cart.length > 0 && (
              <button
                className="text-red-600 font-semibold hover:underline"
                onClick={() => dispatch(emptyCart())}
              >
                Delete All
              </button>
            )}
          </div>

          {cartData?.cart.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            cartData?.cart.map((item) => {
              const product = products?.find((pd) => pd._id === item.productId);
              return (
                <div
                  key={item.productId}
                  className="bg-white rounded-xl shadow p-4 items-center flex flex-col sm:flex-row gap-4"
                >
                  {/* Thumbnail */}
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/product/${product?.thumbnail}`}
                    alt={product?.name}
                    className="w-24 h-32 object-cover rounded"
                  />

                  <div className="flex-1">
                    {/* Product Name */}
                    <h3 className="font-semibold text-base md:text-lg text-gray-800">
                      {product?.name}
                    </h3>

                    {/* Price Section */}
                    <div className="mt-2">
                      <span className="text-gray-500 line-through text-sm">
                        ₹{Math.round(item.original_price || product?.originalPrice)}
                      </span>
                      <span className="text-red-500 font-bold text-lg md:text-xl ml-2">
                        ₹{Math.round(item.final_price || product?.finalPrice)}
                      </span>
                    </div>

                    {/* Short Description */}
                    <p className="text-gray-600 text-sm mt-2">
                      {product?.shortDescription}
                    </p>

                    {/* Quantity Selector */}
                    <div className="flex items-center mt-3 gap-2">
                      <button
                        className="px-2 py-1 border rounded"
                        onClick={() => {
                          if (item.qty > 1) {
                            dispatch(updateQty({ productId: item.productId, qty: item.qty - 1 }));
                          }
                        }}
                      >
                        -
                      </button>
                      <span className="w-6 text-center">{item.qty}</span>
                      <button
                        className="px-2 py-1 border rounded"
                        onClick={() =>
                          dispatch(updateQty({ productId: item.productId, qty: item.qty + 1 }))
                        }
                      >
                        +
                      </button>
                    </div>

                    {/* Delete Item */}
                    <button
                      className="mt-3 text-red-600 flex items-center gap-1 text-sm hover:underline"
                      onClick={() => dispatch(removeFromCart(item.productId))}
                    >
                      <FiTrash2 /> Delete
                    </button>

                    {/* Stock Info */}
                    <div className="flex items-center mt-2 gap-2">
                      <FiCheck className="text-white bg-[#1ABA1A] rounded-full p-1 text-[18px]" />
                      <span className="text-black text-sm">
                        {product?.stock ? "In Stock" : "Out of Stock"}
                      </span>
                      <span className="text-green-600 text-xs font-semibold bg-green-100 px-2 py-1 rounded">
                        FREE SHIPPING
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-xl shadow p-6 h-fit">
          <h2 className="text-xl font-bold mb-6">Order Summary</h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base">
            <div className="flex justify-between">
              <span>Sub Total:</span>
              <span>₹{cartData.original_total}</span>
            </div>
            <div className="flex justify-between">
              <span>Saving:</span>
              <span>₹{Math.round(cartData.original_total - cartData.final_total)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg border-t pt-4">
              <span>ORDER TOTAL:</span>
              <span>₹{Math.round(cartData.final_total)}</span>
            </div>
            <button
              onClick={checkoutHandler}
              className="w-full mt-6 bg-teal-600 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded"
            >
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
