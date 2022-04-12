import { useTranslation } from "react-i18next";
import "./styles.scss";

export interface ActingItemProps {
  content: any;
}

const ActingItem: React.FC<ActingItemProps> = ({ content }) => {
  //@ts-ignore
  const [, i18n] = useTranslation();
  const { title, text } = content[i18n.language];
  return (
    <div className="acting-item">
      <h4>{title}</h4>
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

export default ActingItem;
