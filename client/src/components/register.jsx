/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useState} from "react";
import loginImage from "../assests/images/login.webp";
import googleIcon from "../assests/images/google-icon.svg";


function Signup() {
    const [first_name, setFirstName] = useState();
    const [last_name, setLastName] = useState();
    const [user_name, setUserName] = useState();
    const [mobile_number, setMobileNumber] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const handleSubmit = () => {
        // console.log(email, "email");
        // console.log(password, "password");

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
                        <div className="flex flex-row items-center justify-center lg:justify-center">
                            <p className="text-lg font-bold">Create Your Account</p>
                        </div>
                        <div className="flex my-2 flex-row items-center justify-center lg:justify-start">
                            <p>Signup With Google</p>
                            <button
                            type="button"
                            className="inline-block p-3 mx-3 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md"
                            >
                              <img src={googleIcon}  alt="googleIcon" viewBox="0 0 320 512" className="w-4 h-4"/>
                            </button>
                        </div>

                        <div
                            className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                        >
                        </div>

                        <div className="mb-6">
                            <input
                            name="first_name"
                            type="text"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="first_name"
                            placeholder="First Name"
                            // onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <input
                            name="last_name"
                            type="text"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="last_name"
                            placeholder="Last Name"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                            name="email"
                            type="email"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="email"
                            placeholder="Email address"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                            name="user_name"
                            type="text"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="user_name"
                            placeholder="User Name"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                            name="mobile_number"
                            type="text"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="mobile_number"
                            placeholder="Mobile Number"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                            name="password"
                            type="password"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="password"
                            placeholder="Password"
                            // onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <input
                            name="confirm_password"
                            type="password"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="confirm_password"
                            placeholder="Confirm Password"
                            // onChange={e => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="text-center lg:text-left">
                            <button
                                type="button"
                                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                onClick={handleSubmit}
                            >
                            Signup
                            </button>
                            <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                            have an account?
                            <a
                                href="/login"
                                className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                >Login</a
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

export default Signup;
  