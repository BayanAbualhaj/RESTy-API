import './form.scss';
import React from 'react';


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: 'url is not provided',
            method: 'no method was selected'
        };
    };

    handleClick = (e) => {
        e.preventDefault();
        const url = e.target.url.value;
        const method = e.target.method.value;
        console.log(method);
        this.setState({
            url: url,
            method: method
        });
        // console.log(this.state);

    }

    render() {
        return (
            <section>

                <form onSubmit={this.handleClick}>
                    <label htmlFor="">
                        URL:
                    <input type="text" placeholder="ENTER THE URL" name='url' />
                    </label>
                    <button type="submit">GO!</button>
                    <br />
                    <input type='radio' id='GET' name='method' value='GET' />
                    <label htmlFor='GET' >GET</label>
                    <input type='radio' id='POST' name='method' value='POST' />
                    <label htmlFor='POST'>POST</label>
                    <input type='radio' id='PUT' name='method' value='PUT' />
                    <label htmlFor='PUT'>PUT</label>
                    <input type='radio' id='DELETE' name='method' value='DELETE' />
                    <label htmlFor='DELETE'>DELETE</label>
                    

                </form>

                <div id="text-field">
                    <p id="p-method">
                        {this.state.method}
                    </p>
                    <p id="p-url">
                        {this.state.url}
                    </p>
                </div>
            </section>
        );
    }

}

export default Form;