
import Form from '../form/form';
import Results from '../results/results';
import { Component } from 'react';
import History from '../history/history'

class Home extends Component {
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
      let uniqueHistory=this.state.history.filter(
        (ele)=> call.method === ele.method && ele.url === call.url
      );
      if(!uniqueHistory.length){
        console.log('dededeo');
        this.setState({history: [...this.state.history,call]});
        localStorage.setItem('api call',JSON.stringify(this.state.history));
      }

  
    }
    callBack=(api)=>{
      console.log(api);
      this.setState({callBack:api});
    }
    render(){
      return (
        <>
          <Form 
          prompt="GO!" 
          handler={this.handleForm} 
          toggle={this.toggleLoading} 
          storage={this.historyStorage}
          callBack={this.state.callBack}
          reRun={this.props.location?.state}/>
          <Results character={this.state} loading={this.state.loading}/>
          <div id="history">
  
            <History storage={this.state.history} callBack={this.callBack} />
          </div>
        </>
      );
    }
  }
  
  export default Home;