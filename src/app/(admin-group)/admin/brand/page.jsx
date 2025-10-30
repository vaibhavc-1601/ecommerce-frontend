import React from "react";
import Link from "next/link";
import { FaEdit, FaTrash } from "react-icons/fa";
import { getBrands, getcategories } from "@/library/api-call";
import DeleteBtn from "@/components/admin/DeleteBtn";
 import StatusBtn from "@/components/admin/StatusBtn";
export default async function BrandTable() {
  const brandJSON = await getBrands();
  const brands =  brandJSON?.data;

  return (
    <div className="p-6 bg-white shadow-lg rounded-xl overflow-x-auto">
      {/* Heading + Add Button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-blue-800">Brands</h2>
        <Link href="/admin/brand/add">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all text-sm font-medium">
            + Add Brands
          </button>
        </Link>
      </div>

      <table className="min-w-full border border-gray-200">
        <thead className="bg-blue-100 text-blue-800 font-semibold text-sm uppercase">
          <tr>
            <th className="py-3 px-4 text-left">#</th>
            <th className="py-3 px-4 text-left">logo</th>
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Parent Category</th>
            <th className="py-3 px-4 text-left">Created At</th>
            <th className="py-3 px-4 text-left">status</th>
            <th className="py-3 px-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {brands &&
            brands.map((brand, index) => (
              <tr
                key={brand._id}
                className="border-b border-gray-100 hover:bg-blue-50 transition-all"
              >
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/brand/${brand.image}`}
                    alt={brand.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                </td>
                <td className="py-3 px-4">{brand.name}</td>
                <td className="py-3 px-4">{brand.slug}</td>
                <td className="py-3 px-4">{brand.createdAt}</td>
                <td className="py-3 px-4">
                  <StatusBtn path={`brand/status/${brand._id}`} status={brand.status} />
                </td>
                <td className="py-3 px-4 text-center space-x-3">
                  <button className="text-blue-600 hover:text-blue-800">
                  <Link href={`/admin/brand/edit/${brand._id}`}> 
                   Edit <FaEdit />
                  </Link>
                  </button>
                 <DeleteBtn path={`brand/delete/${brand._id}`} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
