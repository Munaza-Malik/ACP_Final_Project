import React from 'react';
import Footer from '../Footer';
import Furniture from '../Furniture';
import a from '../../assets/glassDoor1.png'; 
import b from '../../assets/glassDoor2.png'; 
import c from '../../assets/glassDoor3.png'; 
import d from '../../assets/glassDoor4.png'; 
import e from '../../assets/glassDoor5.png'; 

const GlassDoorsData = [
  { name: "Glass Door 1", price: "10000Rs", image: a },
  { name: "Glass Door 2", price: "20000Rs", image: b },
  { name: "Glass Door 3", price: "30000Rs", image: c },
  { name: "Glass Door 4", price: "40000Rs", image: d },
  { name: "Glass Door 5", price: "50000Rs", image: e },
];

function GlassDoor({ addToCart }) {
  return (
    <div className="Main">
      <Furniture heading="Glass Door" furniture={GlassDoorsData} addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default GlassDoor;
