import React from 'react';
import Contactlist from './Contactcard';

let Contactapp = () =>{

    return (
        <>
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-md-9'>
                    <p className='h4 text-success'>CONTACT APP </p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, vitae!</p>
                </div>

            </div>

        </div>
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-mid-9'>
                    <Contactlist/>
                </div>
                <div className='col-mid-3'>
                    <contactcard/>
                </div>
            </div>
        </div>
        </>
    )
};

export default Contactapp;