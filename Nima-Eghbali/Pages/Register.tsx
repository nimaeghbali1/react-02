import * as React from "react"
import Textfield from "../components/Textfield"
import Button from "../components/Button"
import GoogleButton from "../components/Button2"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from "axios"
import { loggedIn } from "../src/App"
import Loggedin from "./Loggedin"

const registerSchema = yup.object({
    email: yup.string().required("Please enter your email").email("Email is not valid! "),
    password: yup.string().required('Password is required').min(8),
    username: yup.string().required("Please enter your name").min(3),
});


interface RegisterSchema {
    email: string,
    password: string,
    username: string

}

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(registerSchema)
    })
    const handleRegisterUser = React.useCallback(async (data: RegisterSchema): Promise<void> => {

        const existUsers = localStorage.getItem("users")
        const parsedExistUsers = existUsers ? JSON.parse(existUsers) : null
        if (parsedExistUsers) {
            const existUser = parsedExistUsers.find(
                (user: typeof data) => user.email === data.email)
            if (existUser) {
                return alert("user already exists! \n try to login")
            }
            
            localStorage.setItem("login", "1")
            const regesterFormJson = JSON.stringify(parsedExistUsers)
            localStorage.setItem("users", regesterFormJson)
            location.assign("/")
            parsedExistUsers.push(data)
        }
        else {
            const registerFormJson = JSON.stringify([data])
            localStorage.setItem("users" , registerFormJson)
            localStorage.setItem("login", "1")
            location.assign("/")
        }
    }, [])

    if (!loggedIn) {
        return (
            <>
                <main className="w-[375px] h-[868px] m-auto px-[24px]">

                    <div className="">
                        <p className="text-[26px] font-semibold text-center mt-10">Create Account</p>
                    </div>
                    <div className="w-[250px] mx-auto mt-3">
                        <p className="text-[14px] text-gray-400 text-center">Fill your information blow or register with your social account</p>
                    </div>
                    <form onSubmit={handleSubmit(handleRegisterUser)}>
                        <div className="mt-6">
                            <Textfield label="Name" placeholder="Your username" validation={register("username")} helperText={<>{errors.username?.message ?? " "}</>}></Textfield>
                        </div>
                        <div className="mt-4">
                            <Textfield label="Email" placeholder="Example@gmail.com" validation={register("email")} helperText={<>{errors.email?.message ?? " "}</>}></Textfield>
                        </div>
                        <div className="mt-4">
                            <Textfield label="Password" type="password" placeholder="Enter your password" validation={register("password")} helperText={<>{errors.password?.message ?? " "}</>}></Textfield>
                        </div>
                        <div className="flex mt-3">
                            <input type="checkbox" required className=" outline-none" />
                            <div className="flex ml-2">
                                <p>Agree with</p>
                                <a className="text-blue-500 ml-1 underline" href="/auth/policy">Terms & condition</a>
                            </div>
                        </div>
                        <div className="mt-10">
                            <Button>Sign up</Button>
                        </div>
                    </form>

                    <div className="flex items-center mt-12 justify-between">
                        <div className="w-[100px] h-[1px] bg-gray-300"></div>
                        <p className="text-slate-500">Or sign up with</p>
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
                            Already have an account?
                            <Link to="/auth/login" className=" text-sm underline text-blue-500 ml-1">
                                Sign in
                            </Link>
                        </p>
                    </div>

                </main>
            </>
        )
    }
    else {
        return (<Loggedin />)
    }
}

export default Register