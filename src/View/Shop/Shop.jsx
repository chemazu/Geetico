import React, { Component } from 'react'
import {Context} from "../../Context"
import {firestore} from '../../Firebase/Firebase.utils'
import Card from "../../Custom/Card/Card"
import "./Shop.scss"

export class Shop extends Component {
    constructor(){
        super()
        this.state={
            product:[]
        }
    }
    componentDidMount(){
        const productsref = firestore.doc("products/TopSellers")
        const productSnapshot = productsref.get()
        productSnapshot.then(snapshot=>{this.setState({product:snapshot.data().ProductItems})})
    }
    static contextType = Context
    render() {
        const {product} = this.state
        return (
            <div className="shopItems">
              {product.map((item)=>{return(<Card key = {item.id} item = {item}/>)})} 
            </div>
        )
    }
}

export default Shop
