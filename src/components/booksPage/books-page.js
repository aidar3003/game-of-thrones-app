import React, {Component} from "react";
import ItemList from '../item-list/item-list';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import gotService from "../../services/gotService";
import BookDetails from "../book-details";

export default class BooksPage extends Component {
    
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
                    getData={this.gotService.getBooks}
                    renderItem={(item) => item.name}
                  />
                </Col>
                  <Col>
                  <BookDetails itemId={this.state.selectedItem}/>
                </Col>
              </Row>
            </>
        )
    }
}