
import React, { useState } from "react";

let Loginform = () =>{

    let [state, setState] = useState({

        user : {
            username : '',

            password : '' 
        }
    });

    let changeUsername = (event) =>{

        setState((state) =>({

            user : {
                ...state.user,
                username : event.target.value
            }
            

        }));
    };

    let changePassword = (event) =>{

        setState((state) =>({

            user : {
                ...state.user,
                password : event.target.value
            }

        }));
    };

   let submitLogin =(event)=>{
    event.preventDefault();
    console.log(state.user);
   };
    return(
    
        <>
        <div className="container mt-3">
            <div className="row">
                <div className="col-mid-3">
                    <div className="card">
                        <div className="card-header bg-success text-white">
                            <p className="h4">LOGIN HERE</p>

                        </div>
                        <div className="card-body">

                            <form onSubmit={submitLogin}>
                                <div className="mb-3">
                                    <input value = {state.user.username} onChange = {changeUsername} type="text" className="form-control" placeholder="username"></input>
                                </div>
                                <div className="mb-3">
                                    <input value = {state.user.password} onChange = {changePassword} type="password" className="form-control" placeholder="password"></input>
                                </div>
                                <div className="mb-3">
                                    <input type="submit" className="btn btn-success btn-sm" value="LOGIN"></input>
                                </div>
                            </form>

                        </div>

                    </div>

                </div>
            </div>
        </div>
        </>

    )
};

export default Loginform;