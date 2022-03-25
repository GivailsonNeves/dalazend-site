import { connect } from "react-redux";
import { RootState } from "../../../store";
import FloatingSocials from "./view";

const mapState = (state: RootState) => ({
    socialLinks: state.socialLinks
})

export default connect(mapState)(FloatingSocials)