import React, { Component } from 'react';
import Slider from "react-slick";
import StarRatingComponent from 'react-star-rating-component';
import CornerRibbon from "react-corner-ribbon";

class AppSlider extends Component {

    render() { 

        const filteredAppList = this.props.appList.filter(app => app.appChains.includes(this.props.wallet));

        return (
            <div className="container text-white bg-dark py-3">
            <h5> {this.props.category} </h5>
                <Slider dots={false}
                        infinite={true}
                        speed={500}
                        slidesToShow={(filteredAppList.length < 5)? filteredAppList.length : 5}
                        slidesToScroll={1}
                        swipeToSlide={true}
                        draggable={true}
                        centerPadding={'0px'}
                        adaptiveHeight={true} >
                    {filteredAppList.map(app => (
                        <div className="card text-white bg-dark text-center">
                            <div className="card-header pb-0">
                            <CornerRibbon
                                position="top-left" // OPTIONAL, default as "top-right"
                                fontColor="#f0f0f0" // OPTIONAL, default as "#f0f0f0"
                                backgroundColor="#2c7" // OPTIONAL, default as "#2c7"
                                containerStyle={{}} // OPTIONAL, style of the ribbon
                                style={{}} // OPTIONAL, style of ribbon content
                                className="" // OPTIONAL, css class of ribbon
                                >
                            <center>
                            <img src={"https://" + app.appURL + "/favicon.ico"}  className="img-fluid bg-dark border-0" alt="..." />
                            </center>
                            </CornerRibbon>
                            </div>
                            <div className="card-body pb-0">
                                <h5 className="card-title">{app.appName}</h5>
                                <StarRatingComponent 
                                    name="rating"
                                    starCount={5}
                                    value={app.appRating}
                                    starColor="#5cb85c"
                                    emptyStarColor="#757575"
                                />
                            </div>
                            <div className="card-footer">
                                <a href={"https://" + app.appURL} className="btn btn-primary">Launch App</a>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}
 
export default AppSlider;