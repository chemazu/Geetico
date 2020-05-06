import React from 'react'
import Advert from "../Images/Adverts.jpg"
import Advert2 from "../Images/Adverts2.jpg"
import "./AdvertBanner.scss"

export default function AdvertBanner() {
    return (
        <div className="advertBanner">
            <img src={Advert} alt="advert"/>
            
            
            <img src={Advert2} alt="advert"/>
        </div>
    )
}
