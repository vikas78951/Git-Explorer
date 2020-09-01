import React from 'react';

export const Alert =({alert}) =>{
    return (
        alert != null && (
            <div className={'customAlert bg-'+alert.type}>
            <span className="alertmsg"><i className="fa fa-info-circle pr-2" aria-hidden="true"></i> {alert.message}</span>
            </div>  
        )
       
    )
}