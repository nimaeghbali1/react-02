import React, { type FC } from "react"
import { useNavigate } from "react-router-dom"


const HelpCenter: FC = () => {
    const navigate = useNavigate()
    return (
        <>
            <main className="w-[375px] h-[868px] m-auto px-[24px] overflow-auto">
                <div className="h-[100px] flex items-center">
                    <button className="rounded-full fixed bg-white" onClick={() => navigate(-1)}>
                        <img src="/back.svg" alt="" className="w-[32px]" />
                    </button>
                    <div className=" flex justify-around w-[270px]">
                        <p className="text-gray-700 font-semibold text-[20px] ">Help Center</p>
                    </div>
                </div>
                <div className="mt-10">
                    <ul>
                        <li>
                            <button formTarget="_blank" onClick={() => {
                                location.assign("https://instagram.com")
                            }} className="py-4 hover:bg-slate-50 active:bg-slate-100 w-full">
                                <div className="flex w-full ">
                                    <img src="/instagram.svg" alt="" className="w-[24px]" />
                                    <div className="flex justify-between w-full">
                                        <p className="text-[16px] text-gray-700 ml-4 font-medium">Instagram</p>
                                        <img src="/forward.svg" className="w-[24px]" alt="" />
                                    </div>
                                </div>
                            </button>
                            <hr />
                        </li>
                        <li>
                            <button onClick={() => {
                                location.assign("https://whatsapp.com")
                            }} className="py-4 hover:bg-slate-50 active:bg-slate-100 w-full">
                                <div className="flex w-full">
                                    <img src="/whatsapp.svg" alt="" className="w-[24px]" />
                                    <div className="flex justify-between w-full">
                                        <p className="text-[16px] text-gray-700 ml-4 font-medium">Whats App (+989174747741)</p>
                                        <img src="/forward.svg" className="w-[24px]" alt="" />
                                    </div>
                                </div>
                            </button>
                        </li>
                    </ul>
                </div>

            </main>
        </>
    )
}
export default HelpCenter