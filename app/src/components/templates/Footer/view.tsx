import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import logo from "../,,/../../../assets/images/footer_logo.png";
import { SocialLinks } from "../../../store/models/social-links";
import SocialLinksAtom from "../../atoms/social-links";

import "./styles.scss";

export interface FooterProps {
  socialLinks: SocialLinks;
}

const Footer: React.FC<FooterProps> = ({ socialLinks }) => {
  const [t] = useTranslation();

  return (
    <footer>
      <Container fluid>
        <Row className="footerInfo">
          <Col md={{ offset: 4, span: 4 }} sm={12}>
            <div>
              <img src={logo} alt={t("app.title")} />
            </div>
          </Col>
          <Col sm={12} md={4}>
            <div className="social-links-area">
              <SocialLinksAtom links={socialLinks} />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
