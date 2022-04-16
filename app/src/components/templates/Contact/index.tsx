import { connect } from "react-redux";
import { Dispatch, RootState } from "../../../store";
import Contact from "./view";

const mapDispatch = (dispatch: Dispatch) => ({
  sendContact: async (subcribeData: any) =>
    dispatch.contact.sendAsync(subcribeData),
});

const mapState = (state: RootState) => ({
  contactData: state.contact,
});

export default connect(mapState, mapDispatch)(Contact);
