import React from "react";
import { FcGoogle } from "react-icons/fc";
import frame from "../assets/frame.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {
    return (
        <div className="flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto space-x-12 space-y-0">
            
             <div className="">
                <h1 className="
                   text-[1.875rem] font-semibold text-white leading-[2.375rem]">
                   {title}</h1>
                <p className="text-[1.225rem] leading-[1.625rem] mt-4">
                    <span className="text-white">{desc1}</span><br/>
                    <span className="italic text-blue-500">{desc2}</span>
                </p>
                {formtype === "signup" ?
                 <SignupForm setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />
                }

                <div className="flex flex-row w-full items-center space-x-2 mt-4">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <p className="whitespace-nowrap text-white">OR</p>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <button className="w-full flex items-center 
                justify-center space-x-2 rounded-md bg-transparent
                 text-white shadow-md px-[12px] py-[8px] mt-6 border border-white">
                    <FcGoogle size={24} />
                    <span>Sign Up with Google</span>
                </button>

             </div>
             <div className="relative w-11/12 max-w-[450px]">
                <img src={frame} alt="Pattern" width={558} height={504} loading="lazy" />
                <img className="absolute -top-4 right-4" 
                src={image} alt="Students" width={558} height={490} loading="lazy" />
             </div>

        </div>
    )
}

export default Template;