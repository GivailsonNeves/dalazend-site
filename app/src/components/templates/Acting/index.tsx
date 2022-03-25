import { connect } from "react-redux";
import { RootState } from "../../../store";
import Acting from "./view";

const mapState = (state: RootState) => ({
  actionsData: state.actions,
});

export default connect(mapState)(Acting);
