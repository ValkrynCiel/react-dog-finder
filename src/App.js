import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import Dog from './Dog';
import DogList from './DogList';
import whiskey from './whiskey.jpg'
import lambeau from './lambeau.jpg'
import tubby from './tubby.jpg'
import hazel from './hazel.jpg'
import './App.css';


class App extends Component {
	static defaultProps = {
		dogs: [
		  {
			name: "Whiskey",
			age: 5,
			src: whiskey,
			facts: [
			  "Whiskey loves eating popcorn.",
			  "Whiskey is a terrible guard dog.",
			  "Whiskey wants to cuddle with you!"
			]
		  },
		  {
			name: "Lambeau",
			age: 4,
			src: lambeau,
			facts: [
			  "Lambeau was born in Newport, Tennessee.",
			  "Lambeau has a girlfriend, a husky named Luna.",
			  "Lambeau is named after a football stadium in Wisconsin."
			]
		  },
		  {
			name: "Tubby",
			age: 4,
			src: tubby,
			facts: [
			  "Tubby is really stupid.",
			  "Tubby does not like walks.",
			  "Angelina hates Tubby."
			]
		  },
		  {
			name: "Hazel",
			age: 0,
			src: hazel,
			facts: [
			  "Hazel has soooo much energy!",
			  "Hazel is highly intelligent.",
			  "Hazel loves people more than dogs."
			]
		  }
		]
	  }

	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<NavBar dogData={this.props.dogs}/>
					<Switch>
						<Route exact path="/dogs" render={() => <DogList dogData={this.props.dogs} />} />
						<Route exact path="/dogs/:name"
							   render={rtProps => <Dog {...rtProps} dogData={this.props.dogs}/>} />
						<Redirect to="/dogs" />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
