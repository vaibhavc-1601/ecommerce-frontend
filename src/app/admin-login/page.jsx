 'use client'

import { AxiosInstance } from '@/library/helper';
import React from 'react';
import { useRouter } from 'next/navigation';
import { notify } from '@/library/helper';


const AdminLogin = () => {
    const router = useRouter();
    function loginHandler(e) {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        AxiosInstance.post("admin/login", data ,{withCredentials :true}).then((response) => {
            notify(response.data.message, response.data.success)
            console.log(response.data)
            if (response.data.success) {
               router.push("/admin")  
            }
        }).catch(
            (error) => {
                notify("something went wrong....", 0)
            })
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 px-4">
            <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8 border border-gray-100">

                {/* Header */}
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-extrabold text-gray-900">Admin Login</h2>
                    <p className="text-gray-500 text-sm mt-2">
                        Sign in to manage your dashboard
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-6" onSubmit={loginHandler}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="remember"
                                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                            />
                            <span className="text-gray-600">Remember Me</span>
                        </label>
                        <a
                            href="/admin/forgot-password"
                            className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                            Forgot Password?
                        </a>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition duration-200 shadow-md"
                    >
                        Sign In
                    </button>
                </form>

                {/* Footer */}
                <p className="text-center text-sm text-gray-500 mt-6">
                    © {new Date().getFullYear()} Admin Panel
                </p>
            </div>
        </div>
    );
}

export default AdminLogin;
