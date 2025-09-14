import { useState } from "react"
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import {Link} from 'react-router-dom'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email:"",
        password:""
    })
    function changeHandler(e) {
        setFormData((prevData) => {
            return {
                ...prevData,
                [e.target.name]: e.target.value
            }
        })
    }
    function submitHandler(e) {
        e.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged in successfully!");
        navigate("/dashboard");
    }
    const [showPassword, setShowPassword] = useState(false)
    return (
        <form onSubmit={submitHandler}
        className="flex flex-col space-y-4 w-full mt-6">
            <label className="w-full">
                <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
                    Email Address  <sup className="text-pink-500">*</sup>
                </p>
                <input className="bg-gray-900 mt-2 rounded-[0.5rem] text-white w-full p-[12px]" 
                type="email" required value={formData.email}
                    onChange={changeHandler}
                    placeholder="Enter your email address"
                    name="email"
                    />
            </label>
            <label className="w-full relative">
                <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
                    Password <sup className="text-pink-500">*</sup>
                </p>
                <input className="bg-gray-900 mt-2 rounded-[0.5rem] text-white w-full p-[12px]" 
                type={showPassword ? "text" : "password"} required value={formData.password}
                    onChange={changeHandler}
                    placeholder="Enter your password"
                    name="password"
                    />

                <span className="absolute right-3 top-[45%]  cursor-pointer">
                    {showPassword ? <MdVisibilityOff
                    fontSize={24} fill="#AFB2BF"
                     onClick={() => setShowPassword(false)} /> : <MdVisibility
                     fontSize={24} fill="#AFB2BF" onClick={() => setShowPassword(true)} />}
                </span>   

                <Link to="#">
                    <p className="text-sm mt-2 text-blue-500 w-full ml-auto max-w-max">
                        Forgot Password
                    </p>
                </Link> 
            </label>

            <button className="bg-yellow-500 text-black font-bold rounded-[0.375rem] px-4 py-2 mt-4 ">
                Sign In
            </button>

            
        </form>

    )

}
export default LoginForm;