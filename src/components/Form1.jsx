import React, {useState} from "react";

let Form1 = () =>{

    let [state, setState] = useState({

        username : 'JOHN'

    });
    
    let updateInput = (event) =>{

        setState((state) =>({

            username : event.target.value

        }));

    };

    return(
        <>
        <div className="container">
            <div className="row">
                <div className="card">
                    <div className="card-header bg-primary text-white" >
                       <p className = "h4">USER NAME</p>
                    </div>
                    <div className="card-body bg-light">
                        <form>
                            <div className="mb-3">
                                <input type="text" onChange = {updateInput} value={state.username} className="form-control">

                                </input>
                            </div>
                            <h3>{state.username}</h3>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>

    )
};

export default Form1;