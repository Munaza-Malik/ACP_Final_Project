import React from 'react';
import Footer from '../Footer';
import Furniture from '../Furniture';
import a from '../../assets/queenBed1.png'; 
import b from '../../assets/queenBed2.png'; 
import c from '../../assets/queenBed3.png'; 
import d from '../../assets/queenBed4.png'; 
import e from '../../assets/queenBed5.png'; 

const QueenBedsData = [
  { name: "Queen Bed 1", price: "10000Rs", image: a },
  { name: "Queen Bed 2", price: "20000Rs", image: b },
  { name: "Queen Bed 3", price: "30000Rs", image: c },
  { name: "Queen Bed 4", price: "40000Rs", image: d },
  { name: "Queen Bed 5", price: "50000Rs", image: e },
];

function QueenBed({ addToCart }) {
  return (
    <div className="Main">
      <Furniture heading="Queen Bed" furniture={QueenBedsData} addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default QueenBed;
