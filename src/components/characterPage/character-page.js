import React, {Component} from "react";
import ItemList from '../item-list/item-list';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemDetails from '../item-details';
import gotService from "../../services/gotService";

export default class CharacterPage extends Component {
    
    state = {
        item: [],
        selectedItem: null
    }

    gotService = new gotService();

    onItemSelected = (id) => {
        this.setState({
          selectedItem: 41 + id 
        })
      }

    render() {
        return (
            <>
                <Row>
              <Col>
                <ItemList 
                  onItemSelected={this.onItemSelected}
                  getData={this.gotService.getAllCharacters}
                  renderItem={(item) => item.name}
                />
              </Col>
              <Col>
                <ItemDetails itemId={this.state.selectedItem}/>
              </Col>
              </Row>
            </>
        )
    }
}