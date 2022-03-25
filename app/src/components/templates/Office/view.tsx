import { Carousel, Col, Container, Row } from "react-bootstrap";

import "./styles.scss";

import { useTranslation } from "react-i18next";

export interface OfficeProps {
  officeData: any;
}

const Office: React.FC<OfficeProps> = ({ officeData }) => {
  const [_, i18n] = useTranslation();
  const { title, text } = officeData.content[i18n.language];
  const { gallery } = officeData;
  return (
    <section id="Office" className="Office">
      <Container>
        <h2 className="lined">{title}</h2>
        <Row>
          <Col md={6} sm={12}>
            <div
              className="black-text mb-5"
              dangerouslySetInnerHTML={{
                __html: text,
              }}
            />
          </Col>
          <Col md={6} sm={12}>
            <div className="carousel-area">
              <Carousel fade>
                {gallery.map((g: any, index: number) => (
                  <Carousel.Item>
                    <figure>
                      <img
                        className="d-block w-100"
                        src={g.path}
                        alt={`escritório ${index}`}
                      />
                    </figure>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Office;
