import * as React from "react"
import { Outlet } from "react-router-dom"
const AuthLayout: React.FC = () => {
    return (
        <>
            <main className="flex justify-around">
                <div className="w-[375px] flex justify-between h-[100px] px-5  bg-red-300 fixed bottom-0 rounded-t-3xl backdrop-opacity-20 backdrop-invert bg-white/90 border-slate-300 border-2">
                    <button onClick={() => {
                        location.assign("/")
                    }} className="hover:text-blue-500 text-[12px] text-gray-400 outline-none">
                        <img src="/home.svg
                    " alt="" className="w-[40px] mx-auto mt-1" />
                        <p className="">Home</p>
                    </button>
                    <button onClick={() => {
                        location.assign("")
                    }} className="hover:text-blue-500 text-[12px] text-gray-400 outline-none">
                        <img src="/mycourse.svg
                    " alt="" className="w-[40px] h-[40px] mx-auto mt-1" />
                        <p className="">My Course</p>
                    </button>
                    <button onClick={() => {
                        location.assign("")
                    }} className="hover:text-blue-500 text-[12px] text-gray-400 outline-none">
                        <img src="/bookmark.svg
                    " alt="" className="w-[40px] mx-auto mt-1" />
                        <p className="">Bookmark</p>
                    </button>
                    <button onClick={() => {
                        location.assign("/auth/login")
                    }} className="hover:text-blue-500 text-[12px] text-gray-400 outline-none">
                        <img src="/profile.svg
                    " alt="" className="w-[35px] mx-auto mt-1" />
                        <p className="">Profile</p>
                    </button>
                    <button onClick={() => {
                        location.assign("")
                    }} className="hover:text-blue-500 text-[12px] text-gray-400 outline-none">
                        <img src="/chat.svg
                    " alt="" className="w-[40px] h-[40px] mx-auto mt-1" />
                        <p className="">Chat</p>
                    </button>
                </div>
            </main>
            <Outlet />
        </>
    )
}
export default AuthLayout