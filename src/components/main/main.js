import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from '../home/home';
import Help from '../help/help';
import HistoryPage from '../historyPage/historyPage';

const Main =()=>{
    return(
        <main>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route  path="/history" component={HistoryPage}/>
                <Route  path="/help" component={Help}/>
            </Switch>
        </main>
    )
}

export default Main;
