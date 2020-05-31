// import React, { Component } from 'react'
// import "./Search.scss"

// export class Search extends Component {
//     constructor(){
//         super()
//         this.state={
//             search:"",
//             submit:""
//         }
//     }
//     handleChange = (e)=>{
//         this.setState({submit:""})
//         this.setState({search:e.target.value})
//     }
//     handleSearch=(e)=>{
//         e.preventDefault()
//         this.setState({submit:this.state.search})
//         this.setState({search:""})
//     }
//     render() {
//         const {search} = this.state
//         return (
//             <div className="search">
//                 <form onSubmit={this.handleSearch}>
//                     <input placeHolder="Search Products"onChange={this.handleChange} value = {search}/>
//                     <button type="submit">Search</button>
//                 </form>
//             </div>
//         )
//     }
// }

import React, { Component } from 'react'
import "./Search.scss"

export class Search extends Component {
    render() {
        const {handleSubmit, handleChange, value}= this.props;
        return (
            <div className="search">
                <form onSubmit={handleSubmit}>
                <input type='search' placeholder='Search Product' value={value} onChange={handleChange}/>
                <button type='submit'>Search</button>
                </form>
            </div>
        )
    }
}

export default Search
