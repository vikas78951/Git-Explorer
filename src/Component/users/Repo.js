import React from 'react'
import { Repos } from './Repos';


export const Repo = ({repoitem}) =>{

    return (
        <li className="d-flex text-left">
            <i className="fa fa-check text-primary pr-2 pt-1"></i>
            <a href={repoitem.html_url} target="_black" className="text-primary">{repoitem.name}</a>
        </li>
        
    );
}