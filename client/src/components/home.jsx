import React from "react";
import Carousel from "./carousel";
import sideBanner from "../assests/images/sideBanner.png"

function Home() {
    return(
     <div className="page">
        <h1 className="text-center p-4 font-bold text-3xl font-mono">YOUR OWN SPORTS STORE</h1>
        <Carousel/>
        <div className="grid grid-cols-3 gap-4">
        <div class="col-span-2 ...">
            <h1 className="text-center p-2 font-weight-4">Heading 1</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Amet dolorum soluta magni odit optio. Quam numquam dolorum, 
                libero minima non sunt molestias ipsam perspiciatis architecto. 
                Nulla hic magni laudantium dolorem?</p>
        </div>
        <div class="...">
            <img src={sideBanner} alt="sideBanner" />
        </div>
        </div>
    </div>
    )
}

export default Home;
  