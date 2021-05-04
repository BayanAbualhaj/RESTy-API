import './form.scss';
import React from 'react';


function Form({ prompt, handler,toggle,storage,callBack}) {
    // console.log(api);
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const url = e.target.url.value;
            const method = e.target.method.value;
            const body=e.target.body.value;

            console.log(method);
            
            // let count=data.count;
            // let headers={Content_Type:raw.headers.get('Content-Type')}
            // let results=data.results
            if(method === 'GET'){
                toggle();
                const raw= await fetch(url);
                const data=await raw.json();
                let response={
                    count:data.count,
                    headers:{Content_Type:raw.headers.get('Content-Type')},
                    results:data,
                };
                handler(response)
                toggle();
                storage({url,method,data});
            }else{
                toggle();
                const raw= await fetch(url,{
                    method:method,
                    body:JSON.stringify(body),
                });
                const data= await raw.json();
                handler({
                    count:data.count,
                    headers:{Content_Type:raw.headers.get('Content-Type')},
                    results:data,
                });
                toggle();
                storage({url,method,data});
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <main>
            <div id="container">

                <form onSubmit={handleClick}>
                    <div id="input" >
                        <label htmlFor="">
                            URL:
                                <input type="text" placeholder="ENTER THE URL" name='url' value={callBack.url} />
                        </label>
                        <button type="submit">{prompt}</button>
                    </div>
                    <br />
                    <div id="methods">

                        <input className="radio" type='radio' id='GET' name='method' value='GET' defaultChecked/>
                        <label htmlFor='GET' >GET</label>
                        <input  className="radio" type='radio' id='POST' name='method' value='POST' />
                        <label htmlFor='POST'>POST</label>
                        <input  className="radio" type='radio' id='PUT' name='method' value='PUT' />
                        <label htmlFor='PUT'>PUT</label>
                        <input  className="radio" type='radio' id='DELETE' name='method' value='DELETE' />
                        <label htmlFor='DELETE'>DELETE</label>
                    </div>
                    <textarea name="body"></textarea>
                </form>
            </div>
        </main>
    );


}

export default Form;