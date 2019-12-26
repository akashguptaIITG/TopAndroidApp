import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Home from "../component/home/home";
import { getTopApps, scrapTopApps } from "../redux/action/action";
import { transformTopApps } from "../lib/helper";

const mapStateToProps = state => {
  let { isLoadingTopApps, isScrappingTopApps, topApps } = state.appData;

  return {
    isLoading: isLoadingTopApps || isScrappingTopApps,
    topApps: transformTopApps(topApps)
  };
};

const mapDispatchToProps = dispatch => ({
  getTopApps: reqData => dispatch(getTopApps.request(reqData)),
  scrapTopApps: reqData => dispatch(scrapTopApps.request(reqData))
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
