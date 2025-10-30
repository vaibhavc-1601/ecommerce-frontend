'use client'
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AxiosInstance, formatIndianCurrency } from "@/library/helper";
import { useRouter } from "next/navigation";
import { useRazorpay } from "react-razorpay";
import { emptyCart } from "@/redux/features/cartSlice";

const Checkout = () => {
// const Razorpay = useRazorpay();
const { Razorpay } = useRazorpay();
  const dispacher = useDispatch()
  const router = useRouter()
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.data);


  const [selectedAddress, setSelectedAddress] = useState(0);
  const [paymentMode, setPaymentMode] = useState(0);


  function orderHandler() {
    AxiosInstance.post("order/order-place", {
      user_id: user?._id,
      payment_mode: paymentMode,
      order_total: cart.final_total,
      shipping_detailes: user?.shipping_address[selectedAddress]
    }).then(
      (response) => {
        if (response.data.success) {
          console.log(response.data)
          if (paymentMode == 0) {
               dispacher(emptyCart());
            router.push(`/thank-you/${response.data.order_id}`)
          } else {
            const options = {
              key: "rzp_test_RNrhqcSbdPGxPy",
              currency: "INR",
              name: "Test Company",
              description: "Test Transaction",
              amount: cart.final_total * 100,
              order_id: response.data.razorpay_order_id, // Generate order_id on server
              handler: (Razorpayresponse) => {
                 AxiosInstance.post("order/success",
                  {
                    order_id: response.data.order_id,
                    user_id: user?._id,
                    razorpay_response: Razorpayresponse
                  }
                ).then( 
                  (successresponse) => {
                    console.log(successresponse)

                    if (successresponse.data.status == "success") {
                      dispacher(emptyCart());
                      router.push(`/thank-you/${response.data.order_id}`)
                    }
                  }
                ).catch(
                  (err) => {
                    console.log(err)
                  }
                )
              },
              prefill: {
                name: user?.name,
                email: user?.email,
                contact: "9649828747",
              },
              theme: {
                color: "#F37254",
              },
            };

           const razorpayInstance = new Razorpay(options);
razorpayInstance.open();
          }
        }
      }
    ).catch(
      (error) => {
        console.log(error)

      }
    )
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Left Section */}
        <div className="flex-1 bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            🛒 Checkout
          </h1>

          {/* Address Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Select Address</h2>
            {user?.shipping_address?.map((address, index) => (
              <div
                key={index}
                onClick={() => setSelectedAddress(index)}
                className={`p-4 border rounded-lg mb-4 cursor-pointer ${selectedAddress === index ? "border-teal-700 bg-blue-50" : "border-gray-300"
                  }`}
              >
                <p className="font-medium">{address.name}</p>
                <p>{address.contact}</p>
                <p>{address.addressLine1}</p>
                {address.addressLine2 && <p>{address.addressLine2}</p>}
                <p>
                  {address.city}, {address.state}, {address.postalCode}
                </p>
                <p>{address.country}</p>
              </div>
            ))}
            <div className="w-[100px] text-center p-2 bg-teal-700 border  rounded-md">+</div>
          </div>

          {/* Payment Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Select Payment Mode</h2>
            <div className="flex gap-4">
              <button
                onClick={() => setPaymentMode(0)}
                className={`flex-1 py-3 text-center rounded-lg font-medium border ${paymentMode === 0
                  ? "bg-teal-700 text-white border-teal-700"
                  : "bg-gray-50 text-gray-700 border-gray-300"
                  }`}
              >
                Cash on Delivery (COD)
              </button>
              <button
                onClick={() => setPaymentMode(1)}
                className={`flex-1 py-3 text-center rounded-lg font-medium border ${paymentMode === 1
                  ? "bg-teal-700 text-white border-teal-700"
                  : "bg-gray-50 text-gray-700 border-gray-300"
                  }`}
              >
                Online Payment
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full h-[420px] lg:w-1/3 bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Order Summary
          </h2>
          <div className="p-5 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl shadow-inner">
            <div className="flex justify-between mb-3 text-gray-700">
              <p>Base Amount</p>
              <p className="font-medium">{formatIndianCurrency(cart.original_total)}</p>
            </div>
            <div className="flex justify-between mb-3 text-gray-700">
              <p>Discount</p>
              <p className="text-green-600 font-semibold">
                -{formatIndianCurrency(cart.original_total - cart.final_total)}
              </p>
            </div>
            <div className="flex justify-between text-gray-900 font-bold text-lg border-t pt-3">
              <p>Final Payable</p>
              <p>{formatIndianCurrency(cart.final_total)}</p>
            </div>
          </div>

          {/* Confirm Button */}
          <button onClick={orderHandler}
            className="w-full mt-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg hover:opacity-90 hover:scale-[1.01] transition-transform"
          >
            ✅ Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
