export default interface Property {
  id: string;
  title: string;
  price: number;
  img: string;
  location: string;
  date: string;
  propertyType: {
    name: string;
    rooms: number;
    bathrooms: number;
    area: string;
  };
  popular?: boolean;
}
