import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import TeamMember from "../../molecules/team-member";

import "./styles.scss";

export interface TeamProps {
  teamData?: any;
}

const Team: React.FC<TeamProps> = ({ teamData }) => {
  const [selected, setSelected] = useState<string | number>(-1);
  const [t] = useTranslation();
  const { associado, socio } = teamData.team;
  return (
    <section className="Team" id="Team">
      {/* <div style={{ background: "#f0ebe8" }}>
        <Container>
          <h2>{title}</h2>
        </Container>
      </div> */}
      <div className="area-call">
        <Container>
          <h2>{t(`team.title`)}</h2>
        </Container>
        {/* <Container dangerouslySetInnerHTML={{ __html: text }} /> */}
      </div>
      <Container className="group-members">
        <React.Fragment>
          <h2>{t(`team.socio`)}</h2>
          <Row>
            {socio.map((member: any, key: number) => (
              <Col key={key} md={4}>
                <TeamMember
                  {...member}
                  index={`0${key}`}
                  onSelected={setSelected}
                  selected={selected === `0${key}`}
                />
              </Col>
            ))}
          </Row>
        </React.Fragment>
        <React.Fragment>
          <h2>{t(`team.associado`)}</h2>
          <Row>
            {associado.map((member: any, key: number) => (
              <Col key={key} md={4}>
                <TeamMember
                  {...member}
                  index={`1${key}`}
                  onSelected={setSelected}
                  selected={selected === `1${key}`}
                />
              </Col>
            ))}
          </Row>
        </React.Fragment>
      </Container>
    </section>
  );
};

export default Team;
