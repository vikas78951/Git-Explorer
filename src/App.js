import React, { Component, Fragment } from 'react';
import './App.css';
import './Style/style.css';
import Nav from './Component/Nav';
import Usercontaniner from './Component/users/Usercontainer';
import Search from './Component/users/Search';
import axios from 'axios';
import Loading from './Component/Loading'
import Empty from './Component/Empty'
import {Alert} from './Component/Alert';
import About from  './Component/pages/About';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import User from './Component/users/User';
import {Footer} from './Component/Footer';
class App extends Component {

  state = {
    user: [],
    loading: false,
    backbutton: false,
    alert:null,
    selecteduser:{},
    repos:[]
  }



  //FETCHING DATA AND FEEDING INTO STATES 
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get("https://api.github.com/users?per");
    this.setState({
      user: res.data,
      loading: false
    }
    );
  }


  // SEARCHING USERS 
  searchuser = async (user) => {
    if (user !== '') {
      this.setState({ loading: true })
      const http = "https://api.github.com/search/users?q="+ user;
      const res = await axios.get(http);
      this.setState({
        user: res.data.items,
        loading: false,
        backbutton: true
      });
    }
  }


  
  // FETCHING SINGLE USER DATA 
  getUser = async (username) => {  
      this.setState({ loading: true });
      const http = "https://api.github.com/users/"+username;
      const res = await axios.get(http);
      this.setState({
        selecteduser: res.data,
        loading: false
      });
  
  }

    // FETCHING  USER REPOSITORY 
    getRepos = async (username) => {  
      this.setState({ loading: true });
      const http = `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`;
      const res = await axios.get(http);
      this.setState({
        repos: res.data,
        loading: false
      });
  
  }



  // CLEARING USER SEARCHED
  clearuser = async () => {
    this.setState({
      user: []
    })
    this.setState({ loading: true });
    const res = await axios.get("https://api.github.com/users");
    this.setState({
      user: res.data,
      loading: false,
      backbutton: false
    }
    );
  }


  // SETTING STATE FOR ALERT
  setAlert =(message ,type) =>{
    this.setState({
      alert:{
        message:message,
        type:type}
    });
    setTimeout(()=>this.setState({alert:null}),4000);

  }




  render() {

        return(
          <Router>
              <section className="App text-left">

              <Nav title="Git Explorer" icon="fa fa-github" />

            <Switch>

              <Route exact path='/' render={props=>(
                <Fragment>
                    {
                    this.state.loading ? <Loading /> :
                      <div>
                        <Alert alert={this.state.alert} />
                        <Search searchuser={this.searchuser}
                                clearuser={this.clearuser}
                                backbutton={this.state.backbutton}
                                setAlert={this.setAlert}>
                        </Search>
                        {this.state.user.length > 0 ? <Usercontaniner mydata={this.state.user} /> : <Empty />}
                      </div>
                      }
                </Fragment>
              )} />

            <Route exact path="/about" component={About}/>

            <Route exact path="/user/:login"  render={props=>(
              <User {...props} getUser={this.getUser}
                              user={this.state.selecteduser} 
                               getRepos={this.getRepos}                               
                               repos={this.state.repos} />
              )}/>


            </Switch>

              <Footer></Footer>
            </section>            
          </Router>
        );




  }
}

export default App;
