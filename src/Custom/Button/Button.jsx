import React from 'react'
import "./Button.scss"

export default function Button({content ,type,onClick,Buttontype}) {
    switch (Buttontype) {
        case "primary":
            return(<button type= {type} className=" btn primary" onClick={onClick}>{content}</button>)
            
        case "auth" :
            return(<button  className="btn auth" type= {type} onClick={onClick}>{content}</button>)
        
        case "action" :
            return(<button  className="btn action" type= {type} onClick={onClick}>{content}</button>)
    
        default:
            return(<button  type= {type} onClick={onClick}>{content}</button>)
    }
 
}
