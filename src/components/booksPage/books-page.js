import React, {Component} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import gotService from "../../services/gotService";
import BookDetails from "../book-details";
import WithData from "../with-data";

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
                  <WithData 
                    onItemSelected={this.onItemSelected}
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