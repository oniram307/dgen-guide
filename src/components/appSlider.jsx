import React, { Component } from 'react';
import Slider from "react-slick";

class AppSlider extends Component {

    render() { 

        //const slidesToShow = (this.props.slides.length < 3)? this.props.slides.length : 3;

        return (
            <div className="container text-white bg-dark py-3">
            <h5> {this.props.category} </h5>
                <Slider dots={false}
                        infinite={true}
                        speed={500}
                        slidesToShow={5}
                        slidesToScroll={1}
                        swipeToSlide={true}
                        draggable={true}
                        centerPadding={'0px'}
                        adaptiveHeight={true} />
                    {this.props.appList.filter(app => app.appChains.includes(this.props.wallet)).map(app => (
                    //<div key={app.appName} className="container">
                        <div className="card text-white bg-dark text-center">
                            <div className="card-header pb-0">
                            <center>
                            <img src={"https://" + app.appURL + "/favicon.ico"}  className="img-thumbnail bg-dark border-0" alt="..."/>
                            </center>
                            </div>
                            <div className="card-body pb-0">
                                <h5 className="card-title">{app.appName}</h5>
                            </div>
                            <div className="card-footer">
                                <a href={"https://" + app.appURL} className="btn btn-primary">Launch App</a>
                            </div>
                        </div>
                    //</div>
                    ))}
                </Slider>
            </div>
        );
    }
}
 
export default AppSlider;