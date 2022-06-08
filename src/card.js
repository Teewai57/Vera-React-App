import React from "react";
import './card.css'

export default function Card() {
    return (
        <div className="row justify-content-around card-content mt-5 mb-1 shadow">
            <div className="col-md-4">
                <div className="card b-none outline-none">
                    <div className="card-body b-none outline-none">
                    <i class="fa fa-lightbulb-o icon mb-3" aria-hidden="true"></i>
                        <h5 className="card-title">Intuitive Thinking</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card b-none outline-none">
                    <div className="card-body b-none outline-none">
                    <i class="fa fa-search-plus icon mb-3" aria-hidden="true"></i>

                        <h5 className="card-title">Search Engines</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card b-none outline-none">
                    <div className="card-body b-none outline-none">
                    <i class="fa fa-spinner icon mb-3" aria-hidden="true"></i>

                        <h5 className="card-title">Infinite Possibilities</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}