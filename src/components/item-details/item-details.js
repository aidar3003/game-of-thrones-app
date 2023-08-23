import React from "react";
import gotService from "../../services/gotService";

export default class ItemDetails extends React.Component {

    gotService = new gotService();

    state = {
        item: null
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if(this.props.itemId !== prevProps) {
            this.updateItem()
        }
    }

    getCharacter() {
        const id = 10;
        this.gotService.getCharacter(id)
            .then(this.onItemLoaded)
    }

    onItemLoaded = (item) => {
        this.setState({
            item
        })
    }

    updateItem = () => {
        const {itemId} = this.props;
        if(!itemId) {
            return;
        }
        this.gotService.getCharacter(itemId)
            .then((item) => {
                this.setState({item})
            })
    }

    render() {

        if(!this.state.item) {
            return <span>Please select character</span>
        }

        const {name, gender, culture, born, died} = this.state.item;

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
