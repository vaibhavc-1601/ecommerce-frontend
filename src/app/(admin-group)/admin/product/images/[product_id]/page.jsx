'use client';

import { AxiosInstance, generateSlug, notify } from "@/library/helper";
import axios from "axios";
import { getproducts } from "@/library/api-call";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { FaUpload } from "react-icons/fa";

export default function page({ params }) {
    console.log(params.product_id)
    const router = useRouter();
    const [product, setProduct] = useState({})
    async function getProductByid() {
        const productJSON = await getproducts(params.product_id);
        console.log(productJSON.data.images)
        setProduct(productJSON.data)
    }
    useEffect(
        () => {
            getProductByid()
        }, [params.product_id]
    )


    function submitHandler(e) {
        e.preventDefault();

        const formData = new FormData();
        const files = e.target.images.files;
        for (let images of files) {
            formData.append("images", images);
        }

        AxiosInstance.patch(`product/images/${product._id}`, formData)
            .then((response) => {
                notify(response.data.message, response.data.success)
                if (response.data.success) {
                    router.push("/admin/product")
                }
            }
            ).catch(
                (error) => {
                    console.log(error)
                    notify("Something ... ", 0)
                }
            )
    }

    return (
        <div className="p-6 bg-white shadow-lg rounded-xl overflow-x-auto">
            {/* Heading + Button */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-blue-800"> Product Edit</h2>

            </div>

            {/* Category Form */}
            <div className="max-w-md mx-auto mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
                <form onSubmit={submitHandler} className="space-y-5">

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Upload Image
                        </label>
                        <label className="flex items-center justify-center gap-2 w-full cursor-pointer px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white hover:bg-gray-50">
                            <FaUpload className="text-gray-600" />
                            Upload Image
                            <input multiple type="file" name="images" className="hidden" />
                        </label>
                        {
                            product?.images && product.images.map((img, index) => (
                                <img
                                    key={index}
                                    width={200}
                                    height={100}
                                    className="mt-10"
                                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/product/${img}`}
                                    alt={`product-${index}`}
                                />
                            ))
                        }


                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all text-sm font-medium"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
