import React, { useState } from "react";

let Message = () =>{

    let [state,setState] = useState({

        message : "HELLO"

    });

    let Goodmrng = () =>{

        setState((state) =>({

            message : "GOOD MORNING"
    
        }));

    };

    
    let Goodaftr = (value) =>{

        setState((state) =>({

            message : value
            
        }));
        
    };

    
    let Goodeven = () =>{

        setState((state) =>({

            message : "GOOD EVENING"

        }));
        
    };

    return(
        <>
        <div className="container mt-3ssss">

            <div className="card">

                <div className="card-header bg-secondary text-white" >

                    <h2>WISH MESSAGE</h2>
                </div>
                <div className="card-body">
                    <h3>{state.message}</h3>
                    <button onClick = {Goodmrng} className="btn btn-success btn-sm">GOOD MORNING</button><br/><br/>
                    <button onClick = {() => Goodaftr("GOOD AFTERNOON")} className="btn btn-warning btn-sm">AFTER NOON</button><br/><br/>
                    <button onClick = {Goodeven} className="btn btn-danger btn-sm">GOOD EVENING</button><br/><br/>

                </div>

            </div>
        </div>
        </>

    )
};


export default Message;