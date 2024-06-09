import * as React from "react"
import Textfield from "../components/Textfield"
import Button from "../components/Button"
import GoogleButton from "../components/Button2"
import { Link } from "react-router-dom"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form"
import { loggedIn } from "../src/App"
import Loggedin from "./Loggedin"

interface LoginSchema {
    email: string,
    password: string
}

const loginSchema = yup.object({
    email: yup.string().required("Please enter your email"),
    password: yup.string().required("Please enter your password")
})
const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    })
    const handleLoginUser = React.useCallback(async (data: LoginSchema): Promise<void> => {
        try {

            const existUsers = localStorage.getItem("users")
            const parsedExistUsers = existUsers ? JSON.parse(existUsers) : null
            const existUser = parsedExistUsers.find(
                (user: typeof data) => user.email === data.email && user.password === data.password)
            if (existUser) {
                localStorage.setItem("login", "1")
                return location.assign("/")
            }
            else if(!existUser) {
                return alert("gmail or password is not valid \n please try again")
            }

        }
        catch (err) {
            console.log(err)
        }
    }, [])
    if (!loggedIn) {

        return (
            <>
                <main className="w-[375px] h-[868px] m-auto px-[24px]">

                    <div className="">
                        <p className="text-[26px] font-semibold text-center mt-10">Sign In</p>
                    </div>
                    <div className="w-[250px] mx-auto mt-3">
                        <p className="text-[14px] text-gray-400 text-center">Hi! Welcome back , you've been missed</p>
                    </div>
                    <form onSubmit={handleSubmit(handleLoginUser)}>
                        <div className="mt-20">
                            <Textfield label="Email" placeholder="Example@gmail.com" validation={register("email")} helperText={<>{errors.email?.message ?? " "}</>}></Textfield>
                        </div>
                        <div className="mt-4">
                            <Textfield label="Password" placeholder="Enter your password" type="password" validation={register("password")} helperText={<>{errors.password?.message ?? " "}</>}></Textfield>
                        </div>
                        <div className="flex mt-3 justify-end">
                            <a className="text-blue-500 ml-1 underline" href="">Forget Password?</a>
                        </div>
                        <div className="mt-10">
                            <Button>Sign in</Button>
                        </div>
                    </form>
                    <div className="flex items-center mt-12 justify-between">
                        <div className="w-[100px] h-[1px] bg-gray-300"></div>
                        <p className="text-slate-500">Or sign in with</p>
                        <div className="w-[100px] h-[1px] bg-gray-300"></div>
                    </div>
                    <div className="flex items-center mt-10 gap-2">
                        <GoogleButton><img src="/google.png" alt="google icon" className="w-[30px]" /></GoogleButton>
                        <div className="h-[2px] w-[80px] bg-slate-400 rounded-3xl"></div>
                        <p className="font-semibold text-md text-slate-500">or</p>
                        <div className="h-[2px] w-[80px] bg-slate-400 rounded-3xl"></div>
                        <GoogleButton><img src="/facebook.png" alt="facebook icon" className="w-[30px]" /></GoogleButton>
                    </div>
                    <div className="flex justify-center mb-2 mt-8">
                        <p className=" text-sm  text-slate-700">
                            Don't you have an account?
                            <Link to="/auth/register" className=" text-sm underline text-blue-500 ml-1">
                                Sign up
                            </Link>
                        </p>
                    </div>

                </main>
            </>
        )
    }
    else{
        return (
            <Loggedin/>
        )
    }
}

export default Login