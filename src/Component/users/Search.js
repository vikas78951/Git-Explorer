import React from 'react';
import PropTypes from 'prop-types'
class Search extends React.Component {

    constructor(){
        super();
        this.state={
            text:'',
        }
    }
   

    onChange =(e) =>{
        e.preventDefault();
        this.setState({
            [e.target.name ]: e.target.value
        });
   
    }
    onSubmit =(e) =>{
        e.preventDefault();
       this.props.searchuser(this.state.text);
       this.setState({
           text:""
       })
       if(this.state.text ===''){
        this.props.setAlert("Invalid Input","success");
       }
    }

 

    static propsTypes ={
        searchuser:PropTypes.func.isRequired,
        clearuser:PropTypes.func.isRequired
    }

render(){
    return (
        <div className="body-container mt-5 px-3">
            <form className="form" onSubmit={this.onSubmit}>
                <div className="inputcontainer">
                    <input type="text" className="form-control searchinput" 
                    name="text" id="searchProfiles" placeholder="Search For Profies" value={this.state.text} onChange={this.onChange} />
                    <input type="submit" value="Search" className=" customButton"  />
                </div>
            </form>
           
            { this.props.backbutton ? <button className="circlebutton" onClick={this.props.clearuser}></button>:null }
           
        </div>

    );
}


}

export default Search