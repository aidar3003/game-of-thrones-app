import React, {Component} from "react";
import ListGroup from 'react-bootstrap/ListGroup';


export default class ItemList extends Component {

    state = {
        itemList: []
    }

    componentDidMount() {
        const {getData} = this.props;

        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })
    }

    renderItem(arr) {
        return arr.map((item,i) => {
            const {id} = item;
            const label = this.props.renderItem(item)

            return(
                <ListGroup.Item key={id} 
                className="item-list list-group"
                onClick={() => this.props.onItemSelected(i)}
                >
                    {label}
                </ListGroup.Item>
            )
        })
    }

    render() {

        const {itemList} = this.state;

        const items = this.renderItem(itemList);
        
        return(
                <ListGroup className="item-list list-group">
                    {items}
                </ListGroup>
        )
    }
}