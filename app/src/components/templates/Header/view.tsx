import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

import "./styles.scss";

import Logo from "../../../assets/images/main_logo.png";

interface HeaderProps {
  showNavigation?: boolean;
}

function Header({ showNavigation = true }: HeaderProps) {
  const [offset, setOffset] = useState(0);
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const location = useLocation();
  const [t] = useTranslation();

  useEffect(() => {
    function updateOffset() {
      setOffset(window.pageYOffset);
    }
    window.addEventListener("scroll", updateOffset);
    updateOffset();

    return () => window.removeEventListener("scroll", updateOffset);
  }, [setOffset]);

  const closeMenu = () => setIsNavCollapsed(false);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const renderHREF = (path: string) => {
    return location.pathname === "/" ? path : `/${path}`;
  };

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
            <Nav.Link onClick={closeMenu} href={renderHREF("#Office")}>
              O Escritório
            </Nav.Link>
            <Nav.Link onClick={closeMenu} href={renderHREF("#Acting")}>
              Atuação
            </Nav.Link>
            <Nav.Link onClick={closeMenu} href={renderHREF("#Team")}>
              Equipe
            </Nav.Link>
            <Nav.Link
              onClick={closeMenu}
              href={renderHREF("#Contact")}
              className="last"
            >
              Contato
            </Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

export default Header;
