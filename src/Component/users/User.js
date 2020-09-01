import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom'
import { Repos } from './Repos'
class User extends Component {

  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getRepos(this.props.match.params.login);
  }

  render() {
    const {
      name, login, website, location, avatar_url, html_url, company, public_gists,
      blog, email, hireable, bio, public_repos, followers, following, twitter_username
    } = this.props.user;

    return <section className="mt-5 body-container">
      <Link to='/' className="customButton "><i className="fa fa-arrow-left pr-2" ></i>Back To Home</Link>

      <span className="customBut  bg-light border-light ">
        Hireable{' '}
        {
          hireable ? <i className="fa fa-check text-primary" ></i> : <i className="fa fa-times-circle text-danger"></i>
        }
      </span>


      {/* PROFILE SECTION  */}
      <div className="mt-5">
        <div className="row  py-5  shadow">
          <div className="col-md-4 text-capitalize text-center">
            <img src={avatar_url} className="img-fluid rounded" alt="name" style={{ maxHeight: "200px" }} />
            <h3 className="title-head mt-4">{name}</h3>
            {location && <Fragment> <h4 className="title-para mt-3 "> <strong> Location : </strong> {location}</h4> </Fragment>}




          </div>
          <div className="col-md">
            {/* POFILE DETAILS */}
            <div className="card border-0 h-100 p-2 text-center text-md-left">
              {login && <Fragment>
                <h4 className="title-para text-capitalize mt-2 "><strong>User Name : </strong>  {login}</h4>
              </Fragment>}
              {twitter_username && <Fragment>
                <h4 className="title-para  mt-2 "><strong>Twitter Username : </strong> {twitter_username}</h4>
              </Fragment>}
              {company && <Fragment>
                <h4 className="title-para text-capitalize mt-2 "><strong>Company : </strong>{company}</h4>
              </Fragment>}
              {email && <Fragment>
                <h4 className="title-para  mt-2 "><strong>Email : </strong> {email}</h4>
              </Fragment>}
              {bio && <Fragment>
                <h4 className="title-para text-capitalize mt-2 "><strong>Bio : </strong> {bio}</h4>
              </Fragment>}
              {blog && <Fragment>
                <h4 className="title-para  mt-2 "><strong>Blog : </strong> {blog}</h4>
              </Fragment>}
              {website && <Fragment>
                <h4 className="title-para  mt-2 "><strong>Website : </strong> {website}</h4>
              </Fragment>}


              <Repos  repository={this.props.repos} ></Repos>

              <div className="card-body p-0 ">
                <a href={html_url} target="_black" className="customButton mt-5"><i className="fa fa-github pr-2"></i>View In Github</a>
              </div>

              <div className="card-footer bg-white border-0 m-0 mt-3 p-0">
                <ul className="d-flex justify-content-center justify-content-md-start p-0" style={{flexWrap:"wrap"}}>
                  <li className="linkerbtn"><a href={`https://github.com/${login}?tab=followers`} target="_black"><i className="fa fa-users  pr-2  " aria-hidden="true"></i>{followers} Followers</a></li>
                  <li className="linkerbtn"><a href={`https://github.com/${login}?tab=following`} target="_black"><i className="fa fa-user  pr-2  " aria-hidden="true"></i>{following} following</a></li>
                  <li className="linkerbtn"><a href={`https://github.com/${login}?tab=repositories`} target="_black"><i className="fa fa-file  pr-2  " aria-hidden="true"></i>{public_repos} Public Repos</a></li>
                  <li className="linkerbtn"><a href={`https://github.com/${login}?tab=gists`} target="_black"><i className="fa fa-file-text  pr-2  " aria-hidden="true"></i>{public_gists} Public Gists</a></li>
                </ul>
              </div>

            </div>
          </div>




        </div>
      </div>




    </section>
  }
}


export default User;