import React from "react";
import { Button } from "../Button";

class Navbar extends React.Component {

    render() {
        // console.log(this.props.logo, this.props.item, 'props');
        return (
            <div>
                <h1>Navbar: {this.props.logo}</h1>
                <h4>{this.props.item}</h4>
                <Button>Login</Button>
            </div>
        )
    }
}

export default Navbar

