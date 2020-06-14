import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import "./CategorySlider.scss"
import PublicItem from '../PublicItem/PublicItem';

export default function CategorySlider({pepsi,category,slides}) {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 20;
    return (
        <div style={{"padding":"20px"}}className="categorySliderContainer">
        <div  className="categorySlider">
        <div className="heading">
        <h2>{category}</h2>
        <p>View More...</p>
        </div>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={slides}
        gutter={20}
        leftChevron={<p>{'<'}</p>}
        rightChevron={<p>{'>'}</p>}
        outsideChevron
        chevronWidth={chevronWidth}
        slidesToScroll={2}
      >
                <div className="one"><div className="two"><PublicItem image={pepsi} price={200} item="Pepsi"/></div></div>
                <div className="one"><div className="two"><PublicItem image={pepsi} price={200} item="Pepsi"/></div></div>
                <div className="one"><div className="two"><PublicItem image={pepsi} price={200} item="Pepsi"/></div></div>
                <div className="one"><div className="two"><PublicItem image={pepsi} price={200} item="Pepsi"/></div></div>
                <div className="one"><div className="two"><PublicItem image={pepsi} price={200} item="Pepsi"/></div></div>
                <div className="one"><div className="two"><PublicItem image={pepsi} price={200} item="Pepsi"/></div></div>
      </ItemsCarousel>
    </div>
    </div>
    )
}
