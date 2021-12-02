import React, {useState} from 'react';

export default () => {
  const [phone, setPhone] = useState('');

  return (
    <div>
      <div className='row'>
        <div className='six columns'>
          <label>Phone</label>
          <input
            className='u-full-width'
            placeholder='Phone Number'
            type='text'
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};
