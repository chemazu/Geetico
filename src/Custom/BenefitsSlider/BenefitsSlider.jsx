import React ,{useState}from 'react'
import ItemsCarousel from 'react-items-carousel';
import "./BenefitsSlider.scss"
import cash from "../Images/cash_.png"
import value from "../Images/diamond.png"
import delivery from "../Images/delivery.png"

export default function BenefitsSlider() {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 20;
    return (
        <div className="benefitSliderWrapper">
            <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={1}
        gutter={20}
        leftChevron={<p>{'<'}</p>}
        rightChevron={<p>{'>'}</p>}
        outsideChevron
        chevronWidth={chevronWidth}
        slidesToScroll={2}
      >
          <div className="benefitSlider">
              <img src={delivery} alt=""/>
              <p>Fast Delivery</p>
          </div>
          <div className="benefitSlider">
              <img src={value} alt=""/>
              <p>Best Brands</p>
          </div>
          <div className="benefitSlider">
              <img src={cash} alt=""/>
              <p>Secure Payment</p>
          </div>
      </ItemsCarousel>
        </div>
    )
}
