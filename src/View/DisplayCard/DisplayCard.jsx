import React from 'react'
import Button from '../../Custom/Button/Button'
import "./DisplayCard.scss"

export default function DisplayCard() {
    return (
        <div className="buttonWrapper">
            <Button  Buttontype="primary" content="Button"/>
            <Button  Buttontype="auth" content="Button"/>
            <Button  Buttontype="action" content="Button"/>
            <Button content="Button"/>
        </div>
    )
}
