// src/components/AdminHeader.jsx
import React from 'react';

export default function Header() {
  return (
    <header className="bg-white w-full shadow-md p-4 flex items-center justify-between h-[25vh]">
      <h1 className="text-3xl font-bold text-blue-600">Admin Dashboard</h1>
      <div className="flex gap-4 items-center">
        <span className="text-gray-700">Hello, Admin</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="Admin Avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
}
