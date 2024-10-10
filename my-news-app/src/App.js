import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import NewsItem from './Component/NewsItem';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News pageSize={5}/>
      </div>
    )
  }
}

