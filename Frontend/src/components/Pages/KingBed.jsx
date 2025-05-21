import React from 'react';
import Footer from '../Footer';
import Furniture from '../Furniture';
import a from '../../assets/kingBed1.png'; 
import b from '../../assets/kingBed2.png'; 
import c from '../../assets/kingBed3.png'; 
import d from '../../assets/kingBed4.png'; 
import e from '../../assets/kingBed5.png'; 

const KingBedsData = [
  { name: "King Bed 1", price: "10000Rs", image: a },
  { name: "King Bed 2", price: "20000Rs", image: b },
  { name: "King Bed 3", price: "30000Rs", image: c },
  { name: "King Bed 4", price: "40000Rs", image: d },
  { name: "King Bed 5", price: "50000Rs", image: e },
];

function KingBed({ addToCart }) {
  return (
    <div className="Main">
      <Furniture heading="King Bed" furniture={KingBedsData} addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default KingBed;
