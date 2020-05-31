import React, { Component } from 'react'
import {Context} from "../../Context"
import {firestore,storage} from '../../Firebase/Firebase.utils'
import Card from "../../Custom/Card/Card"
import "./Shop.scss"
import Search from '../../Custom/Search/Search'

export default class Shop extends Component {
    constructor(){
        super()
        this.state={
            product:[],
            url:[],
            SearchField:"",
            SubmitField:"",
            otherCategories:true
        }
    }
    componentDidMount(){
        const {category} = this.props.match.params
        const productsref = firestore.doc(`products/${category}`)
        const productSnapshot = productsref.get()
        productSnapshot.then(snapshot=>{this.setState({product:snapshot.data().ProductItems})})
    }
    handleChange=(e)=>{
        this.setState({SubmitField:""})
        this.setState({SearchField:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        this.setState({SubmitField:this.state.SearchField})
        this.setState({SearchField:""})
        console.log(this.state.SearchField)
    }
    clearSearch= ()=>{
        this.setState({SubmitField:""})
    }
    static contextType = Context
    render() {
        const {category} = this.props.match.params
        const{SearchField, SubmitField, product}=this.state
        const filteredData = product.filter(item => {
            return item.Name.toLowerCase().includes(SearchField.toLowerCase()|| SubmitField.toLowerCase())}
            )
        console.log(filteredData)
        return (
            <div className="shop">
                <div className="categoryHeader"><h2>{category}</h2></div>
                <div>
                <Search
                    value={this.state.SearchField} 
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit}
                />
                {SubmitField?<p className="clearSearch" onClick={this.clearSearch}>clear...</p>:null}
                </div>
                <div className="shopItems">{filteredData.map((item)=>{return(<Card key = {item.id} item = {item}/>)})}</div>
            </div>
        )
    }
}