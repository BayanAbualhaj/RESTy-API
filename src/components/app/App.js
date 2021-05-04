import './App.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
import Form from '../form/form';
import Results from '../results/results';
import { Component } from 'react';
import History from '../history/history'



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      headers:{},
      count:0,
      results:[],
      history:JSON.parse(localStorage.getItem('api call')) || [],
      loading:false,
      callBack:{},
    }
  }
  handleForm=(results)=>{
    this.setState({
      headers:results.headers,
      count:results.count,
      results:results.results,
    });
  }
  toggleLoading=()=>{
    this.setState({loading: !this.state.loading});
  }
  historyStorage=(call)=>{
    this.setState({history: [...this.state.history,call]});
    localStorage.setItem('api call',JSON.stringify(this.state.history));

  }
  callBack=(api)=>{
    console.log(api);
    this.setState({callBack:api});
  }
  render(){
    return (
      <>
        <Header/>
        <Form 
        prompt="GO!" 
        handler={this.handleForm} 
        toggle={this.toggleLoading} 
        storage={this.historyStorage}
        callBack={this.state.callBack}/>
        <Results character={this.state} loading={this.state.loading}/>
        <div id="history">

          <History storage={this.state.history} callBack={this.callBack} />
        </div>
        <Footer/>
      </>
    );
  }
}

export default App;
