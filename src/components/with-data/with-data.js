import React, {Component} from "react";
import ItemList from "../item-list";
import gotService from "../../services/gotService";

const WithData = (View, getData) => {

    return class extends Component {
        state = {
            data: []
        }
    
        componentDidMount() {   
            getData()
                .then((data) => {
                    this.setState({
                        data
                    })
                })
        }

        render() {
            const {data} = this.state;
            return <View {...this.props} data={data} />
        }
        
    }
}

const {getAllCharacters} = new gotService();
export default WithData(ItemList, getAllCharacters);