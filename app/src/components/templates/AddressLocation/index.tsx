import { connect } from "react-redux";
import { RootState } from "../../../store";
import AddressLocation from "./view";

const mapState = (state: RootState) => ({
  locationData: state.address,
});

export default connect(mapState)(AddressLocation);
