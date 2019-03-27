import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DogList extends Component {

    render () {
        return (
            <div>
                <h1>HELLOZ. WE HAVE DOGZ. CLICK ON THEM FOR MORE INFOZ.</h1>
                {this.props.dogData.map( d => 
                    <div>
                        <Link to={`/dogs/${d.name.toLowerCase()}`}> <img src={d.src} alt={d.name} /> <br/> {d.name} </Link>
                    </div>
                )}
            </div>
        )
    }
}

export default DogList;