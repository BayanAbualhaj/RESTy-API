import './form.scss';
import React from 'react';


function Form({ prompt, handler }) {
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const url = e.target.url.value;
            // const method = e.target.method.value;
            // console.log(method);
            const raw= await fetch(url);
            const data=await raw.json();
            
            // let count=data.count;
            // let headers={Content_Type:raw.headers.get('Content-Type')}
            // let results=data.results
            let response={
                count:data.count,
                headers:{Content_Type:raw.headers.get('Content-Type')},
                results:data,
            };

            handler(response)
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <form onSubmit={handleClick}>
            <label htmlFor="">
                URL:
                    <input type="text" placeholder="ENTER THE URL" name='url' />
            </label>
            <button type="submit">{prompt}</button>
            <br />
            <input type='radio' id='GET' name='method' value='GET' defaultChecked/>
            <label htmlFor='GET' >GET</label>
            <input type='radio' id='POST' name='method' value='POST' />
            <label htmlFor='POST'>POST</label>
            <input type='radio' id='PUT' name='method' value='PUT' />
            <label htmlFor='PUT'>PUT</label>
            <input type='radio' id='DELETE' name='method' value='DELETE' />
            <label htmlFor='DELETE'>DELETE</label>
        </form>
    );


}

export default Form;