import React, { Component } from "react";
import { API_PATH } from "../../lib/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import "../../style/home.css";
export default class Home extends Component {
  componentDidMount() {
    let url = API_PATH.GET_TOP_APPS();
    this.props.getTopApps({ url });
  }
  render() {
    const { topApps, isLoading } = this.props;
    if (isLoading) {
      return <img src="loader.png" alt="lodaing..." className="loader" />;
    }
    return (
      <React.Fragment>
        {topApps.map(topApp => {
          return (
            <div className="container">
              <h4 className="text-center">{topApp.cluster}</h4>
              <div className="row justify-content-md-center">
                <div className="card-deck">
                  {topApp.apps.map(app => (
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={app.imageUrl}
                        alt="app"
                      />
                      <div className="card-body">
                        <p className="card-title">{app.title}</p>
                        <p className="card-text text-muted">{app.developer}</p>
                        <p className="card-text">
                          {Array(Math.floor(app.rating)).fill(
                            <FontAwesomeIcon icon={faStar} />
                          )}
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
      </React.Fragment>
    );
  }
}
