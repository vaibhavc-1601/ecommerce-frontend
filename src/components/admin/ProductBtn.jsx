"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AxiosInstance, notify } from '@/library/helper'
import { FaEdit, FaTrash } from "react-icons/fa";
import DeleteBtn from './DeleteBtn'
export default function ProductBtn({ product }) {
    console.log(product, 'product one')
    console.log(product._id, 'product')
    const [toggle, setToggle] = useState(null);
    const router = useRouter();
    // function statusHandler(flag) {
    //     console.log(`/product/status and check/${product._id}`, flag)
    //     AxiosInstance.patch(`/product/status/${product._id}`).then((response) => {
    //         // notify(response.data.message, response.data.success)
    //         console.log(response.data.success, 'response')
    //         if (response.data.success) {
    //             router.refresh();
    //         }
    //     }
    //     ).catch(
    //         (error) => {
    //             console.log(error)
    //             notify("something went wrong....", 0)
    //         }
    //     )
    // }

    function statusHandler(flag) {
        AxiosInstance.patch(`/product/status/${product._id}`, { flag })
            .then((response) => {
                notify(response.data.message, response.data.success)
                if (response.data.success) {
                    router.refresh();
                }
            })
            .catch((error) => {
                console.log(error);
                notify("Something went wrong....", 0);
            });
    }
    return (
        <>
            {/* Status */}
            <td className="py-3 px-4">

                <button
                    onClick={() => statusHandler(1)}
                    className={`px-2 py-1 rounded-full text-xs font-medium ${product.status ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                        }`}
                >
                    {product.status ? "Active" : "Inactive"}
                </button>
            </td>

            {/* Stock */}
            <td className="py-3 px-4">

                <button
                    onClick={() => statusHandler(2)}
                    className={`px-2 py-1 rounded-full text-xs font-medium ${product.stock ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                        }`}
                >
                    {product.stock ? "In Stock" : "Out of Stock"}
                </button>


            </td>

            <td className="py-3 px-4">
                <button
                    onClick={() => statusHandler(3)}
                    className={`px-2 py-1 rounded-full text-xs font-medium ${product.topSelling ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                        }`}
                >
                    {product.topSelling ? "Top Selling" : "Not Top Selling"}
                </button>

            </td>

            {/* Actions */}
            <td className="py-3 px-4 text-center space-x-3">
                <Link
                    href={`/admin/product/edit/${product._id}`}
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800"
                >
                    <FaEdit /> Edit
                </Link>

                <DeleteBtn path={`product/delete/${product._id}`} />

            </td>
            <td>
                <button onClick={() => setToggle(product)} className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
                    View
                </button>
                {toggle && <ViewProduct product={toggle} close={() => setToggle(null)} />}

            </td>
            <td>
                <Link href={`/admin/product/images/${product._id}`}>
                    <button className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
                        Images
                    </button>
                </Link>
            </td>
        </>

    )
}


const ViewProduct = ({ product, close }) => {
    return (
        <div className="w-full fixed bottom-0 right-0 z-20 p-6 bg-white shadow-xl rounded-t-2xl max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
                onClick={close}
            >
                Close
            </button>

            <div className="flex flex-col md:flex-row gap-6">
                {/* Thumbnail */}
                <div className="w-full md:w-1/3">
                    <img
                        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/product/${product.thumbnail}`}
                        alt={product.name}
                        className="rounded-lg w-full object-cover h-52"
                    />

                    {/* {product.images?.length > 0 && (
                        <div className="mt-4 flex gap-2 flex-wrap">
                            {product.images.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/product/${img}`}
                                    alt={`product-${idx}`}
                                    className="w-16 h-16 object-cover rounded border"
                                />
                            ))}
                        </div>
                    )} */}
                </div>

                {/* Product Info */}
                <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                    <p className="text-sm text-gray-500 mb-3">{product.shortDescription}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 text-yellow-500 text-sm">

                        <span className="text-sm font-medium text-gray-700">4.2</span>
                    </div>


                    <div
                        className="mt-4 space-y-2 text-sm text-gray-700"
                        dangerouslySetInnerHTML={{ __html: product.longDescription }}
                    />


                </div>


                {/* Pricing */}
                <div className="mt-4 flex items-center gap-3">
                    <p className="text-2xl font-bold text-green-600">₹{product.finalPrice}</p>
                    <p className="line-through text-gray-400">₹{product.originalPrice}</p>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                        {product.discountPercentage}% OFF
                    </span>
                </div>


            </div>
        </div>
    );
}; 
