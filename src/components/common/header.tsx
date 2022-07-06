const Header = (): JSX.Element => {
  return (
    <div className='row my-2'>
      <div className='col-sm-6'>
        <h1>Search properties to rent</h1>
      </div>
      <div className='col-sm-6 d-flex flex-row-reverse'>
        <input
          type='text'
          placeholder='Search with Search Bar'
          className='form-control'
          style={{ width: '50%' }}
        />
      </div>
    </div>
  );
};

export default Header;
