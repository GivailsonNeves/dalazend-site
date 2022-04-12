import { useTranslation } from "react-i18next";

import "./styles.scss";

export type TeamMemberProps = {
  picture: string;
  content: any;
  selected: boolean;
  index: number | string;
  onSelected: (index: number | string) => void;
};

const TeamMember: React.FC<TeamMemberProps> = ({
  picture,
  content,
  onSelected,
  index,
  selected,
}) => {
  const hdlSelect = () => onSelected(index);
  const [, i18n] = useTranslation();
  const { title, text } = content[i18n.language];

  return (
    <div className={["team-member", selected ? "visible" : ""].join(" ")}>
      <div onClick={hdlSelect} onMouseOver={hdlSelect}>
        <img src={picture} alt={title} />
        <h3>{title}</h3>
      </div>
      <div
        className={["description"].join(" ")}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};
export default TeamMember;
