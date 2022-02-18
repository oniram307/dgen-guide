import React, { Component } from 'react';
import Slider from "react-slick";
import StarRatingComponent from 'react-star-rating-component';

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
                            <div className="card-header pb-0 h-100" style={{height: '500px;'}}>
                                <center>
                                <img src={"https://" + app.appURL + "/favicon.ico"}  className="img-fluid bg-dark border-0" alt="..." />
                                </center>
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