'use client';
import { AxiosInstance, generateSlug, getCookie, notify } from "@/library/helper";
import axios from "axios";
import { useRef } from "react";



export default function CategoryAdd() {
    const token = getCookie("admin_token")
    
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
        formData.append("image", e.target.category_image.files[0]);
        AxiosInstance.post("category/create", formData,{
             headers:{
                    Authorization:token 
                }
        } )
            .then((response) => {
                notify(response.data.message, response.data.success)
                if (response.data.success) {
                    nameRef.current.value = ""
                    slugRef.current.value = ""
                }


            }
            ).catch(
                (error) => {
                   notify("something went wrong....", 0)
                }
            )
    }

    return (
        <div className="p-6 bg-white shadow-lg rounded-xl overflow-x-auto">
            {/* Heading + Button */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-blue-800">Add New Categories</h2>

            </div>

            {/* Category Form */}
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
                            className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
                            placeholder="Category Name"
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
                            placeholder="category-slug"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                           Upload Image
                        </label>
                        <input
                            type="file"
                            name="category_image"
                            className="block w-full border border-gray-300 rounded-md px-3 py-2 bg-white"
                            accept="image/*"

                        />
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
