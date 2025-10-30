'use client';
import { AxiosInstance, generateSlug, getCookie, notify } from "@/library/helper";
import axios from "axios";
import { useRef } from "react";



export default function colorAdd() {
    const token = getCookie('admin_token')
      console.log(token) 
    const nameRef = useRef();
    const slugRef = useRef();

    const slugCreate = () => {
        const slug = generateSlug(nameRef.current.value);
        slugRef.current.value = slug
    }

    function submitHandler(e) {
        e.preventDefault();
   const data={
            name: nameRef.current.value,
            slug: slugRef.current.value,
            hexcode: e.target.hexcode.value
   }
     if (data.name === "" || data.slug === "" || data.hexcode === "") {  
            notify("All fields are required", 0);
            return;
        }
        AxiosInstance.post("color/create", data,{
            headers:{
                Authorization: token
            }
        })
            .then((response) => {
                notify(response.data.message, response.data.success)
                if (response.data.success) {
                    nameRef.current.value = ""
                    slugRef.current.value = ""
                    e.target.hexcode.value = ""
                }


            }
            ).catch(
                (error) => {
                    console.log(error)
                }
            )
    }

    return (
        <div className="p-6 bg-white shadow-lg rounded-xl overflow-x-auto">
            {/* Heading + Button */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-blue-800">Add New Colors</h2>

            </div>

            {/* Color Form */}
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
                            placeholder="Color Name"
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
                          color Hexcode
                        </label>
                        <input
                            type="color"
                            name="hexcode"
                            className="block w-full border border-gray-300 rounded-md px-3 py-2 bg-white"
                            placeholder="enter hexcode"

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
