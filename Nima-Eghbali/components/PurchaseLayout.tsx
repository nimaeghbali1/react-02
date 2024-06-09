import * as React from "react"
import { Outlet, useNavigate } from "react-router-dom"
const PurchaseLayout: React.FC = () => {
    const navigate = useNavigate()
    return (
        <>
            <main className="w-[375px] h-[868px] m-auto ">
                <div className="bg-[url('/discussion.jpg')] h-[280px] bg-cover w-full">
                    <div className="flex px-[24px] w-full h-12 pt-3 justify-between">
                        <button className="rounded-full bg-white h-[32px] w-[32px]" onClick={() => navigate(-1)}>
                            <img src="/back.svg" alt="" className="w-[32px]" />
                        </button>
                        <div className="w-[75px] justify-between flex ">
                            <button className="rounded-full bg-white h-[32px] w-[32px]" onClick={() => navigate(-1)}>
                                <img src="/share.svg" alt="" className="w-[24px] m-auto mr-[5px]" />
                            </button>
                            <button className="rounded-full bg-white h-[32px] w-[32px]" onClick={() => navigate(-1)}>
                                <img src="/PPbookmark.svg" alt="" className="w-[32px]" />
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-around mt-16">
                        <button>
                            <div className="w-[180px] h-[50px] flex px-3 gap-1 backdrop-opacity-90  bg-black/25 backdrop-blur-[5px] rounded-xl items-center">
                                <img src="/play.svg" className="w-[40px]" alt="" />
                                <p className="text-white font-light">Course Preview</p>
                            </div>
                        </button>
                    </div>
                </div>
                <div className=" rounded-t-3xl mt-[-21px] w-full p-[24px] pb-0 bg-white">
                    <div className="flex justify-between">
                        <div className="flex justify-around items-center bg-orange-100 rounded-xl h-5 px-2 ">
                            <p className=" text-[12px] text-orange-400">Best seller</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <img src="/star.svg" alt="" className="w-[16px]" />
                            <p className="font-normal text-[12px] text-gray-500">4.8</p>
                            <p className="font-normal text-[12px] text-gray-500">(365 reviews)</p>
                        </div>
                    </div>
                    <p className="text-[18px] font-medium mt-4">Design Thinking Fundamental</p>
                        <div className="flex justify-between">
                        <div className="flex mt-2 w-[95px] justify-between">
                            <img src="/user.svg" alt="" className="w-[20px]" />
                            <p className=" text-[12px] text-gray-500">Robert Green</p>
                        </div><div className="flex mt-2 w-[83px] justify-between">
                            <img src="/Pplay.svg" alt="" className="w-[20px]" />
                            <p className=" text-[12px] text-gray-500">32 Lessons</p>
                        </div><div className="flex mt-2 w-[95px] justify-between">
                            <img src="/achievement.svg" alt="" className="w-[20px]" />
                            <p className=" text-[12px] text-gray-500">Robert Green</p>
                        </div>
                        </div>
                        <ul className="flex justify-around mt-5 mb-2 ">
                            <li><p  className="text-gray-700 text-[14px] font-medium">About</p></li>
                        </ul>
                        

                        
                </div>
                <hr/>
                <Outlet />
            </main>
        </>
    )
}
export default PurchaseLayout