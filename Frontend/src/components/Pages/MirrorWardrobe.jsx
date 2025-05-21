import React from 'react';
import Footer from '../Footer';
import Furniture from '../Furniture';
import a from '../../assets/mirrorWardrobe1.png'; 
import b from '../../assets/mirrorWardrobe2.png'; 
import c from '../../assets/mirrorWardrobe3.png'; 
import d from '../../assets/mirrorWardrobe4.png'; 
import e from '../../assets/mirrorWardrobe5.png'; 

const MirrorWardrobesData = [
  { name: "Mirror Wardrobe 1", price: "10000Rs", image: a },
  { name: "Mirror Wardrobe 2", price: "20000Rs", image: b },
  { name: "Mirror Wardrobe 3", price: "30000Rs", image: c },
  { name: "Mirror Wardrobe 4", price: "40000Rs", image: d },
  { name: "Mirror Wardrobe 5", price: "50000Rs", image: e },
];

function MirrorWardrobe({ addToCart }) {
  return (
    <div className="Main">
      <Furniture heading="Mirror Wardrobe" furniture={MirrorWardrobesData} addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default MirrorWardrobe;
