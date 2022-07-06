import { useState, useEffect } from 'react';
import _ from 'lodash';
import Property from '../models/Property';
import propertiesSerivces from '../services/propertiesServices';
import SingleProperty from './property';
import FilteredHeader from './filteredHeader';

const Properties = (): JSX.Element => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [selectedPropertyType, setSelectedPropertyType] =
    useState<string>('House');
  const [selectedPrice, setSelectedPrice] = useState<string>('2000-3000');
  const [selectedLocation, setSelectedLocation] = useState<string>('USA');
  const [selectedDate, setSelectedDate] = useState<string>('2022-02-03');

  const filteredProperties = () => {
    if (
      selectedPrice ||
      selectedPropertyType ||
      selectedLocation ||
      selectedDate
    ) {
      const price = selectedPrice.split('-');
      if (price.length !== 2) return null;

      const properties = propertiesSerivces();

      const filterByProperty = _.filter(properties, function (property) {
        return (
          property.propertyType.name === selectedPropertyType &&
          property.price >= parseInt(price[0]) &&
          property.price <= parseInt(price[1]) &&
          property.location.includes(selectedLocation) &&
          property.date === selectedDate
        );
      });
      setProperties(filterByProperty);
    }
  };

  const getProperties = () => {
    setProperties(propertiesSerivces());
  };

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <div className='properties'>
      <FilteredHeader
        selectedPropertyType={selectedPropertyType}
        setSelectedPropertyType={setSelectedPropertyType}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        filteredProperties={filteredProperties}
      />
      <SingleProperty properties={properties} />
    </div>
  );
};

export default Properties;
