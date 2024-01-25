
import React, { useState } from "react";

let Countevehand = () =>{

    let[state, setState] = useState({

        count : 0

    });

    let incrCounter = () =>{

        setState((state) =>({
            count : state.count+1
        }));

    };

    let decrCounter = () =>{
        
        setState((state) =>({
            count : state.count-1
        }));

    };

    return(
        <>
        <div className="container mt-3">
            {/* <div className="row">
                <div className="col-md-5"> */}
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h3 className="h4">COUNTER</h3>

                        </div>
                        <div className="card-body">
                            <p className="h1">{state.count}</p>
                            <button  onClick={incrCounter} className="btn btn-success btn-sm">INCREMENT</button><br/><br/>
                            <button onClick={decrCounter} className="btn btn-warning btn-sm">DECREMENT</button>
                        </div>

                    </div>

                </div>

            {/* </div>
            
        </div> */}
        </>
    );
};


export default Countevehand;