'use client'
import { FaEdit, FaTrash } from "react-icons/fa";
import { AxiosInstance, notify,getCookie } from '@/library/helper'
import React from 'react'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';




export default function DeleteBtn({ path }) {
  const token = getCookie('admin_token')
  const router = useRouter();
  function deleteHandler() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });

        AxiosInstance.delete(path ,{
            headers:{Authorization: token}
        }).then((response) => {
          notify(response.data.message, response.data.success)
          if (response.data.success) {
            router.refresh();
          }
        }
        ).catch(
          (error) => {
            notify("something went wrong....", 0)
          }
        )
      }
    });

  }
  return (
    <button onClick={deleteHandler} className="text-red-600 hover:text-red-800">
      Delete  <FaTrash />
    </button>
  )
}
