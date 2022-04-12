import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import "./styles.scss";

import Background from "../../../assets/images/background.png";

export interface AboutProps {
  aboutData: any;
}

const About: React.FC<AboutProps> = ({ aboutData }) => {
  const [t, i18n] = useTranslation();
  const { text } = aboutData.content[i18n.language];
  return (
    <section id="About" className="About">
      <div className="background">
        <img src={Background} alt={t("general.site-title")} />
      </div>
      <Container>
        {/* <h2>{title}</h2> */}
        <Row>
          <Col sm={12} md={6}>
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: text,
              }}
            />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
