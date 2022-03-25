import { Col, Row, Container } from "react-bootstrap";
import AddressLocationItem from "../../atoms/address-location-item";

import "./styles.scss";

export interface AddressLocationProps {
  locationData: any;
}

const AddressLocation: React.FC<AddressLocationProps> = ({ locationData }) => {
  return (
    <section id="AddressLocation" className="AddressLocation">
      <Container>
        <Row className="justify-content-center">
          {locationData.map((address: any, index: number) => (
            <Col key={index} sm={12} md={4}>
              <AddressLocationItem {...address} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default AddressLocation;
