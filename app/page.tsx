import Link from 'next/link';
import { SubjectList } from '@/components/SubjectList';
import { LeftSidebar } from '@/components/LeftSidebar';

export default function Dashboard() {
  return (
    <div className="flex flex-col-reverse sm:flex-row  ">
      {/* Left Sidebar */}
      <LeftSidebar />

      {/* Main Content */}
      <div className="flex flex-col w-full sm:w-3/4 sm:ml-[25%]">
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

        <div className="flex flex-col sm:flex-row flex-1">
          {/* Subject List */}
          <SubjectList />
        </div>
      </div>
    </div>
  );
}
