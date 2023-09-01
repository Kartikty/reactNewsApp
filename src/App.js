
import './App.css';

import React, { Component, Fragment } from 'react'
import Navbar from './comopnents/Navbar';
import News from './comopnents/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Fragment>

         <Navbar/>
         <Routes>
         <Route exact  path='/Home'element={<News key="General" country="in" category="General"/>}/>
          
          <Route exact  path='/Business' element={<News key="Business" country="in" category="Business"/>}/>
          <Route exact  path='/Entertainment'element={<News key="Entertainment" country="in" category="Entertainment"/>}/>
          <Route exact  path='/General'element={<News key="General" country="in" category="General"/>}/>
          <Route exact  path='/Health'element={<News key="Health" country="in" category="Health"/>}/>
          <Route exact  path='/Science'element={<News key="Science" country="in" category="Science"/>}/>
          <Route exact  path='/Sports'element={<News key="Sports" country="in" category="Sports"/>}/>
          <Route exact  path='/Technology'element={<News key="Technology" country="in" category="Technology"/>}/>

         </Routes>
        </Fragment>
        </Router>
        
      </div>
    )
  }
}

