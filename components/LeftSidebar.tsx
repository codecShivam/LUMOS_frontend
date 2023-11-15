export const LeftSidebar = () => (
    <div className=" bg-gray-200 sm:w-1/4 p-4 h-screen sm:fixed ">
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
);
