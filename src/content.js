import React from "react";
import './content.css'
import Image from './images.png'


export default function Content() {
    return(
        <div className="row mt-5">
            <div className="col-md-6 justify-self-center">
                <div className="content">
                    <h1>Design a better <br></br> website template </h1>
                    <p className="w-70 mt-3">Giving you the best tools to work it to build better templates <br></br> Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <button className="btn btn-primary pl-5 pr-5 pt-2 pb-2 mt-2">
                    FREE DOWNLOAD
                </button>
                </div>
            </div>
            <div className="col-md-6 content-img justify-self-center">
                <img src={Image} alt="Vera Image"></img>
                <a href="https://www.youtube.com/watch?v=xfQItZABQBA&t=5s"><i class="fa fa-youtube-play play" aria-hidden="true"></i></a>
            </div>
        </div>
    )
}