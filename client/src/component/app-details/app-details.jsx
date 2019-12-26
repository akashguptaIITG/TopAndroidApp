import React, { Component } from "react";
import queryString from "query-string";
import { API_PATH } from "../../lib/constant";
import "../../style/app-details.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { getStars } from "../../lib/helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import ReactTooltip from "react-tooltip";

export default class AppDetails extends Component {
  componentDidMount() {
    let queryParams = queryString.parse(this.props.location.search);
    let url = API_PATH.GET_APP_DETAILS(queryParams.pkg);
    this.props.getAppDetails({ url });
  }
  render() {
    const { appDetails, isLoading } = this.props;
    if (isLoading || !appDetails || !Object.keys(appDetails).length) {
      return <img src="loader.svg" alt="lodaing..." className="loader" />;
    }
    return (
      <div className="app-details">
        <div className="container ">
          <div className="card">
            <div className="row justify-content-md-center">
              <div className="col-md-4">
                <img
                  className="card-img-top"
                  src={appDetails.imageUrl}
                  alt="app"
                />
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-8">
                    <div className="card-body">
                      <div className="card-title">
                        <h3>{appDetails.title}</h3>
                      </div>
                      <p
                        className="card-text text-muted"
                        data-tip={appDetails.developer}
                      >
                        {appDetails.developer}
                      </p>
                      <p
                        className="card-text text-muted"
                        data-tip={appDetails.category}
                      >
                        {appDetails.category}
                      </p>
                      <p className="card-text" data-tip={appDetails.rating}>
                        {getStars(appDetails.rating)}
                      </p>
                      <p className="card-text">
                        {appDetails.numOfRatings + " "}
                        <FontAwesomeIcon icon={faUsers} />
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 myCarousel">
                    <Carousel
                      showArrows={true}
                      showIndicators={true}
                      showThumbs={false}
                      width="180px"
                      labels={true}
                      interval={1000}
                      autoPlay={true}
                    >
                      {appDetails.screenshots.map((screenshotUrl, index) => (
                        <div key={index}>
                          <img src={screenshotUrl} alt="screenshot..." />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ReactTooltip />
        </div>
      </div>
    );
  }
}
