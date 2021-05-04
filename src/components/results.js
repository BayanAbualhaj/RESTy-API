'use strict';

import JSONPretty from 'react-json-pretty';
import './results.scss';
// var JSONPrettyMon = require('react-json-pretty/dist/monikai');

function Results(props) {
    return (
        <div id="results">
            <JSONPretty id="json-pretty" data={props}></JSONPretty>
        </div>

    )
}

export default Results;

