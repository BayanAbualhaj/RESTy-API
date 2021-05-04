import './App.scss';
import Header from './header';
import Footer from './footer';
import Form from './form';
import Results from './results';
import { Component } from 'react';



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      headers:{},
      count:0,
      results:[],
    }
  }
  handleForm=(results)=>{
    this.setState({
      headers:results.headers,
      count:results.count,
      results:results.results
    });
  }
  render(){
    return (
      <>
        <Header/>
        <Form prompt="GO!" handler={this.handleForm}/>
        <Results character={this.state}/>
        <Footer/>
      </>
    );
  }
}

export default App;
