import React from "react";
import gotService from "../../services/gotService";

export default class BookDetails extends React.Component {

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

    getBook() {
        const id = 10;
        this.gotService.getBook(id)
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
        this.gotService.getBook(itemId)
            .then((item) => {
                this.setState({item})
            })
    }

    render() {

        if(!this.state.item) {
            return <span>Please select book</span>
        }

        const {name, authors, numberOfpages, country} = this.state.item;

        return(
            <>
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between">
                            <span className="term">Authors</span>
                            <span>{authors}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span className="term">Number of pages</span>
                            <span>{numberOfpages}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span className="term">Country</span>
                            <span>{country}</span>
                        </li>
                    </ul>
                </>
        )
    }
}