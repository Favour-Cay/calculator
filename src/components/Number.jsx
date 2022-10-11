import React from 'react';

const Number = props => {
  console.log(props.count);
  return (
    <td>
      <button style={{ backgroundColor: 'green' }} className='calc-button'>
        {props.count}
      </button>
    </td>
  );
};

export default Number;
