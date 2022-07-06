import Property from '../models/Property';

interface PropertyProps {
  properties: Property[];
}

const SingleProperty = ({ properties }: PropertyProps): JSX.Element => {
  const data =
    properties.length > 1 ? (
      <p>{properties.length} properties showing</p>
    ) : properties.length === 1 ? (
      <p>{properties.length} properties showing</p>
    ) : (
      <p>No properties to show</p>
    );
  return (
    <div className='row'>
      <span>{data}</span>
      {properties.map((property) => (
        <div className='col-sm-4 my-1' key={property.id}>
          <div className='card '>
            <img src={property.img} alt='' />
            <div className='card-body'>
              <p className='popular'>{property.popular && 'Popular'}</p>
              <h4 className='price'>
                {property.price}
                <span className='month'>/month</span>{' '}
              </h4>
              <h4 className='card-title'>{property.title}</h4>
              <p>{property.location}</p>
              <hr />
              <div className='property-type-items d-flex justify-content-between'>
                <span>
                  {property.propertyType.rooms}{' '}
                  {property.propertyType.name === 'House' ? 'beds' : 'rooms'}{' '}
                </span>
                <span>{property.propertyType.bathrooms} bathrooms</span>
                <span>
                  {property.propertyType.area}m<sup>2</sup>
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleProperty;
