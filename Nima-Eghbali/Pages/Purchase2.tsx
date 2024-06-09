import React, { type FC } from "react"

const Purchase2: FC = () => {
    return (
        <>
            <main className="w-[375px] h-[868px] m-auto px-[24px] mt-3">
                <p className="text-gray-700 text-[14px] font-medium">About Course</p>
                <p className="text-sm text-gray-400 mt-1 flex">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s

                </p>
                <p className="text-gray-700 text-[14px] font-medium mt-5">Tutor</p>
                <div className="flex mt-3">

                    <div className="rounded-full items-center w-[70px] h-[70px] bg-slate-100">
                        <img src="/p3.jpg" alt="" className=" rounded-full bg-cover" />
                    </div>

                    <div className="ml-4">
                        <p className="text-gray-700 text-[14px] font-medium">Jenny M.</p>
                        <p className="text-gray-400 text-[12px]">Designer Tutor</p>
                    </div>

                </div>
                <p className="text-gray-700 text-[14px] font-medium mt-5">Info</p>

                <div className="p-5 flex">
                    <div className="w-[50%]">
                        <p className="text-gray-400 text-[16px]">Students</p>
                        <p className="text-gray-700 text-[16px] font-medium">12,126</p>
                    </div>
                    <div className="">
                        <p className="text-gray-400 text-[16px]">Language</p>
                        <p className="text-gray-700 text-[16px] font-medium">English</p>
                    </div>
                    
                </div>
                <div className="p-5 pt-0 flex">
                    <div className="w-[50%]">
                        <p className="text-gray-400 text-[16px]">Last update</p>
                        <p className="text-gray-700 text-[16px] font-medium">Apr 7, 2023</p>
                    </div>
                    <div className="">
                        <p className="text-gray-400 text-[16px]">Subtitle</p>
                        <p className="text-gray-700 text-[16px] font-medium">English</p>
                    </div>
                    
                </div>
                <div className="p-5 pt-0 flex">
                    <div className="w-[50%]">
                        <p className="text-gray-400 text-[16px]">Level</p>
                        <p className="text-gray-700 text-[16px] font-medium">Professional</p>
                    </div>
                    <div className="">
                        <p className="text-gray-400 text-[16px]">Access</p>
                        <p className="text-gray-700 text-[16px] font-medium">Desktop </p>
                    </div>
                    
                </div>
            </main>
        </>
    )
}
export default Purchase2