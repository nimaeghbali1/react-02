import * as React from "react"
import { loggedIn } from "../src/App"
import Welcome from "./Welcome"


const Home: any = () => {
    if (loggedIn) {
        const [notif, setNotif] = React.useState(2)
        return (
            <main className="w-[375px] h-[1200px] m-auto">
                <div className="w-full h-[175px] bg-blue-600 rounded-b-3xl pt-8 px-[24px]">
                    <div className="flex justify-between">
                        <p className="font-semibold text-white text-[24px]">Hi, User 👋</p>
                        <button className="bg-blue-400 rounded-md h-[30px] w-[30px] flex justify-around items-center" onClick={() => {
                            location.assign("/auth/notification")
                            setNotif(0)
                        }}>
                            <div className="flex">
                                <img src="/Hnotification.svg" className="w-[24px]" alt="" />
                                <div className="w-[10px] h-[10px] rounded-full bg-red-500 flex items-center justify-around ml-[-10px]">
                                    <p className="text-white font-medium text-[8px]">{notif}</p>
                                </div>
                            </div>
                        </button>
                    </div>
                    <p className="text-white">Let's start learning!</p>
                    <div className="flex justify-between mt-7">
                        <div className="flex">
                            <button className="bg-gray-50 p-2 rounded-l-md w-[40px] h-[40px] flex items-center justify-around">
                                <img src="/search.svg" className="w-[18px]" alt="" />
                            </button>
                            <input type="text" placeholder="Search" className="text-[12px] bg-gray-50 w-[240px] h-[40px] rounded-r-md outline-none" />

                        </div>
                        <button className="bg-gray-50 p-2 rounded-md w-[40px] h-[40px] flex items-center justify-around">
                            <img src="/filter.svg" className="w-[18px]" alt="" />
                        </button>
                    </div>
                </div>
                <div className="p-[24px]">
                    <p className="font-bold text-gray-800 text-[20px]">Categories</p>
                    <ul className="flex justify-between mt-5" >
                        <li>
                            <button>
                                <div className="rounded-full flex items-center justify-around w-[70px] h-[70px] bg-slate-100">
                                    <img src="/art.svg" alt="" className="w-[45px]" />
                                </div>
                            </button>
                            <div className="justify-around flex">
                                <p className="font-medium text-gray-800">Art</p>
                            </div>
                        </li>
                        <li>
                            <button>
                                <div className="rounded-full flex items-center justify-around w-[70px] h-[70px] bg-slate-100">
                                    <img src="/coding.svg" alt="" className="w-[45px]" />
                                </div>
                            </button>
                            <div className="justify-around flex">
                                <p className="font-medium text-gray-800">Coding</p>
                            </div>
                        </li>
                        <li>
                            <button>
                                <div className="rounded-full flex items-center justify-around w-[70px] h-[70px] bg-slate-100">
                                    <img src="/marketing.svg" alt="" className="w-[45px]" />
                                </div>
                            </button>
                            <div className="justify-around flex">
                                <p className="font-medium text-gray-800">Marketing</p>
                            </div>
                        </li>
                        <li>
                            <button>
                                <div className="rounded-full flex items-center justify-around w-[70px] h-[70px] bg-slate-100">
                                    <img src="/business.svg" alt="" className="w-[45px]" />
                                </div>
                            </button>
                            <div className="justify-around flex">
                                <p className="font-medium text-gray-800">Business</p>
                            </div>
                        </li>
                    </ul>
                    <div className="flex justify-between mt-5">
                        <p className="font-bold text-gray-800 text-[20px]">Popular course</p>
                        <button>
                            <p className="font-medium text-yellow-400 text-[16px]">See all</p>
                        </button>

                    </div>
                    <ul className="mt-5 flex justify-between overflow-auto gap-6">
                        <li>
                            <button onClick={() => {
                                location.assign("/item/purchase1")
                            }}>
                                <div className="w-[260px] h-[170px] bg-cover rounded-xl bg-[url('/discussion.jpg')] ">
                                    <div className="flex justify-between px-2">
                                        <div className="w-[52px] h-[25px] rounded-md bg-white mt-3 flex p-1 items-center justify-between">
                                            <img src="/star.svg" alt="" className="w-[20px]" />
                                            <p className="font-medium text-gray-700">4.8</p>
                                        </div>
                                        <button>
                                            <div className="w-[25px] h-[25px] rounded-md bg-white mt-3 flex p-1 items-center justify-between">
                                                <img src="/Pbookmark.svg" alt="" className="w-[20px]" />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </button>
                            <p className="text-[18px] font-medium mt-2">Design Thinking Fundamental</p>
                            <div className="flex mt-2 w-[95px] justify-between">
                                <img src="/user.svg" alt="" className="w-[20px]" />
                                <p className=" text-[12px] text-gray-500">Robert Green</p>
                            </div>
                            <div className="flex mt-2 gap-4 items-center">
                                <p className=" text-[24px] text-blue-500">$180.00</p>
                                <div className="flex justify-around items-center bg-orange-100 rounded-xl h-6 px-2 ">
                                    <p className=" text-[12px] text-orange-400">Best seller</p>
                                </div>
                            </div>

                        </li>
                        <li>
                            <button onClick={() => {
                                location.assign("/item/purchase2")
                            }}>
                                <div className="w-[260px] h-[170px] bg-cover rounded-xl bg-[url('/discussion2.jpg')] ">
                                    <div className="flex justify-between px-2">
                                        <div className="w-[52px] h-[25px] rounded-md bg-white mt-3 flex p-1 items-center justify-between">
                                            <img src="/star.svg" alt="" className="w-[20px]" />
                                            <p className="font-medium text-gray-700">4.9</p>
                                        </div>
                                        <button>
                                            <div className="w-[25px] h-[25px] rounded-md bg-white mt-3 flex p-1 items-center justify-between">
                                                <img src="/Pbookmark.svg" alt="" className="w-[20px]" />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <p className="text-[18px] font-medium mt-2">3D Illustratiion Design</p>
                                <div className="flex mt-2 w-[95px] justify-between">
                                    <img src="/user.svg" alt="" className="w-[20px]" />
                                    <p className=" text-[12px] text-gray-500">John Doe</p>
                                </div>
                                <div className="flex mt-2 gap-4 items-center">
                                    <p className=" text-[24px] text-blue-500">$250.00</p>
                                    <div className="flex justify-around items-center bg-orange-100 rounded-xl h-6 px-2 ">
                                        <p className=" text-[12px] text-orange-400">Recommended</p>
                                    </div>
                                </div>
                            </button>
                        </li>
                    </ul>
                    <p className="font-bold text-gray-800 text-[20px] mt-5">Top Mentor</p>
                    <ul className="flex justify-between mt-5" >
                        <li>
                            <button>
                                <div className="rounded-full flex items-center justify-around w-[70px] h-[70px] bg-slate-100">
                                    <img src="/p1.jpg" alt="" className=" rounded-full bg-cover" />
                                </div>
                            </button>
                            <div className="justify-around flex">
                                <p className="font-medium text-gray-800">Esther T.</p>
                            </div>
                        </li>
                        <li>
                            <button>
                                <div className="rounded-full flex items-center justify-around w-[70px] h-[70px] bg-slate-100">
                                    <img src="/p3.jpg" alt="" className=" rounded-full bg-cover" />
                                </div>
                            </button>
                            <div className="justify-around flex">
                                <p className="font-medium text-gray-800">Jenny M.</p>
                            </div>
                        </li>
                        <li>
                            <button>
                                <div className="rounded-full flex items-center justify-around w-[70px] h-[70px] bg-slate-100">
                                    <img src="/p2.jpg" alt="" className=" rounded-full bg-cover" />
                                </div>
                            </button>
                            <div className="justify-around flex">
                                <p className="font-medium text-gray-800">Jacob U.</p>
                            </div>
                        </li>
                        <li>
                            <button className="outline-none">
                                <div className="rounded-full flex items-center justify-around w-[70px] h-[70px] bg-slate-100 ">
                                    <img src="/p4.jpg" alt="" className=" rounded-full bg-cover" />
                                </div>
                            </button>
                            <div className="justify-around flex">
                                <p className="font-medium text-gray-800">Bessi K.</p>
                            </div>
                        </li>
                    </ul>
                    <p className="font-bold text-gray-800 text-[20px] mt-5">Continue Learning</p>

                    <div className="flex p-2 w-full border-gray-200 border-2 rounded-xl gap-3">
                        <img src="/introducting.jpg" alt="" className="w-[110px] rounded-xl" />
                        <div>
                            <div className="flex justify-around items-center bg-orange-100 rounded-xl h-6 px-2 w-14">
                                <p className=" text-[12px] text-orange-400">Design</p>
                            </div>
                            <p className="text-[18px] font-medium mt-2">Introduction of Figma</p>
                            <div className="flex w-[95px] justify-between">
                                <img src="/user.svg" alt="" className="w-[20px]" />
                                <p className=" text-[12px] text-gray-500">Robert Green</p>
                            </div>
                            <div className="flex justify-between">
                                <input type="range" id="vol" name="vol" min="0" max="25" className="outline-none"></input>
                                <p className=" text-gray-600">25/25</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
    else {
        return <Welcome />
    }
}
export default Home