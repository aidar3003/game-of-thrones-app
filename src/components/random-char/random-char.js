import React, {Component} from "react";
import './random-char.css'
import gotService from "../../services/gotService";

export default class RandomChar extends Component {

    constructor() {
        super()
        this.updateChar();
    }

    gotService = new gotService();

    state = {
        name: null,
        gender: null,
        culture: null,
        born: null,
        died: null
    }

    updateChar() {
        const id = Math.floor(Math.random() * 140 + 25);
        this.gotService.getCharacter(id)
            .then((char) => {
                this.setState({
                    name: char.name,
                    gender: char.gender,
                    culture: char.culture,
                    born: char.born,
                    died: char.died
                })
            })
    }

    render() {

        const {name, gender, culture, born, died} = this.state;

        return(
            <div className="random-block rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </li>
                </ul>
            </div>
        )
    }
}