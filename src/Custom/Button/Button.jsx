import React from 'react'
import "./Button.scss"

export default function Button({content ,type}) {
    switch (type) {
        case "primary":
            return(<button className=" btn first">{content}</button>)
            
        case "Auth" :
            return(<button >{content}</button>)
    
        default:
            return(<button>{content}</button>)
    }
 
}
