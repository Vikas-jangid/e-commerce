import React from "react";
import Carousel from "./carousel";
import Feature1 from "../assests/images/feature-1.png";
import Feature2 from "../assests/images/feature-2.png";
import Feature3 from "../assests/images/feature-3.png";
import Feature4 from "../assests/images/feature-4.png";
import NewsLetter from "./newsLetter";


function About() {
    return (
        <>
         <div className="grid grid-cols">
            <h1 className="font-bold text-4xl font-mono my-4 ml-auto mr-auto">About Us</h1>
         </div>
         <div className="grid grid-cols">
                <p className="font-mono text-xl text-center leading-loose  p-9">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. 
                    It has roots in a piece of classical Latin literature from 45 BC, 
                    making it over 2000 years old. Richard McClintock, a Latin professor 
                    at Hampden-Sydney College in Virginia, looked up one of the more obscure 
                    Latin words, consectetur, from a Lorem Ipsum passage, and going through the
                    cites of the word in classical literature, discovered the undoubtable source. 
                </p>
         </div>
         
         <div className="container mx-auto grid grid-cols-4 gap-4">
            <div className="mx-auto my-4">
                <img src={Feature1} className="object-scale-down h-20 w-56 animate-pulse" alt="feature-1" />
                <p className="font-bold text-lg m-2 text-center leading-loose">Amazing Value Every Day</p>
                <p className="font-thin text-sm m-2 text-center leading-loose">Items prices that fit your budget.</p>
            </div>
            <div className="mx-auto">
                <img src={Feature2} className="object-scale-down h-20 w-56 animate-pulse" alt="feature-2" />
                <p className="font-bold text-lg m-2 text-center leading-loose">Free Shipping Over $35*</p>
                <p className="font-thin text-sm m-2 text-center leading-loose">Popular delivery on 1 - 2 days</p>
            </div>
            <div className="mx-auto">
                <img src={Feature3} className="object-scale-down h-20 w-56 animate-pulse" alt="feature-3" />
                <p className="font-bold text-lg m-2 text-center leading-loose">Expert Customer Service</p>
                <p className="font-thin text-sm m-2 text-center leading-loose">Our team on hand seven days a week.</p>
            </div>
            <div className="mx-auto">
                <img src={Feature4} className="object-scale-down h-20 w-56 animate-pulse" alt="feature-4" />
                <p className="font-bold text-lg m-2 text-center leading-loose">Unbeatable Selection</p>
                <p className="font-thin text-sm m-2 text-center leading-loose">All things home, all in one place.</p>
            </div>
         </div>
         <div className="grid grid-cols">
            <Carousel />
            <NewsLetter/>
         </div>

        </>
    );
}

export default About;
  