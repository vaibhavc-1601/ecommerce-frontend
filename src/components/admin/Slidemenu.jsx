"use client"

import React from 'react';
import Link from 'next/link';
import {
  FaHome,
  FaBoxOpen,
  FaUsers,
  FaChartLine,
  FaTags,
  FaShippingFast,
  FaCog,
  FaClipboardList,
  FaBell,
  FaComments
} from 'react-icons/fa';
import { AxiosInstance } from '@/library/helper';

export default function Slidemenu() {
  const menuItems = [
    { href: '/admin', icon: <FaHome size={18} />, label: 'Dashboard' },
    { href: '/admin/category', icon: <FaBoxOpen size={18} />, label: 'category' },
    { href: '/admin/color', icon: <FaClipboardList size={18} />, label: 'color' },
    { href: '/admin/brand', icon: <FaUsers size={18} />, label: 'brand' },
    { href: '/admin/product', icon: <FaTags size={18} />, label: 'product' },
    { href: '/admin/analytics', icon: <FaChartLine size={18} />, label: 'Analytics' },
    { href: '/admin/shipping', icon: <FaShippingFast size={18} />, label: 'Shipping' },
    { href: '/admin/reviews', icon: <FaComments size={18} />, label: 'Reviews' },
    { href: '/admin/notifications', icon: <FaBell size={18} />, label: 'Notifications' },
    
  ];
     function logoutHandler(){
    AxiosInstance.get("admin/logout",{withCredentials:true}).then((response)=>{
        console.log(response.data.message)

      if(response.data.success){
        window.location.href="/admin/login"
      }
    }).catch((error)=>{
      console.log(error)
    })
  }

  return (
    <aside className="bg-blue-100 w-64 p-6 h-full shadow-md rounded-tr-xl">
      <nav className="flex flex-col gap-4">
        {menuItems.map((item, index) => (
          <Link href={item.href}>
            <span className="flex items-center gap-3 p-3 bg-white text-blue-700 rounded-lg shadow-sm hover:shadow-md hover:bg-blue-200 hover:text-blue-900 transition-all duration-200 font-medium">
              {item.icon}
              {item.label}
            </span>
          </Link>

        ))}
       
          <div onClick={logoutHandler}>
              
            <span  className="flex items-center cursor-pointer gap-3 p-3 bg-white text-blue-700 rounded-lg shadow-sm hover:shadow-md hover:bg-blue-200 hover:text-blue-900 transition-all duration-200 font-medium">
               <FaCog size={18} />
             LogOut
            </span>
       
          </div>
      
      </nav>
    </aside>
  );
}
