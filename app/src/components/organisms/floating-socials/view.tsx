import { SocialLinks } from "../../../store/models/social-links";
import SocialLinksAtom from "../../atoms/social-links";

import "./styles.scss";

export interface FloatingSocialsProps {
  socialLinks: SocialLinks;
}

const FloatingSocials: React.FC<FloatingSocialsProps> = ({ socialLinks }) => {
  return (
    <div className="floating-socials">
      <a href="#Subscription">
        <span>Subscribe</span>
      </a>
      <div>
        <SocialLinksAtom links={socialLinks} />
      </div>
    </div>
  );
};

export default FloatingSocials;
