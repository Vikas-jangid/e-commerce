import React from "react";
import Carousel from "./carousel";
import sideBanner from "../assests/images/sideBanner.png"
import Search from "./search";
import NewsLetter from "./newsLetter";

function Home() {
    return(
     <div className="page">
        <Search />

        <Carousel/>
        <div className="grid grid-cols-2 gap-4">
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
            <div className="ml-auto mr-auto">
                <img src={sideBanner} alt="sideBanner" className="animate-pulse"/>
            </div>
        </div>
        <NewsLetter />
    </div>
    )
}

export default Home;
  