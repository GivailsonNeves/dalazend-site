import { connect } from "react-redux";
import { RootState } from "../../../store";
import Team from "./view";

const mapState = (state: RootState) => ({
  teamData: state.team,
});

export default connect(mapState)(Team);
