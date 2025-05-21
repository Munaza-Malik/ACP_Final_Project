import React from 'react';
import Footer from '../Footer';
import Furniture from '../Furniture';
import a from '../../assets/glassDining1.png'; 
import b from '../../assets/glassDining2.png'; 
import c from '../../assets/glassDining3.png'; 
import d from '../../assets/glassDining4.png'; 
import e from '../../assets/glassDining5.png'; 

const GlassDiningData = [
  { name: "Glass Dining 1", price: "10000Rs", image: a },
  { name: "Glass Dining 2", price: "20000Rs", image: b },
  { name: "Glass Dining 3", price: "30000Rs", image: c },
  { name: "Glass Dining 4", price: "40000Rs", image: d },
  { name: "Glass Dining 5", price: "50000Rs", image: e },
];

function GlassDining({ addToCart }) {
  return (
    <div className="Main">
      <Furniture heading="Glass Dining" furniture={GlassDiningData} addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default GlassDining;
