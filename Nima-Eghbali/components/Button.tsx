import React, { ReactNode , type FC, Children } from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children : ReactNode
}
const SubmitButton : FC<ButtonProps> = ({children , ...restProps}) =>{
    return (
        <button {...restProps} className="w-full bg-[#0961F5] active:shadow-none text-slate-50  p-2 rounded-full shadow-slate-600 shadow-md">{children}</button>
    )

}
export default SubmitButton