export const selectedHeader = [
  {
    path: 'location',
    title: 'Location',
    content: (value: string, setValue: any) => (
      <select value={value} onChange={setValue} className='form-select'>
        <option value='USA'>USA</option>
        <option value='UK'>UK</option>
        <option value='Peru'>Peru</option>
        <option value='Romania'>Romania</option>
      </select>
    ),
  },
  {
    path: 'date',
    title: 'Select Move-in Date',
    content: (value: string, setValue: any) => (
      <select value={value} onChange={setValue} className='form-select'>
        <option value='2022-02-03'>2022-02-03</option>
        <option value='2022-05-02'>2022-05-02</option>
        <option value='2022-01-10'>2022-01-10</option>
      </select>
    ),
  },
  {
    path: 'price',
    title: 'Price',
    content: (value: string, setValue: any) => (
      <select value={value} onChange={setValue} className='form-select'>
        <option value='2000-3000'>$2000-$3000</option>
        <option value='3000-4000'>$3000-$4000</option>
        <option value='4000-5000'>$4000-$5000</option>
      </select>
    ),
  },
  {
    path: 'propertyType',
    title: 'Property Type',
    content: (value: string, setValue: any) => (
      <select value={value} onChange={setValue} className='form-select'>
        <option value='House'>Houses</option>
        <option value='Workspace'>Workspaces</option>
      </select>
    ),
  },
];

export const searchBtn = (title: string, value: React.MouseEventHandler) => {
  return (
    <button
      onClick={value}
      style={{ width: '20%', cursor: 'pointer' }}
      className='btn btn-success filter-search'
    >
      {title}
    </button>
  );
};
