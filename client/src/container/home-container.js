import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
import Home from "../component/home/home";
import { getTopApps } from "../redux/action/action";
import { transformTopApps } from "../lib/helper";

const mapStateToProps = state => {
  let { isLoadingTopApps, topApps } = state.appData;

  return {
    isLoading: isLoadingTopApps,
    topApps: transformTopApps(topApps)
  };
};

const mapDispatchToProps = dispatch => ({
  getTopApps: reqData => dispatch(getTopApps.request(reqData))
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
