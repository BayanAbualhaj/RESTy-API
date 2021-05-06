
import JSONPretty from 'react-json-pretty';
import './results.scss';
import { If, Else, Then } from '../if/if'
// var JSONPrettyMon = require('react-json-pretty/dist/monikai');

function Results({character,loading}) {
    console.log('*****',character);
    return (

        <div id="results">
            <If condition={loading}>
                <Then>
                    <div>
                        Loading...
                    </div>
                </Then>
                <Else>
                    <If condition={character.results.length|| character.results.results}>
                        <Then>
                            <JSONPretty id="json-pretty" data={character}></JSONPretty>
                        </Then>
                        <Else>
                            <div>
                                there is nothing to show
                            </div>
                        </Else>
                    </If>
                </Else>
            </If>
        </div>

    )
}

export default Results;

