import React from "react";
import gotService from "../../services/gotService";

export default class CharDetails extends React.Component {

    gotService = new gotService();

    state = {
        char: null
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if(this.props.charId !== prevProps) {
            this.updateChar()
        }
    }

    getCharacter() {
        const id = 99;
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
    }

    onCharLoaded = (char) => {
        this.setState({
            char
        })
    }

    updateChar = () => {
        const {charId} = this.props;
        if(!charId) {
            return;
        }
        this.gotService.getCharacter(charId)
            .then((char) => {
                this.setState({char})
            })
    }

    render() {

        if(!this.state.char) {
            return <span>Please select character</span>
        }

        const {name, gender, culture, born, died} = this.state.char;

        return(
            <>
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
                </>
        )
    }
}
