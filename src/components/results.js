'use strict';

import ReactJson from 'react-json-view';
import './results.scss';

function Results(props) {
    return (
        <div id="results">
            <ReactJson name={false} src={props} theme="rjv-default" />
        </div>

    )


}

export default Results;

