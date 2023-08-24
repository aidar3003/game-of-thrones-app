import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';


const ItemList = (props) => {

    const renderItem = (arr) => {
        return arr.map((item,i) => {
            const {id} = item;
            const label = props.renderItem(item)

            return(
                <ListGroup.Item key={id} 
                className="item-list list-group"
                onClick={() => props.onItemSelected(i)}
                >
                    {label}
                </ListGroup.Item>
            )
        })
    }

    const {data} = props;
    const items = renderItem(data)
        
    return(
        <ListGroup className="item-list list-group">
            {items}
            </ListGroup>
    )

}

export default ItemList;