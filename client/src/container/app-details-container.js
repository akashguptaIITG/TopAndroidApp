import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import AppDetails from "../component/app-details/app-details";
import { getAppDetails } from "../redux/action/action";

const mapStateToProps = state => {
  let { isLoadingAppDetails, isScrapping, appDetails } = state.appData;

  return {
    isLoading: isLoadingAppDetails || isScrapping,
    appDetails
  };
};

const mapDispatchToProps = dispatch => ({
  getAppDetails: reqData => dispatch(getAppDetails.request(reqData))
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AppDetails)
);
