import { MdVisibilityOff, MdVisibility } from "react-icons/md";
import { use, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    function changeHandler(e) {
        setFormData((prevData) => {
            return {
                ...prevData,
                [e.target.name]: e.target.value
            }
        })
    }
    const [accountType, setAccountType] = useState("student");

    function submitHandler(e) {
        e.preventDefault();
        if (formData.password != formData.confirmPassword) {
            toast.error("Passwords do not match");
        }
        else {
            toast.success("Account created successfully");
            setIsLoggedIn(true);
            navigate("/dashboard");
        }
    }

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    return (
    <div>
        <div className="flex bg-white p-1 space-x-1 my-6 rounded-full max-w-max">
            <button className={`py-1 px-4 transition-all duration-200 rounded-full ${accountType === "student" ? "bg-pink-500 text-white" : "text-gray-500"}`} 
            onClick={() => setAccountType("student")}>
                Student
            </button>
            <button className={`py-1 px-4 transition-all duration-200 rounded-full ${accountType === "instructor" ? "bg-pink-500 text-white" : "text-gray-500"}`} 
            onClick={() => setAccountType("instructor")}>
                Instructor
            </button>
        </div>

        <form onSubmit={submitHandler}>


            {/* Contains Only First Name and Last Name */}
            <div className="flex flex-row space-x-4">
                <label className="w-full">
                <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">First Name <sup className="text-pink-500">*</sup></p>
                <input type="text" required placeholder="Enter your First Name" name="firstName" className="bg-gray-900 mt-2 rounded-[0.5rem] text-white w-full p-[12px]"
                    onChange={changeHandler} value={formData.firstName}
                />
            </label>
            <label className="w-full">
                <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">Last Name <sup className="text-pink-500">*</sup></p>
                <input type="text" required placeholder="Enter your Last Name" name="lastName"  className="bg-gray-900 mt-2 rounded-[0.5rem] text-white w-full p-[12px]"
                    onChange={changeHandler} value={formData.lastName}
                />
            </label>
            </div>
{/* 
            Enter your Email */}
            <div className="mt-4">
                <label className="w-full ">
                <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">Email  <sup className="text-pink-500">*</sup></p>
                <input type="email" required placeholder="Enter your Email" name="email" className="bg-gray-900 mt-2 rounded-[0.5rem] text-white w-full p-[12px]"
                    onChange={changeHandler} value={formData.email}
                />
            </label>
            </div>
            {/* Create Password and Confirm Password */}
            <div className="flex flex-row justify-end space-x-4 mt-4">
                <label className="w-full relative">
                <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">Create Password <sup className="text-pink-500">*</sup></p>
                <input type={showPassword ? "text" : "password"} required placeholder="Enter your Password" name="password" className="bg-gray-900 mt-2 rounded-[0.5rem] text-white w-full p-[12px]"
                    onChange={changeHandler} value={formData.password}
                />
                <span className="absolute right-3 top-[65%]  cursor-pointer">
                    {showPassword ? <MdVisibilityOff fontSize={24} fill="#AFB2BF" onClick={() => setShowPassword(false)} /> : <MdVisibility fontSize={24} fill="#AFB2BF" onClick={() => setShowPassword(true)} />}
                </span>
                </label>

                <label className="w-full relative">
                <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">Confirm Password <sup className="text-pink-500">*</sup></p>
                <input type={showConfirmPassword ? "text" : "password"} required placeholder="Enter your Password" name="confirmPassword" className="bg-gray-900 mt-2 rounded-[0.5rem] text-white w-full p-[12px]"
                    onChange={changeHandler} value={formData.confirmPassword}
                />
                <span className="absolute right-3 top-[65%]  cursor-pointer">
                    {showConfirmPassword ? <MdVisibilityOff fontSize={24} fill="#AFB2BF" onClick={() => setShowConfirmPassword(false)} /> : <MdVisibility fontSize={24} fill="#AFB2BF" onClick={() => setShowConfirmPassword(true)} />}
                </span>
                </label>

            </div>
            <button className="bg-yellow-500 text-black font-bold rounded-[0.375rem] px-4 py-2 mt-4  w-full">
                Create Account
            </button>
            
        </form>
    </div>
    )
}

export default SignupForm;
