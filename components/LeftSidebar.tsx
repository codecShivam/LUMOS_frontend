import { useState } from "react";

export const LeftSidebar = () => {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [recentFiles, setRecentFiles] = useState<string[]>([]);

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const fileList = Array.from(files);
            setSelectedFiles(fileList);
            setRecentFiles(fileList.map(file => file.name));
        }
    };

    const handleRemoveFile = (file: File) => {
        const updatedFiles = selectedFiles.filter(f => f !== file);
        setSelectedFiles(updatedFiles);
        setRecentFiles(updatedFiles.map(f => f.name));
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const files = event.dataTransfer.files;
        if (files) {
            const fileList = Array.from(files);
            setSelectedFiles(fileList);
            setRecentFiles(fileList.map(file => file.name));
        }
    };

    const handleFileOpen = (fileUrl: string) => {
        // Open the file using window.open
        window.open(fileUrl);
    };

    return (
        <div className="bg-gray-200 sm:w-1/4 p-4 h-screen sm:fixed">
            <h2 className="text-lg font-bold mb-4 text-gray-700">Tools</h2>
            <div className="mb-4">
                <label
                    htmlFor="file-input"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md w-full cursor-pointer"
                >
                    Upload File
                </label>
                <input
                    id="file-input"
                    type="file"
                    accept=".txt,.pdf,.doc,.docx"
                    className="hidden"
                    onChange={handleFileSelect}
                />
            </div>
            <div
                className="border-2 border-dashed border-gray-400 rounded-md p-8 text-center"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                {selectedFiles.length === 0 ? (
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 mx-auto mb-4 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 00-1 1v4H5a1 1 0 100 2h4v4a1 1 0 102 0v-4h4a1 1 0 100-2h-4V4a1 1 0 00-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <p className="text-gray-500">Drag and drop files here</p>
                        <p className="text-gray-500">or</p>
                        <label
                            htmlFor="file-input"
                            className="text-blue-500 hover:underline cursor-pointer"
                        >
                            Select Files
                        </label>
                    </div>
                ) : (
                    <ul>
                        {selectedFiles.map((file, index) => (
                            <li key={index} className="mb-2">
                                <a
                                    href="#"
                                    className="text-blue-500 hover:underline"
                                    onClick={() => handleFileOpen(URL.createObjectURL(file))}
                                >
                                    {file.name}
                                </a>
                                <button
                                    className="ml-2 text-red-500 hover:underline"
                                    onClick={() => handleRemoveFile(file)}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <h2 className="text-lg font-bold mb-4 text-gray-700">Recent Files</h2>
            <ul>
                {recentFiles.map((file, index) => (
                    <li key={index} className="mb-2">
                        <a href="#" onClick={() => handleFileOpen(URL.createObjectURL(selectedFiles[index]))} className="text-blue-500 hover:underline">
                            {file}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
