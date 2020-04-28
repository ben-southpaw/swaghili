import axios from 'axios';
import React, {Component} from 'react';
import Sentiment from 'sentiment';
import Background from './Background';
import Data, {getWellbeing} from '../data/data';

const sentiment = new Sentiment();

export class Quotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kanyeTweet: ''
        };
        this.handleClick = this.handleClick.bind(this)
    } /*Here we set our state which will be updated next when the component loads or mounts. Initially it is an empty prop with
    the placeholder of what we will fill in the data with....
    --
    This gets called
    */

    componentDidMount() {
        axios.get('https://api.kanye.rest')
            .then(response => {
                this.setState({ kanyeTweet: response.data["quote"]});
            })
            .catch(error => {
                console.log(error);
            });
    }        /*Here axios library is out GET call to the third party api, the response is in JSON form and we set it to the state
 or the current relevant edition of the object. The returned quote then becomes the current state.
 We also use a callback to load any errors in the console. This is all the activity we want to occur onload or when the component
 mounts onto a container or page where its being called.*/

    handleClick () {
        axios.get('https://api.kanye.rest')
            .then(response => this.setState({ kanyeTweet: response.data["quote"]}))
            .catch(function (error) {
                console.log(error);
            });
    }
    /*This function provides a response by calling the API to get a new quote. SetState is called and replaces the previous
    iteration of the object. */

 render() {
    const kanyeTweet = Object.values(this.state);/*Tweets are added to state to be accessible*/
    let result = sentiment.analyze(kanyeTweet[0]);
    const wellbeing = getWellbeing(result.comparative);
    const data = Data[wellbeing.face];
    const img = data.images[data.index];
    data.index = (data.index + 1) % data.images.length;  /*Loop over images when quotes changed sequentially*/

    Background.setNewTexture(img);  /*Set image on box graphic*/

    return (
        <div>
            <p className="line-1 anim-typewriter" id="KanyeTweet">{`"${kanyeTweet}"- Kanye West`}</p>
            <p className="scores">Score: <strong>{result.score}</strong></p>
            <p className="scores">Comparison: <strong>{result.comparative}</strong></p>
            <p className="wellbeing">Kanye is feeling {wellbeing.text}</p>
            <button type="button" id="wisdomButton" className="btn btn-outline-info" onClick={this.handleClick}>More Wisdom</button>
        </div>
    );
}   /*Here we actually show the result in jsx form as a variable. Our target object is called kanyeTweet.
 This is in object form and I want to display it like its being typed. However, the library needs it mutated first.
 Then we use ES6 string interpolation to insert it into where a string would be in the Typical component.
 Then we finally export it as a component to the parent where it can be displayed*/
}

export default Quotes;

