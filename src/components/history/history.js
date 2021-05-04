import {If,Then} from '../if/if'

const History=({storage,callBack})=>{
    function handleClick(e){
        let [method,url]=(e.target.innerText).split(" ");
        callBack({method,url})
    }
    return(
        <If condition={storage}>
            <Then>
                {
                    storage.map((data,index)=>{

                        return(
                            <div key={index} onClick={handleClick}>
                                <p>{data.method} {data.url}
                                </p>
                            </div>
                        )
                    })
                }
            </Then>
        </If>
    
    )
}

export default History;