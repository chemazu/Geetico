import React, { Component } from 'react'
import {Context} from "../../Context"
import {storage, firestore} from '../../Firebase/Firebase.utils'

export class Shop extends Component {
    constructor(){
        super()
        this.state={
            product:[]
        }
    }
    componentDidMount(){
        const productsref = firestore.doc("products/ProductItems")
        const productSnapshot = productsref.get()
        productSnapshot.then(snapshot=>{this.setState({product:snapshot.data().ProductItems},()=>{console.log(this.state.product)})})
    }
    static contextType = Context
    render() {
        const {product} = this.state
        return (
            <div>
              {product.map(({Name})=>{return(<p key={Name}>{Name}</p>)})} 
            </div>
        )
    }
}

export default Shop
