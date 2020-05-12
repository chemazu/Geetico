import React from 'react'
import "./Button.scss"

export default function Button({content ,type,onClick,Buttontype}) {
    switch (Buttontype) {
        case "primary":
            return(<button type= {type} className=" btn first" onClick={onClick}>{content}</button>)
            
        case "Auth" :
            return(<button  type= {type} onClick={onClick}>{content}</button>)
    
        default:
            return(<button  type= {type} onClick={onClick}>{content}</button>)
    }
 
}
