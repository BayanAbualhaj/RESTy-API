import './App.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
import { Component } from 'react';
import Main from '../main/main'



class App extends Component {
  render(){
    return (
      <>
        <Header/>
        <Main/>
        <Footer/>
      </>
    );
  }
}

export default App;
