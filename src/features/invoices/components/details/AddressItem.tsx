interface AddressItemProps {
  street: string;
  city: string;
  postCode: string;
  country: string;
}
const AddressItem = ({ street, city, postCode, country }: AddressItemProps) => {
  return (
    <address className="text-body text-text-secondary not-italic">
      <p>{street}</p>
      <p>{city}</p>
      <p>{postCode}</p>
      <p>{country}</p>
    </address>
  );
};

export default AddressItem;
