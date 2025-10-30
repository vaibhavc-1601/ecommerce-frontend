'use client';
import { getBrands, getcategories } from "@/library/api-call";
import { AxiosInstance, generateSlug, notify ,getCookie } from "@/library/helper";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";


export default function BrandEdit({ params }) {
    const token = getCookie('admin_token')
    const router = useRouter();
    const [brand, setbrand] = useState({})
    async function getbrandByid() {
        const brandJSON = await getBrands(params.brand_id);
        setbrand(brandJSON.data)
    }
    useEffect(
        () => {
            getbrandByid()
        }, [params.brand_id]
    )

    const nameRef = useRef();
    const slugRef = useRef();

    const slugCreate = () => {
        const slug = generateSlug(nameRef.current.value);
        slugRef.current.value = slug
    }

    function submitHandler(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", nameRef.current.value);
        formData.append("slug", slugRef.current.value);
        formData.append("image", e.target.brand_image.files[0]);
        AxiosInstance.put(`brand/update/${brand._id}`, formData,{
            headers:{
                Authorization: token
            }
        })
            .then((response) => {
                notify(response.data.message, response.data.success)
                if (response.data.success) {
                    router.push("/admin/brand")
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
                <h2 className="text-2xl font-semibold text-blue-800"> Brand Edit</h2>

            </div>

            {/* brand Form */}
            <div className="max-w-md mx-auto mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
                <form onSubmit={submitHandler} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            ref={nameRef}
                            onChange={slugCreate}
                            defaultValue={brand.name}
                            className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
                            placeholder="brand Name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Slug
                        </label>
                        <input
                            type="text"
                            name="slug"
                            readOnly
                            ref={slugRef}
                            className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
                            defaultValue={brand.slug}
                            placeholder="brand-slug"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Upload logo
                        </label>
                        <input
                            type="file"
                            name="brand_image"
                            className="block w-full border border-gray-300 rounded-md px-3 py-2 bg-white"
                            accept="image/*"

                        />
                        <img width={200} height={100} className="mt-10" src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/brand/${brand.image}`}
                            alt="" />
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
