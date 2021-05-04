
import JSONPretty from 'react-json-pretty';
import './results.scss';
import { If, Else, Then } from '../if/if'
// var JSONPrettyMon = require('react-json-pretty/dist/monikai');

function Results({character,loading}) {
    return (

        <div id="results">
            <If condition={loading}>
                <Then>
                    <div>
                        Loading...
                    </div>
                </Then>
                <Else>
                    <JSONPretty id="json-pretty" data={character}></JSONPretty>
                </Else>
            </If>
        </div>

    )
}

export default Results;

