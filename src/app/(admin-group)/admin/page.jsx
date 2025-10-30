import React from 'react';

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            {/* <aside className="w-64 bg-white shadow-md p-6 hidden md:block">
                <h2 className="text-2xl font-bold mb-8">Admin Dashboard</h2>
                <nav>
                    <ul className="space-y-4">
                        <li>
                            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Overview</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Users</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Settings</a>
                        </li>
                    </ul>
                </nav>
            </aside> */}
            {/* Main Content */}
            <main className="w-full flex-1 p-8">
                <h1 className="text-3xl font-semibold mb-6">Welcome, Admin!</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-lg font-medium mb-2">Total Users</h3>
                        <p className="text-2xl font-bold">1,234</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-lg font-medium mb-2">Active Sessions</h3>
                        <p className="text-2xl font-bold">87</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-lg font-medium mb-2">Pending Tasks</h3>
                        <p className="text-2xl font-bold">12</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                    <ul className="divide-y divide-gray-200">
                        <li className="py-2">User JohnDoe created an account.</li>
                        <li className="py-2">Settings updated by Admin.</li>
                        <li className="py-2">New user JaneSmith approved.</li>
                    </ul>
                </div>
            </main>
        </div>
    );
}
