import React, { Component } from 'react';
import { If, Then, Else } from '../if/if'
import JSONPretty from 'react-json-pretty';
import './historyPage.scss'

// let storageArr = JSON.parse(localStorage.getItem('api call')) || [];

class HistoryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            api: JSON.parse(localStorage.getItem('api call')) || [],
            body: [],
        }
    }

    handleStorage = (data) => {
        this.setState({ body: data });
    }

    render() {

        return (
            <>
                <section>
                    <div id="storage">

                        <If condition={this.state.api.length}>
                            <Then>
                                {this.state.api.map((storage, i) => {
                                    // console.log("dedeqwdqdqedqe");
                                    return (
                                        <div id="container">

                                            <div id="element" onClick={() => { this.handleStorage(storage) }} key={i}>
                                                {storage.method} {storage.url}


                                            </div>
                                                <button key={i+'*'}
                                                onClick={() =>{
                                                    this.props.history.push('/',{
                                                        method:storage.method,
                                                        url:storage.url,
                                                })}}
                                                >re-run</button>
                                        </div>
                                    )
                                })}
                            </Then>
                        </If>
                    </div>

                    <div id="results">
                        <If condition={this.state.body.length === 0}>
                            <Then>
                                <div> No Data is reserved !</div>
                            </Then>
                            <Else>
                                <JSONPretty id="json-pretty" data={this.state.body}></JSONPretty>

                            </Else>
                        </If>
                    </div>

                </section>
            </>
        )
    }
}

export default HistoryPage;
