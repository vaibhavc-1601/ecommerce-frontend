import React from "react";
import Link from "next/link";
import { FaEdit, FaTrash } from "react-icons/fa";
import { getColors } from "@/library/api-call";
import DeleteBtn from "@/components/admin/DeleteBtn";
 import StatusBtn from "@/components/admin/StatusBtn";
export default async function Colortable() {
  const ColorJSON = await getColors();
  const Colors =  ColorJSON?.data;

  return (
    <div className="p-6 bg-white shadow-lg rounded-xl overflow-x-auto">
      {/* Heading + Add Button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-blue-800">Colors</h2>
        <Link href="/admin/color/add">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all text-sm font-medium">
            + Add Color
          </button>
        </Link>
      </div>

      <table className="min-w-full border border-gray-200">
        <thead className="bg-blue-100 text-blue-800 font-semibold text-sm uppercase">
          <tr>
            <th className="py-3 px-4 text-left">#</th>
            <th className="py-3 px-4 text-left">Color</th>
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Slug</th>
            <th className="py-3 px-4 text-left">Created At</th>
            <th className="py-3 px-4 text-left">status</th>
            <th className="py-3 px-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Colors &&
            Colors.map((color, index) => (
              <tr
                key={color._id}
                className="border-b border-gray-100 hover:bg-blue-50 transition-all"
              >
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">
                  <div className="w-6 h-6 rounded-full border" style={{backgroundColor: color.hexcode}}>

                    </div> 
                </td>
                <td className="py-3 px-4">{color.name}</td>
                <td className="py-3 px-4">{color.slug}</td>
                <td className="py-3 px-4">{color.createdAt}</td>
                <td className="py-3 px-4">
                  <StatusBtn path={`color/status/${color._id}`} status={color.status} />
                </td>
                <td className="py-3 px-4 text-center space-x-3">
                  <button className="text-blue-600 hover:text-blue-800">
                  <Link href={`/admin/color/edit/${color._id}`}> 
                   Edit <FaEdit />
                  </Link>
                  </button>
                 <DeleteBtn path={`color/delete/${color._id}`} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
