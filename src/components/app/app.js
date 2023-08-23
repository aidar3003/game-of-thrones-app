import React, {Component} from 'react';
import Header from '../header';
import RandomChar from '../random-char';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'
import CharacterPage from '../characterPage';
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import BooksPage from '../booksPage';
import HousesPage from '../housesPage';


export default class App extends Component {

  render() {

    return (
          <Router>
            <div className="app">
              <Container>
                  <Header />
                  <RandomChar />
                  <Routes>
                    <Route path='/characters' element={<CharacterPage/>} />
                    <Route path='/books' element={<BooksPage/>} />
                    <Route path='/houses' element={<HousesPage/>} />
                  </Routes>
              </Container>
            </div>
          </Router>
      )
  }
}
