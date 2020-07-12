import React, { Component } from 'react';


import { connect } from 'react-redux';
import './Posts.css';

class Posts extends Component {
    render(){
        return(
    <div className="postsCss">
         <div className="topHeadingPosts">
                    <span className="topProfilePosts"> Posts</span>

                    <img src={this.props.profile_user.profilepicture} className="logoImgPosts" alt="logoImage"/>
                     <span  className="logoNamePosts" > {this.props.profile_user.name}</span>
                </div>
        <h1> Coming soon</h1>

    </div>

)
    }
    }


    const mapStateToProps = state => {
        return {
            profile_user: state.profile_user,
            company: state.company,
            address: state.address
        }
    }
export default connect(mapStateToProps,null)(Posts);