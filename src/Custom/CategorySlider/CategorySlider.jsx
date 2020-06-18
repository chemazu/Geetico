import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import "./CategorySlider.scss"
import PublicItem from '../PublicItem/PublicItem';
import Card from '../Card/Card';


export default function CategorySlider({pepsi,category,slides}) {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 20;
  const item = {"Name":"Pepsi","Price":200, "id":1}
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
                <div className="one"><div className="two"><Card item = {item}/></div></div>
                <div className="one"><div className="two"><Card item = {item}/></div></div>
                <div className="one"><div className="two"><Card item = {item}/></div></div>
                <div className="one"><div className="two"><Card item = {item}/></div></div>
                <div className="one"><div className="two"><Card item = {item}/></div></div>
      </ItemsCarousel>
    </div>
    </div>
    )
}
