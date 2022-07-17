import React from 'react';
import data from './data';
import Card from './components/Card.js';
import './index.css';

export default function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div className='App'>
      {cards}
    </div>
  );
}