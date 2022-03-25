import { connect } from "react-redux";
import { RootState } from "../../../store";
import Footer from "./view";

const mapState = (state: RootState) => ({
    socialLinks: state.socialLinks
})

export default connect(mapState)(Footer)