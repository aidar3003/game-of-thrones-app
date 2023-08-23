import React, {Component} from "react";
import ItemList from '../item-list/item-list';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CharDetails from '../char-details';
import gotService from "../../services/gotService";

export default class CharacterPage extends Component {
    
    state = {
        item: [],
        selectedChar: null
    }

    gotService = new gotService();

    onCharSelected = (id) => {
        this.setState({
          selectedChar: id
        })
      }

    render() {
        return (
            <>
                <Row>
              <Col>
                <ItemList 
                  onCharSelected={this.onCharSelected}
                  getData={this.gotService.getAllCharacters}
                  renderItem={(item) => item.name}
                />
              </Col>
              <Col>
                <CharDetails charId={this.state.selectedChar}/>
              </Col>
              </Row>
            </>
        )
    }
}