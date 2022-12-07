/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useState} from "react";
import loginImage from "../assests/images/login.webp";
import GoogleLogin from "react-google-login";
import { useNavigate as navigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = () => {
        console.log(email, "email");
        console.log(password, "password");

    }

        const handleSocialLogin = (token)=>{
            console.log(token,"google acc info")
        }

    return (
        <>
            <section className="h-screen">
                <div className="px-6 h-full text-gray-800">
                    <div
                    className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                    >
                    <div
                        className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                    >
                        <img
                        src={loginImage}
                        className="w-full"
                        alt="Sample image"
                        />
                    </div>
                    <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                        <form>
                        <div className="flex flex-row items-center justify-center lg:justify-start">
                            <p className="text-lg mb-0 mr-4">LOGIN</p>
                            <GoogleLogin
                                clientId="36374029359-vgceut39avc3v16p44cnn9tsri92oh5p.apps.googleusercontent.com"
                                buttonText={('login')}
                                onSuccess={(res)=>{console.log(res);
                                    handleSocialLogin(res.tokenId)
                                    navigate("/home")
                                }}
                                onFailure={(res)=>console.log(res,"res")}
                                cookiePolicy={'single_host_origin'}
                                isSignedIn={true}
                            />
                        </div>

                        <div
                            className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                        >
                            <p className="text-center font-semibold mx-4 mb-0">Or</p>
                        </div>

                        {/* <!-- Email input --> */}
                        <div className="mb-6">
                            <input
                            type="text"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput2"
                            placeholder="Email address"
                            onChange={e => setEmail(e.target.value)}
                            />
                        </div>

                        {/* <!-- Password input --> */}
                        <div className="mb-6">
                            <input
                            type="password"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput2"
                            placeholder="Password"
                            onChange={e => setPassword(e.target.value)}

                            />
                        </div>

                        <div className="flex justify-between items-center mb-6">
                            <div className="form-group form-check">
                            <input
                                type="checkbox"
                                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                id="exampleCheck2"
                            />
                            <label className="form-check-label inline-block text-gray-800" for="exampleCheck2"
                                >Remember me</label
                            >
                            </div>
                            <a href="#!" className="text-gray-800">Forgot password?</a>
                        </div>

                        <div className="text-center lg:text-left">
                            <button
                                type="button"
                                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                onClick={handleSubmit}
                            >
                            Login
                            </button>
                            <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                            Don't have an account?
                            <a
                                href="/register"
                                className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                >Register</a
                            >
                            </p>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;
  