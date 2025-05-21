import React from 'react';
import Footer from '../Footer';
import Furniture from '../Furniture';
import a from '../../assets/crownBed1.png'; 
import b from '../../assets/crownBed2.png'; 
import c from '../../assets/crownBed3.png'; 
import d from '../../assets/crownBed4.png'; 
import e from '../../assets/crownBed5.png'; 

const CrownBedsData = [
  { name: "Crown Bed 1", price: "10000Rs", image: a },
  { name: "Crown Bed 2", price: "20000Rs", image: b },
  { name: "Crown Bed 3", price: "30000Rs", image: c },
  { name: "Crown Bed 4", price: "40000Rs", image: d },
  { name: "Crown Bed 5", price: "50000Rs", image: e },
];

function CrownBed({ addToCart }) {
  return (
    <div className="Main">
      <Furniture heading="Crown Bed" furniture={CrownBedsData} addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default CrownBed;
