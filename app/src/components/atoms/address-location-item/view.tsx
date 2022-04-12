import "./styles.scss";

export interface AddressLocationItemProps {
  title: string;
  text: string;
  number: string;
  state: string;
  map: string;
}

const AddressLocationItem: React.FC<AddressLocationItemProps> = ({
  title,
  text,
  number,
  state,
  map,
}) => {
  return (
    <div className="address-location-item">
      <iframe title={title} src={map} loading="lazy"></iframe>
      <div>
        <p>
          <strong>{title}</strong>
          <a href={`tel:${number}`}>{`${state} ${number}`}</a>
          <span dangerouslySetInnerHTML={{ __html: text }} />
        </p>
      </div>
    </div>
  );
};

export default AddressLocationItem;
