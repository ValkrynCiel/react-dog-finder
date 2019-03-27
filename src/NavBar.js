import React, { Component } from 'react';
import { NavLink } from "react-router-dom"

class NavBar extends Component {
    render() {
        const activeStyle = {
            fontWeight: "bold",
            color: "blue"
        };
        return (

            <nav>
                <NavLink exact to="/dogs"
                    activeStyle={activeStyle}> Home </NavLink>
                
                {this.props.dogData.map( d => (
                    <NavLink exact to={`/dogs/${d.name.toLowerCase()}`}
                    activeStyle={activeStyle}> {d.name} </NavLink>
                ))}
                
            </nav>
        )
    }
    
}

export default NavBar;