import React, { Component } from 'react';
import Slider from "react-slick";
import StarRatingComponent from 'react-star-rating-component';

class AppSlider extends Component {

    render() { 

        const filteredAppList = this.props.appList.filter(app => app.appChains.includes(this.props.wallet));

        return (
            <div className="container text-white bg-dark py-3">
            <div className="pb-3"><h5> {this.props.category} </h5></div>
                <Slider dots={false}
                        infinite={true}
                        speed={500}
                        slidesToShow={(filteredAppList.length < 6)? filteredAppList.length : 6}
                        slidesToScroll={1}
                        swipeToSlide={true}
                        draggable={true}
                        centerPadding={'0px'} >
                    {filteredAppList.map(app => (
                        <div className="card text-white bg-dark text-center">
                            <div className={app.tag} pt-3 >{app.tag === "none" ? "" : app.tag} </div>
                            <div className="card-header pt-3 pb-0">
                                <center>
                                <img src={"https://" + app.appURL}  className="img-fluid bg-dark border-0" style={{height: "50px"}} alt="..." />
                                </center>
                            </div>
                            <div className="card-body pb-0" style={{height: "100px"}}>
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
                                <a href={"https://" + app.appURL} className="btn btn-primary">Launch</a>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}
 
export default AppSlider;