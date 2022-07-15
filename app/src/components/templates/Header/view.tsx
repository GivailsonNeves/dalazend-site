import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

import "./styles.scss";

import Logo from "../../../assets/images/main_logo.png";

interface HeaderProps {
  showNavigation?: boolean;
  offset: number;
}

function Header({ offset, showNavigation = true }: HeaderProps) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const location = useLocation();
  const [t, i18n] = useTranslation();

  const closeMenu = (event: any, elementName: string) => {
    event.preventDefault();
    const scrollTop = document.getElementById(elementName)?.offsetTop || 0;
    window.scrollTo(0, scrollTop - 120 || 0);

    setIsNavCollapsed(false);
    return false;
  };
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const renderHREF = (path: string) => {
    return location.pathname === "/" ? path : `/${path}`;
  };
  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

  return (
    <div className={`header ${offset > 30 ? "over" : ""}`}>
      <Container>
        <Navbar expand="lg" expanded={isNavCollapsed} className="navbar">
          <Navbar.Brand>
            <Link className="title" to="/">
              <img src={Logo} alt={t("general.site-title")} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={handleNavCollapse}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav.Link
              onClick={(event: any) => closeMenu(event, "Office")}
              href={renderHREF("#Office")}
            >
              {t("menu.the-office")}
            </Nav.Link>
            <Nav.Link
              onClick={(event: any) => closeMenu(event, "Acting")}
              href={renderHREF("#Acting")}
            >
              {t("menu.actions")}
            </Nav.Link>
            <Nav.Link
              onClick={(event: any) => closeMenu(event, "Team")}
              href={renderHREF("#Team")}
            >
              {t("menu.team")}
            </Nav.Link>
            <Nav.Link
              onClick={(event: any) => closeMenu(event, "Contact")}
              href={renderHREF("#Contact")}
              className="last"
            >
              {t("menu.contact")}
            </Nav.Link>
          </Navbar.Collapse>
          <span className="language-switcher">
            <a
              onClick={() => changeLanguage("eng")}
              className={i18n.language === "eng" ? "active" : ""}
            >
              EN
            </a>{" "}
            |{" "}
            <a
              onClick={() => changeLanguage("ptBR")}
              className={i18n.language === "ptBR" ? "active" : ""}
            >
              PT
            </a>
          </span>
        </Navbar>
      </Container>
    </div>
  );
}

export default Header;
