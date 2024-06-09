import React, { type FC } from "react"
import Button from "../components/Button"

const Welcome : FC = ()=>{
    return (
        <>
        <main className="w-[375px] h-[868px] m-auto px-[24px]">
            <div className="bg-slate-100 flex h-[406px] rounded-b-[40px] overflow-hidden w-[375px] ml-[-24px]   ">
                <img src="/phone.png" alt="" className=" m-auto mt-[50px]"/>
            </div>
            <div className="px-[7px] text-center mt-[25px]">
                <span className="text-[27px] font-semibold text-[#242424]">Finding the</span>
                <span className="text-[27px] font-semibold text-[#FFA800]"> Perfect Online Course </span>
                <span className="text-[27px] font-semibold text-[#242424]">for You</span>
            </div>
            <p className="mb-[24px] text-[#797979] text-[14px] text-center px-[6px] mt-[15px]">App to search and discover the most suitable place for you to stay.</p>
            <Button onClick={()=>{
                location.assign("/auth/register")
            }
            } className="">Let’s Get Started</Button>
            <div className="mt-[24px]">
                <span className="text-[16px] text-[#242424]">Already have an account?</span>
                <a className="text-[#0961F5] text-[16px]" href="/auth/login"> Sign In</a>
            </div>
        </main>
        </>
    )
}

export default Welcome