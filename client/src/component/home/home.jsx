import React, { Component } from "react";
import { API_PATH } from "../../lib/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign, faCog } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import "../../style/home.scss";
import { getStars } from "../../lib/helper";
export default class Home extends Component {
  constructor() {
    super();
    this.scrapTopApps = this.scrapTopApps.bind(this);
  }
  componentDidMount() {
    let url = API_PATH.GET_TOP_APPS();
    this.props.getTopApps({ url });
  }
  scrapTopApps() {
    let url = API_PATH.SCRAP_TOP_APPS();
    this.props.scrapTopApps({ url });
  }
  render() {
    const { topApps, isLoading } = this.props;
    if (isLoading) {
      return <img src="loader.svg" alt="lodaing..." className="loader" />;
    }
    return (
      <React.Fragment>
        <div className="home">
          <div className="container">
            <div className="row justify-content-md-center">
              <div
                onClick={this.scrapTopApps}
                className="btn btn-light "
                data-tip="scrap top apps"
              >
                <FontAwesomeIcon size="2x" icon={faCog} />
              </div>
            </div>
          </div>
          {topApps.map((topApp, index) => {
            return (
              <div className="container" key={index}>
                <h4 className="text-center">{topApp.cluster}</h4>
                <div className="row justify-content-md-center">
                  <div className="card-deck">
                    {topApp.apps.map(app => (
                      <div className="card" key={app.appId}>
                        <img
                          className="card-img-top"
                          src={app.imageUrl}
                          alt="app"
                        />
                        <div className="card-body">
                          <Link
                            to={{
                              pathname: "/appDetails",
                              search: `?pkg=${app.appId}`
                            }}
                            className="card-title"
                          >
                            {app.title}
                          </Link>
                          <p
                            className="card-text text-muted"
                            data-tip={app.developer}
                          >
                            {app.developer}
                          </p>
                          <p className="card-text" data-tip={app.rating}>
                            {getStars(app.rating)}
                          </p>
                          {app.price ? (
                            <p className="card-text">
                              <FontAwesomeIcon icon={faRupeeSign} /> {app.price}
                            </p>
                          ) : (
                            "free"
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <ReactTooltip />
      </React.Fragment>
    );
  }
}
