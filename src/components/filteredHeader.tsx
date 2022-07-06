import React, { Dispatch, SetStateAction } from 'react';
import { selectedHeader, searchBtn } from './common/selectedHeaders';

interface FilteredHeaderProps {
  selectedPropertyType: string;
  setSelectedPropertyType: Dispatch<SetStateAction<string>>;
  selectedPrice: string;
  setSelectedPrice: Dispatch<SetStateAction<string>>;
  selectedLocation: string;
  setSelectedLocation: Dispatch<SetStateAction<string>>;
  selectedDate: string;
  setSelectedDate: Dispatch<SetStateAction<string>>;
  filteredProperties: () => void;
}

const FilteredHeader = ({
  selectedPropertyType,
  setSelectedPropertyType,
  selectedPrice,
  setSelectedPrice,
  selectedLocation,
  setSelectedLocation,
  selectedDate,
  setSelectedDate,
  filteredProperties,
}: FilteredHeaderProps): JSX.Element => {
  return (
    <div className='filter-properties d-flex justify-content-between my-3'>
      {selectedHeader.map((head) => (
        <div className='headers' key={head.path}>
          <h3>{head.title}</h3>
          {head.path === 'location' &&
            head.content(
              selectedLocation,
              (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
                setSelectedLocation(e.target.value)
            )}
          {head.path === 'price' &&
            head.content(
              selectedPrice,
              (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
                setSelectedPrice(e.target.value)
            )}
          {head.path === 'date' &&
            head.content(
              selectedDate,
              (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
                setSelectedDate(e.target.value)
            )}
          {head.path === 'propertyType' &&
            head.content(
              selectedPropertyType,
              (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
                setSelectedPropertyType(e.target.value)
            )}
        </div>
      ))}

      {searchBtn('Search', filteredProperties)}
    </div>
  );
};

export default FilteredHeader;
