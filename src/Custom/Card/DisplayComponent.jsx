import React from 'react'
import "./DisplayComponent.scss"



export default function DisplayComponent({filteredDataContent}) {
    
    const{Name,photoID, photoUrl}=filteredDataContent
    return (
        <div>
            <div className="card1">
            <div className="wrapper">
            <div className='productImage' style={{backgroundImage:`url(${photoUrl})`}}/>
            <div className='productDetails'>
                <div className='details'>
                    <h4>{Name}</h4>
                    <p>500</p>
                    {/* <FontAwesomeIcon icon={faInfoCircle}/> */}
                </div>
               <div className="buy">
                   {/* <FontAwesomeIcon icon={faCartPlus}/> */}
                   {/* <input type='number' onChange={this.handleChange}/> */}

                </div>
               
            </div>
            </div>
            </div>
        </div>
    )
}