import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Dog extends Component {

    render() {
        const dog = this.props.dogData.find(d =>
            d.name.toLowerCase() === this.props.match.params.name)
        
        if (dog === undefined){
            return <Redirect to="/dogs" />
        }
        return (
            <div>
                <img src={dog.src} alt={dog.name} />
                <h2>{dog.name}</h2>
                <h3>{dog.age}</h3>
                <ul>
                    {dog.facts.map(f =>
                        <li>{f}</li>
                    )}
                </ul>
                <Link to="/dogs">Go back</Link>
            </div>
        )
    }

}

export default Dog;