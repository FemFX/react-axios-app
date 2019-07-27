import React, { Component } from 'react'

export default class Info extends Component {
    render() {
        return (
            <div>
                { this.props.repos ? <p>Number of repos : {this.props.repos} </p> : <p></p>}
                { this.props.followers ? <p>Number of followers : {this.props.followers} </p> : <p></p>}
                { this.props.login ? <p>Login : {this.props.login} </p> : <p></p>}
                { this.props.name ? <p>Name : {this.props.name} </p> : <p></p>}
            </div>
        )
    }
}
