import React, { type FC } from "react"
import { useNavigate } from "react-router-dom"

const Loggedin: FC = () => {
    const navigate = useNavigate()
    return (
        <>
            <main className="w-[375px] h-[868px] m-auto px-[24px] ">
                <div className="h-[100px] flex items-center">
                    <button className="rounded-full fixed bg-white" onClick={() => navigate(-1)}>
                        <img src="/back.svg" alt="" className="w-[32px]" />
                    </button>
                </div>
                <div className=" flex justify-around">
                    <p className="text-gray-700 font-semibold text-[32px]">Profile</p>
                </div>
                <ul className="mt-[60px]">
                    <li>
                        <button onClick={() => {

                        }} className="py-4 hover:bg-slate-50 active:bg-slate-100 w-full">
                            <div className="flex w-full">
                                <img src="/Lprofile.svg" alt="" className="w-[24px]" />
                                <div className="flex justify-between w-full">
                                        <p className="text-[16px] text-gray-700 ml-4 font-medium">Your Profile</p>
                                        <img src="/forward.svg" className="w-[24px]" alt="" />
                                    </div>
                            </div>
                        </button>
                        <hr />
                    </li>
                    <li>
                        <button onClick={() => {
                            location.assign("/auth/notification")
                        }} className="py-4 hover:bg-slate-50 active:bg-slate-100 w-full">
                            <div className="flex w-full">
                                <img src="/notification.svg" alt="" className="w-[24px]" />
                                <div className="flex justify-between w-full">
                                        <p className="text-[16px] text-gray-700 ml-4 font-medium">Notifications</p>
                                        <img src="/forward.svg" className="w-[24px]" alt="" />
                                    </div>
                            </div>
                        </button>
                        <hr />
                    </li>
                    <li>
                        <button onClick={() => {
                            location.assign("/auth/setting")
                        }} className="py-4 hover:bg-slate-50 active:bg-slate-100 w-full">
                            <div className="flex w-full">
                                <img src="/Lsetting.svg" alt="" className="w-[24px]" />
                                <div className="flex justify-between w-full">
                                        <p className="text-[16px] text-gray-700 ml-4 font-medium">Setting</p>
                                        <img src="/forward.svg" className="w-[24px]" alt="" />
                                    </div>
                            </div>
                        </button>
                        <hr />
                    </li><li>
                        <button onClick={() => {
                            location.assign("/auth/helpcenter")
                        }} className="py-4 hover:bg-slate-50 active:bg-slate-100 w-full">
                            <div className="flex w-full">
                                <img src="/Lhelp.svg" alt="" className="w-[24px]" />
                                <div className="flex justify-between w-full">
                                        <p className="text-[16px] text-gray-700 ml-4 font-medium">Help Center</p>
                                        <img src="/forward.svg" className="w-[24px]" alt="" />
                                    </div>
                            </div>
                        </button>
                        <hr />
                    </li>
                    <li>
                        <button onClick={() => {
                            location.assign("/auth/policy")
                        }} className="py-4 hover:bg-slate-50 active:bg-slate-100 w-full">
                            <div className="flex w-full">
                                <img src="/Lprivacy.svg" alt="" className="w-[24px]" />
                                <div className="flex justify-between w-full">
                                        <p className="text-[16px] text-gray-700 ml-4 font-medium">Privacy Policy</p>
                                        <img src="/forward.svg" className="w-[24px]" alt="" />
                                    </div>
                            </div>
                        </button>
                        <hr />
                    </li>
                    <li>
                        <button onClick={() => {
                            localStorage.setItem("login", "0")
                            location.assign("/welcome")
                        }} className="py-4 hover:bg-slate-50 active:bg-slate-100 w-full">
                            <div className="flex w-full">
                                <img src="/Llogout.svg" alt="" className="w-[24px]" />
                                <div className="flex justify-between w-full">
                                        <p className="text-[16px] text-gray-700 ml-4 font-medium">Log Out</p>
                                        <img src="/forward.svg" className="w-[24px]" alt="" />
                                    </div>
                            </div>
                        </button>
                        <hr />
                    </li>
                </ul>
            </main>
        </>
    )
}
export default Loggedin