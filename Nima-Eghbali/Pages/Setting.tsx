import React, { type FC } from "react"
import { useNavigate } from "react-router-dom"


const Setting: FC = () => {
    const navigate = useNavigate()
    return (
        <>
            <main className="w-[375px] h-[868px] m-auto px-[24px] overflow-auto">
                <div className="h-[100px] flex items-center">
                    <button className="rounded-full fixed bg-white" onClick={() => navigate(-1)}>
                        <img src="/back.svg" alt="" className="w-[32px]" />
                    </button>
                    <div className=" flex justify-around w-[270px]">
                        <p className="text-gray-700 font-semibold text-[20px] ">Setting</p>
                    </div>
                </div>
                <div className="mt-10">
                    <ul>
                        <li>
                            <button formTarget="_blank" onClick={() => {

                            }} className="py-4 hover:bg-slate-50 active:bg-slate-100 w-full mt-3">
                                <div className="flex w-full ">
                                    <img src="/notification.svg" alt="" className="w-[24px]" />
                                    <div className="flex justify-between w-full">
                                        <p className="text-[16px] text-gray-700 ml-4 font-medium">Norification Setting</p>
                                        <img src="/forward.svg" className="w-[24px]" alt="" />
                                    </div>
                                </div>
                            </button>
                            <hr />
                        </li>
                        <li>
                            <button formTarget="_blank" onClick={() => {
                                
                            }} className="py-4 hover:bg-slate-50 active:bg-slate-100 w-full mt-3">
                                <div className="flex w-full ">
                                    <img src="/password.svg" alt="" className="w-[24px]" />
                                    <div className="flex justify-between w-full">
                                        <p className="text-[16px] text-gray-700 ml-4 font-medium">Password Manager</p>
                                        <img src="/forward.svg" className="w-[24px]" alt="" />
                                    </div>
                                </div>
                            </button>
                            <hr />
                        </li>
                        <li>
                            <button formTarget="_blank" onClick={() => {
                                
                            }} className="py-4 hover:bg-slate-50 active:bg-slate-100 w-full mt-3">
                                <div className="flex w-full ">
                                    <img src="/delete.svg" alt="" className="w-[24px]" />
                                    <div className="flex justify-between w-full">
                                        <p className="text-[16px] text-gray-700 ml-4 font-medium">Delete Account</p>
                                        <img src="/forward.svg" className="w-[24px]" alt="" />
                                    </div>
                                </div>
                            </button>
                            <hr />
                        </li>
                    </ul>

                </div>

            </main>
        </>
    )
}
export default Setting