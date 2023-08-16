import React, {Component} from 'react';
import Header from '../header';
import RandomChar from '../random-char';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'


export default class App extends Component {
  render() {
    return (
        <div className="app">
            <Header />
            <RandomChar />
        </div>
      )
  }
}
