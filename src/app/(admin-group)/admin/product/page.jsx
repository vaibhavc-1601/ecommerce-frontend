import React from "react";
import Link from "next/link";
import { FaEdit, FaTrash } from "react-icons/fa";
import { getcategories, getproducts } from "@/library/api-call";
import DeleteBtn from "@/components/admin/DeleteBtn";
 import StatusBtn from "@/components/admin/StatusBtn";
import ProductBtn from "@/components/admin/ProductBtn";
export default async function ProductTable() {
  const productJSON = await getproducts();
  const products =  productJSON?.data;
    console.log(products, 'PRODUCTS DATA VIEW')
  return (
    <div className="p-6 bg-white shadow-lg rounded-xl overflow-x-auto">
      {/* Heading + Add Button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-blue-800">Sub product</h2>
        <Link href="/admin/product/add">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all text-sm font-medium">
            + Add product
          </button>
        </Link>
      </div>

      <table className="min-w-full border border-gray-200">
        <thead className="bg-blue-100 text-blue-800 font-semibold text-sm uppercase">
          <tr>
            {/* <th className="py-3 px-4 text-left">#</th> */}
            <th className="py-3 px-4 text-left">Image</th>
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Slug</th>
            <th className="py-3 px-4 text-left">Created At</th>
            <th className="py-3 px-4 text-left">status</th>
            <th className="py-3 px-4 text-center"></th>
            <th className="py-3 px-4 text-center">Actions</th>
            <th className="py-3 px-4 text-center"></th>
            <th className="py-3 px-4 text-center"></th>
            <th className="py-3 px-4 text-center">prices</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product, index) => (
              <tr
                key={product._id}
                className="border-b border-gray-100 hover:bg-blue-50 transition-all"
              >
                {/* <td className="py-3 px-4">{index + 1}</td> */}
                <td className="py-3 px-4">
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/product/${product.thumbnail}`}
                    alt={product.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                </td>
                <td className="py-3 px-4">{product.name}</td>
                <td className="py-3 px-4">{product.slug}</td>
                <td className="py-3 px-4">{product.createdAt}</td>
                <ProductBtn product={product}  />
                <td className="py-3 px-4">{product.originalPrice} |{product.finalPrice} | {product.discountPercentage}%
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
