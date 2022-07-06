import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import Property from '../../models/Property';

interface InputProps {
  properties: Property[];
  setProperties: Dispatch<SetStateAction<Property[]>>;
}

const Header = ({ properties, setProperties }: InputProps): JSX.Element => {
  const [value, setValue] = useState<string>('');

  const getSearchedProperties = () => {
    const result = properties.filter(
      (property) =>
        property.title.toLowerCase().includes(value.toLowerCase()) ||
        property.location.toLowerCase().includes(value.toLowerCase()) ||
        property.price.toString().includes(value.toString())
    );
    setProperties(result);
  };

  useEffect(() => {
    getSearchedProperties();
  }, [value]);

  return (
    <div className='row my-2'>
      <div className='col-sm-6'>
        <h1>Search properties to rent</h1>
      </div>
      <div className='col-sm-6 d-flex flex-row-reverse'>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type='text'
          placeholder='Search properties'
          className='form-control'
          style={{ width: '50%' }}
        />
      </div>
    </div>
  );
};

export default Header;
