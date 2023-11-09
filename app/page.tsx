'use client'
import Link from 'next/link';
import Image from 'next/image';
import dotImage from '@/public/images/dot.png'

export default function Dashboard() {
  return (
    <div className="flex flex-row h-screen">
      {/* Left Sidebar */}
      <div className="bg-gray-200 w-1/4 p-4">
        <h2 className="text-lg font-bold mb-4 text-gray-700">Tools</h2>
        <ul className="mb-4">
          <li className="mb-2">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md w-full">
              Upload File
            </button>
          </li>
          <li className="mb-2">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md w-full">
              Create New Subject
            </button>
          </li>
          <li className="mb-2">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md w-full">
              Settings
            </button>
          </li>
        </ul>
        <h2 className="text-lg font-bold mb-4 text-gray-700">Recent Files</h2>
        <ul>
          <li className="mb-2">
            <a href="#" className="text-blue-500 hover:underline">
              File 1
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-500 hover:underline">
              File 2
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-500 hover:underline">
              File 3
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-3/4">
        <nav className="bg-blue-500 p-4">
          <div className="flex justify-between">
            <div className="flex items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              <span className="font-bold text-xl">Lumos</span>
            </div>
            <div className="flex items-center">
              <Link href="/auth/SignIn">
                <p className="text-white mr-4">Sign In</p>
              </Link>
              <Link href="/auth/SignUp">
                <p className="text-white bg-blue-700 px-4 py-2 rounded-md">
                  Sign Up
                </p>
              </Link>
            </div>
          </div>
        </nav>

        <div className="flex flex-row flex-1">
          {/* Subject List */}
          <div className="bg-gray-100 w-full p-4">
            <h2 className="text-lg font-bold mb-4 text-gray-700">Subjects</h2>
            <ul>
              <li className="mb-2 relative">
                <Image src={dotImage} alt="dot" width={10} height={10} className="absolute left-0 top-1/2 transform -translate-y-1/2" />
                <a href="#" className="text-gray-500 font-medium text-xl hover:underline pl-4">
                  SENSOR & INSTRUMENTATION (BOE-305)
                </a>
              </li>
              <li className="mb-2 relative">
                <Image src={dotImage} alt="dot" width={10} height={10} className="absolute left-0 top-1/2 transform -translate-y-1/2" />
                <a href="#" className="text-gray-500 font-medium text-xl hover:underline pl-4">
                  UNIVERSAL HUMAN VALUES (BVE-301)
                </a>
              </li>
              <li className="mb-2 relative">
                <Image src={dotImage} alt="dot" width={10} height={10} className="absolute left-0 top-1/2 transform -translate-y-1/2" />
                <a href="#" className="text-gray-500 font-medium text-xl hover:underline pl-4">
                  DISCRETE STRUCTURES & THEORY OF LOGIC (BCS-303)
                </a>
              </li>
              <li className="mb-2 relative">
                <Image src={dotImage} alt="dot" width={10} height={10} className="absolute left-0 top-1/2 transform -translate-y-1/2" />
                <a href="#" className="text-gray-500 font-medium text-xl hover:underline pl-4">
                  DATA STRUCTURE (BCS-301)
                </a>
              </li>
              <li className="mb-2 relative">
                <Image src={dotImage} alt="dot" width={10} height={10} className="absolute left-0 top-1/2 transform -translate-y-1/2" />
                <a href="#" className="text-gray-500 font-medium text-xl hover:underline pl-4">
                  COMPUTER ORGANIZATION AND ARCHITECTURE (BCS-302)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
