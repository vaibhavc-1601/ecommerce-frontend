"use client";

import { useEffect, useRef } from "react";
import { getcategories, getColors, getBrands } from "@/library/api-call";
import React from "react";
import Select from 'react-select'
import { AxiosInstance, generateSlug, notify,getCookie } from "@/library/helper";
// import TextEditor from "@/components/admin/TextEditor";
  import dynamic from "next/dynamic";
const TextEditor = dynamic(() => import("@/components/admin/TextEditor"), { ssr: false });




export default function ProductForm() {

    const [category, setcategory] = React.useState([]);
    const [brand, setbrand] = React.useState([]);
    const [color, setcolor] = React.useState([]);
    const[selectedColor,setselectedColor] = React.useState([])
    const[longDescription,setlongDescription] = React.useState("")
    const token = getCookie('admin_token')

    const nameRef = useRef();
    const slugRef = useRef();
    const originalPriceRef = useRef();
    const discountPercentageRef = useRef();
    const finalPriceRef = useRef();

    async function getdata() {
        const Category = await getcategories();
        setcategory(Category.data);
        const Brand = await getBrands();
        setbrand(Brand.data);
        const Color = await getColors();
        setcolor(Color.data);
    }

    useEffect(() => {
        getdata();
    },
        []);

    const slugCreate = () => {
        const slug = generateSlug(nameRef.current.value);
        slugRef.current.value = slug
    }
    const finalPriceCalculate = () => {
        let discountPercentage = discountPercentageRef.current.value;
        let originalPrice = originalPriceRef.current.value;
        let finalPrice = originalPrice - (originalPrice * discountPercentage) / 100;
        finalPriceRef.current.value = finalPrice;
    }

    function submitHandler(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", nameRef.current.value);
        formData.append("slug", slugRef.current.value);
        formData.append("thumbnail", e.target.thumbnail.files[0]);
        formData.append("discountPercentage", discountPercentageRef.current.value);
        formData.append("originalPrice", originalPriceRef.current.value);
        formData.append("finalPrice", finalPriceRef.current.value);
        formData.append("shortDescription", e.target.shortDescription.value);
        formData.append("longDescription", longDescription);
        formData.append("categoryId", e.target.categoryId.value);
        formData.append("brandId", e.target.brandId.value);
        formData.append("colors", JSON.stringify(selectedColor));


        AxiosInstance.post("product/create", formData,{
            headers:{
                Authorization: token
            }
        })
            .then((response) => {
                notify(response.data.message, response.data.success)
                if (response.data.success) {
                    nameRef.current.value = ""
                    slugRef.current.value = ""
                }


            }
            ).catch(
                (error) => {
                    console.log(error)
                }
            )
    }

    return (
        <div className="bg-white shadow-xl rounded-2xl p-8 max-w-6xl mx-auto mt-10">
            <h2 className="text-2xl font-semibold text-blue-700 mb-6">
                Add / Edit Product
            </h2>

            <form
                onSubmit={submitHandler}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                {/* Name + Slug + Short Description */}
                <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            ref={nameRef}
                            onChange={slugCreate}
                            placeholder="Enter product name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Slug
                        </label>
                        <input
                            type="text"
                            name="slug"
                            ref={slugRef}
                            readOnly
                            placeholder="Auto-generated slug"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Short Description
                        </label>
                        <textarea
                            name="shortDescription"
                            rows="1"
                            placeholder="Short description"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                        />
                    </div>
                </div>

                {/* Long Description - Full Row */}
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Long Description
                    </label>
                    {/* <textarea
                        name="longDescription"
                        rows="4"
                        placeholder="Enter detailed description"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    /> */}
                    <TextEditor placeholder="Enter detailed description" value={longDescription} 
                              onChangeHandler={(data) => setlongDescription(data)}
                    />
                </div>

                {/* Original Price + Discount % + Final Price */}
                <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Original Price
                        </label>
                        <input
                            type="number"
                            name="originalPrice"
                            ref={originalPriceRef}
                            onChange={finalPriceCalculate}
                            defaultValue={200}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Discount Percentage
                        </label>
                        <input
                            type="number"
                            name="discountPercentage"
                            ref={discountPercentageRef}
                            onChange={finalPriceCalculate}
                            defaultValue={5}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Final Price
                        </label>
                        <input
                            type="number"
                            name="finalPrice"
                            ref={finalPriceRef}
                            readOnly
                            placeholder="Auto-calculated"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Category + Brand + Colors */}
                <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Category
                        </label>
                        <Select name="categoryId"
                            placeholder="Select Category"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            options={category.map((cat) => ({
                                value: cat._id,
                                label: cat.name
                            }))} />
                       
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Brand
                        </label>
                         <Select name="brandId"
                            placeholder="Select brand"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            options={brand.map((brand) => ({
                                value: brand._id,
                                label: brand.name
                            }))} />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Colors
                        </label>
                        <Select name="colors"
                               onChange={(data) =>{
                                 const colordata = data.map((item) => item.value);
                                    setselectedColor(colordata);
                               }}
                            placeholder="Select colors"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                          closeMenuOnSelect={false}  isMulti options={color.map((color) => ({
                                value: color._id,
                                label: color.name
                            }))} />
                       
                    </div>
                </div>

                {/* Thumbnail */}
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Thumbnail
                    </label>
                    <input
                        type="file"
                        name="thumbnail"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                {/* Submit */}
                <div className="md:col-span-2 flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition-all"
                    >
                        Save Product
                    </button>
                </div>
            </form>
        </div>

    );
}

