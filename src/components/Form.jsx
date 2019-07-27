import React, { Component } from 'react'
import '../App.css'

export default class Form extends Component {
    render() {
        return (
            <form onSubmit={this.props.getUser}>
               <input type="text" name="username" />
               <button>Submit</button> 
            </form>
        )
    }
}
