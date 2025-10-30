'use client';
import { getColors } from "@/library/api-call";
import { AxiosInstance, generateSlug, notify,getCookie } from "@/library/helper";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";


export default function ColorEdit({ params }) {
     const token = getCookie('admin_token')
    const router = useRouter();
    const [color, setColor] = useState({})
    async function getColorByid() {
        const colorJSON = await getColors(params.color_id);
        setColor(colorJSON.data)
    }
    useEffect(
        () => {
            getColorByid()
        }, [params.color_id]
    )

    const nameRef = useRef();
    const slugRef = useRef();

    const slugCreate = () => {
        const slug = generateSlug(nameRef.current.value);
        slugRef.current.value = slug
    }

    function submitHandler(e) {
        e.preventDefault();
   const data ={
            name: nameRef.current.value,
            slug: slugRef.current.value,
            hexcode: e.target.hexcode.value
          
   }
        if(data.name === "" || data.slug === "" || data.hexcode === ""){
            notify("All fields are required",0)
            return;
        }
        
        AxiosInstance.put(`color/update/${color._id}`, data,{
            headers:{Authorization: token}
        })
            .then((response) => {
                notify(response.data.message, response.data.success)
                if (response.data.success) {
                    router.push("/admin/color")
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
                <h2 className="text-2xl font-semibold text-blue-800"> Color Edit</h2>

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
                            defaultValue={color.name}
                            className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
                            placeholder="color Name"
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
                            defaultValue={color.slug}
                            placeholder="auto-generated slug"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                           Hexcode
                        </label>
                        <input
                            type="color"
                            name="hexcode"
                            className="block w-full border border-gray-300 rounded-md px-3 py-2 bg-white"
                            placeholder="enter hexcode"
                            defaultValue={color.hexcode}

                        />
                        <div style={{backgroundColor: color.hexcode}} className="w-10 h-10 mt-2 border rounded-full">

                        </div>
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
