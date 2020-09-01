import React, { Component, Fragment} from 'react' ;
import '../Style/style.css';
import '../Style/style2.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

class Nav extends Component{

    static defaultProps = {
        title:'Git Explorer default',
        icon:'fa fa-github'
    }
    static propTypes = {
        title:PropTypes.string.isRequired,
        icon:PropTypes.string.isRequired
    }


    render(){

        return(
            <Fragment>
               <nav className="myNav">
                   <div className="body-container">
                    <div className="branding"> 
                        <i className={this.props.icon}></i>
                        <span className="brandname">{this.props.title}</span> 
                    </div>
                  <div className="navlinkcontainer">
                      <ul>
                         <li>
                             <Link to='/' > Home</Link>
                         </li>
                         <li>
                            <Link to='/about' >About </Link>
                         </li>
                         
                      </ul>
                  </div>
                   </div>                  
               </nav>
            <div className="headermask"></div>
            </Fragment>
        );
    }

}
export default Nav ;

