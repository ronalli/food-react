import { useState } from 'react';

const Search = ({ cb }) => {
  const [value, setValue] = useState('');

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    cb(value);
  };

  return (
    <div className='row'>
      <div className='input-field col s12'>
        <input
          id='search-field'
          type='search'
          value={value}
          placeholder='search'
          onKeyDown={handleKey}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className='btn'
          onClick={() => handleSubmit()}
          style={{
            position: 'absolute',
            top: '0',
            right: '1rem',
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
