import React from 'react'
import "./Benefits.scss"

export default function Benefits({benefit}) {
    const {img, text ,id}= benefit
    return (
        <div className ={`benefits ${id}`}key={id}>
            <img src={img} alt={text}/>
            <p>{text}</p>
        </div>
        
    )
}
