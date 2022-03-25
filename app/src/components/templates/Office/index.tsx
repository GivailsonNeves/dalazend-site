import { connect } from "react-redux";
import { RootState } from "../../../store";
import Office from "./view";

const mapState = (state: RootState) => ({
  officeData: state.office,
});

export default connect(mapState)(Office);
