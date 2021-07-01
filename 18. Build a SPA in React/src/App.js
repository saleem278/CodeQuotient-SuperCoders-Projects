import React,{Component} from 'react';
import './App.css';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Footer from './components/Footer';

export default class App extends Component {
  render(){
    return(
      <div>
          <div id="showcase" style={{backgroundColor:'white'}}>
            <Header/>
            <Section1/>
          </div>
          <Section2/>
          <Section3/>
          <Section4/>
          <Section5/>
          <Footer/>
      </div>
    )
  }
}
