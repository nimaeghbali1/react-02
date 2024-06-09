import React, { type FC } from "react"
import { useNavigate } from "react-router-dom"

const Policy: FC = () => {
    const navigate = useNavigate()
    return (
        <>
            <main className="w-[375px] h-[868px] m-auto px-[24px] overflow-auto">
                <div className="h-[100px] flex items-center">
                    <button className="rounded-full fixed bg-white" onClick={() => navigate(-1)}>
                        <img src="/back.svg" alt="" className="w-[32px]" />
                    </button>
                    <div className=" flex justify-around w-[270px]">
                        <p className="text-gray-700 font-semibold text-[20px] ">Privacy Policy</p>
                    </div>
                </div>
                <p className="mt-5 mb-3 font-medium text-[16px] text-blue-500">Cancelation Policy</p>
                <p className="text-[14px] text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis.<br /> Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin.</p>
                <p className="mt-5 mb-3 font-medium text-[16px] text-blue-500">Terms & Condition</p>
                <p className="pb-5 text-[14px] text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis.<br /> Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin.</p>

            </main>
        </>
    )
}
export default Policy