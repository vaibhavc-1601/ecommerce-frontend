'use client'

import { AxiosInstance, notify ,getCookie } from '@/library/helper'
import React from 'react'
 import { useRouter } from 'next/navigation'

export default function StatusBtn({path,status}) {
      const token = getCookie('admin_token')
     const router = useRouter();
    function statusHandler(){
        
  AxiosInstance.patch(path ,{},{
            headers:{Authorization: token}
        }) .then((response) => {
               console.log(response)
                notify(response.data.message, response.data.success)
                if (response.data.success) {
                  router.refresh();
                }
            }
            ).catch(
                (error) => {
                  console.log(error)
                   notify("something went wrong....", 0)
                }
            )
    }
  return (
    <> 
    {
        status ? 
        <button   onClick={statusHandler}
                    className={`px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 `} >
                    Active
                  </button>:
                  <button   onClick={statusHandler}
                    className={`px-2 py-1 rounded-full text-xs font-medium  bg-red-100 text-red-700`} >
                Inactive
                  </button>
    }
    </>
  )
}
