import { connect } from "react-redux";
import { RootState } from "../../../store";
import About from "./view";

const mapState = (state: RootState) => ({
  aboutData: state.about,
});
export default connect(mapState)(About);
