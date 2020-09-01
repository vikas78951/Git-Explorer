import React from 'react';
import {Link} from 'react-router-dom'



 const Userlist =(props)=>{
    const{login,avatar_url}=props.user;
    return(            
        <div className="col-12 col-sm-6 col-md-4 mb-5">
            <div className="card  border-0 border-bottom shadow  text-center rounded-0 h-100 justify-content-between">
                <img src={avatar_url} className="rounded-circle  m-4 mx-auto" alt={login} style={{width:"80px"}} />
                <div className="card-body p-0">
                 <h3 className="text-capitalize font-weight-bold my-3">{login}</h3>
                </div>
                <Link  to={`user/${login}`} target="black" className="customButton card-footer rounded-0 bg-white border-0 d-block mt-3" style={{padding:"12px"}}>Read More</Link>
            </div>
        </div>
);

}

export default Userlist;