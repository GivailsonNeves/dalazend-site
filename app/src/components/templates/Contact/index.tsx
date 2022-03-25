import { connect } from "react-redux";
import { Dispatch, RootState } from "../../../store";
import Contact from "./view";

const mapDispatch = (dispatch: Dispatch) => ({
  sendSubscribe: async (subcribeData: any) =>
    dispatch.subscribe.sendAsync(subcribeData),
});

const mapState = (state: RootState) => ({
  contactData: state.contact,
});

export default connect(mapState, mapDispatch)(Contact);
