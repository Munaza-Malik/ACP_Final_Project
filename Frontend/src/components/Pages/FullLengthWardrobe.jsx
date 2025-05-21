import React from 'react';
import Footer from '../Footer';
import Furniture from '../Furniture';
import a from '../../assets/fulllengthWardrobe1.png'; 
import b from '../../assets/fulllengthWardrobe2.png'; 
import c from '../../assets/fulllengthWardrobe3.png'; 
import d from '../../assets/fulllengthWardrobe4.png'; 
import e from '../../assets/fulllengthWardrobe5.png'; 

const FullLengthWardrobesData = [
  { name: "Full Length Wardrobe 1", price: "10000Rs", image: a },
  { name: "Full Length Wardrobe 2", price: "20000Rs", image: b },
  { name: "Full Length Wardrobe 3", price: "30000Rs", image: c },
  { name: "Full Length Wardrobe 4", price: "40000Rs", image: d },
  { name: "Full Length Wardrobe 5", price: "50000Rs", image: e },
];

function FullLengthWardrobe({ addToCart }) {
  return (
    <div className="Main">
      <Furniture heading="Full Length Wardrobe" furniture={FullLengthWardrobesData} addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default FullLengthWardrobe;
