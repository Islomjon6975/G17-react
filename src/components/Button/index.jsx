import React, { Component } from "react";
import './style.css'

class Button extends Component {
    render() {
        console.log(this.props)
        return(
            <button className="btn">{this.props.children || 'click'}</button>
        )
    }
}

export {Button}