import { Button, Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import ActingItem from "../../atoms/acting-item";

import "./styles.scss";

export interface ActingProps {
  actionsData?: any;
}

const Acting: React.FC<ActingProps> = ({ actionsData }) => {
  const [t, i18n] = useTranslation();
  const { title, text } = actionsData.content[i18n.language];
  const { actions } = actionsData;
  const location = useLocation();

  const renderHREF = (path: string) => {
    return location.pathname === "/" ? path : `/${path}`;
  };

  return (
    <section id="Acting" className="Acting">
      <div className="header-acting">
        <Container>
          <h2 className="lined">{title}</h2>
          <Row>
            <Col md={10}>
              <div
                className="call"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </Col>
            <Col className="text-right">
              <Button href={renderHREF("#Contact")}>
                {t("acting.button")}
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="actings">
        <div className="cabecalho">
          <div className="infoname-md">
            <h3>
              {/* <GiPassport /> */}
              {t("acting.trabalhista")}
              <span />
              {/* <GiInjustice />  */}
              {t("acting.tributario")}
            </h3>
            <Row>
              <Col></Col>
              <Col></Col>
            </Row>
          </div>
          <Row>
            {actions?.trabalhista?.length &&
              actions?.trabalhista.map((a: any, index: number) => (
                <Col xs={12} md={12} key={index}>
                  <ActingItem {...a} />
                </Col>
              ))}
            {actions?.tributario?.length &&
              actions?.tributario.map((a: any, index: number) => (
                <Col xs={12} key={index} md={12}>
                  <ActingItem {...a} />
                </Col>
              ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Acting;
