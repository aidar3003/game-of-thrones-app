import React, {Component} from "react";
import ItemList from '../item-list/item-list';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CharDetails from '../item-details';
import gotService from "../../services/gotService";

export default class HousesPage extends Component {
    
    state = {
        item: [],
        selectedItem: null
    }

    gotService = new gotService();

    onItemSelected = (id) => {
        this.setState({
          selectedItem: id
        })
      }

    render() {
        return (
            <>
                <Row>
              <Col>
                <ItemList 
                  onItemSelected={this.onItemSelected}
                  getData={this.gotService.getHouses}
                  renderItem={(item) => item.name}
                />
              </Col>
              <Col>
                <CharDetails charId={this.state.selectedItem}/>
              </Col>
              </Row>
            </>
        )
    }
}