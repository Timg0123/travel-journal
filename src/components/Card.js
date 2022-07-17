import React from 'react';

export default function Card(props) {
  return (
    <div className='Card'>
        <p>Hallo</p>
        <img src={`${props.item.coverImg}`} alt='Cover' />
    </div>
  );
}