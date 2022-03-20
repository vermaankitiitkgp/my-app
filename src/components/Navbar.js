import React from "react"
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav class="flex items-center justify-between flex-wrap bg-blue-600 p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <span class="font-semibold text-xl tracking-tight">Adpushup</span>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                    <Link to="/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Education
                    </Link>
                    <Link to="/exp" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Experience
                    </Link>
                    <Link to="/skills" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        Skills
                    </Link>
                </div>
                <div>
                    <Link to="/summary" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                        Summary</Link>
                </div>
            </div>
        </nav>
    )
}