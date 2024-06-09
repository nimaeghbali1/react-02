import React, { ReactNode, type FC , useId} from "react"

interface TextfieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: ReactNode,
    helperText?: ReactNode,
    validation? : any
}

const Textfield: FC<TextfieldProps> = ({ label , helperText , validation , ...restprops }) => {
    const id = useId()
    return (
        <>
            {Boolean(label) && <label htmlFor={id} className="font-medium text-md text-slate-700">
                {label}
            </label>}
            <div className="w-full h-[40px] ">
                <input id={id} className="w-full h-full rounded-lg outline-none bg-slate-100 px-4 border-none" {...restprops} {...validation} />
            </div>
            {Boolean(helperText) && <p className="text-red-600 text-sm font-medium">{helperText}</p>}
        </>
    )
}
export default Textfield