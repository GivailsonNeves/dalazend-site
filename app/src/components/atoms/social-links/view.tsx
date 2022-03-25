// import face from "../,,/../../../assets/images/face.svg";
// import instagram from "../,,/../../../assets/images/instagram.svg";
// import Linkedin from "../,,/../../../assets/images/Linkedin.svg";
// import twitter from "../,,/../../../assets/images/twitter.svg";
// import whatsapp from "../,,/../../../assets/images/whatsapp.svg";
// import youtube from "../,,/../../../assets/images/youtube.svg";
// import calendly from "../,,/../../../assets/images/schedule_mark.png";
import {
  FaCalendarAlt,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaWhatsappSquare,
  FaYoutube,
} from "react-icons/fa";

import { SocialLinks } from "../../../store/models/social-links";

import "./styles.scss";

export interface SocialLinksProps {
  links: SocialLinks;
}

const SocialLinksAtom: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className={`socialButtons`}>
      {links.twitter && (
        <a rel="noreferrer" href={links.twitter} target="_blank">
          <FaTwitterSquare />
        </a>
      )}
      {links.instagram && (
        <a rel="noreferrer" href={links.instagram} target="_blank">
          <FaInstagramSquare />
        </a>
      )}
      {links.facebook && (
        <a rel="noreferrer" href={links.facebook} target="_blank">
          <FaFacebookSquare />
        </a>
      )}
      {links.youtube && (
        <a rel="noreferrer" href={links.youtube} target="_blank">
          <FaYoutube />
        </a>
      )}
      {links.linkedin && (
        <a rel="noreferrer" href={links.linkedin} target="_blank">
          <FaLinkedin />
        </a>
      )}
      {links.whatsapp && (
        <a rel="noreferrer" href={links.whatsapp} target="_blank">
          <FaWhatsappSquare />
        </a>
      )}
      {links.calendly && (
        <a rel="noreferrer" href={links.calendly} target="_blank">
          <FaCalendarAlt />
        </a>
      )}
    </div>
  );
};

export default SocialLinksAtom;
