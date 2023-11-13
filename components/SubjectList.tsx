import Image from "next/image"
import { subjects } from "@/data/subjects"

export const SubjectList = () => (
    <div className="flex flex-col sm:flex-row flex-1">

        <div className="bg-gray-100 w-full  p-4">
            <h2 className="text-lg font-bold mb-4 text-gray-700">Subjects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {subjects.map((subject) => (
                    <div
                        key={subject.title}
                        className="bg-white rounded-md shadow-md p-4 flex flex-col justify-between"
                    >
                        <div>
                            <Image
                                src={subject.image}
                                alt={subject.title}
                                width={300}
                                height={200}
                                className="mb-4"
                            />
                            <h3 className="text-gray-500 font-medium text-xl mb-2">
                                {subject.title}
                            </h3>
                            <p className="text-gray-500 mb-4">{subject.description}</p>
                        </div>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-md w-full">
                            View Subject
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </div>
)