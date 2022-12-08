import React from "react";
import newsLetterImg from "../assests/images/newsLetter.jpg";
import sendIcon from "../assests/images/icons8-send-64.png"

function newsLetter() {
    return( 
        <>
            <div className="page">
                <div className="search-page bg-local bg-no-repeat bg-cover" style={{backgroundImage:`url(${newsLetterImg})`}}>
                  <div className="grid grid-cols-2 gap-5">
                    <div className="p-10 my-10">
                        <h1 className="font-bold font-mono text-lg text-white leading-loose">Join our newsletter and get....</h1>
                        <p className="font-thin font-mono text-sm text-white  leading-loose">Join our email subscription now to get updates on promotions and coupons.</p>
                        <input type="email" name="price" id="price" class="p-2 rounded-full my-4 block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="your email here....." />
                        <button class="bg-blue-500 float-right hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full">Send</button>
                    </div>
                  </div>

                </div>
            </div>
        </>
    )
}

export default newsLetter;
  