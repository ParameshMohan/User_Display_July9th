import React, { Component } from 'react';

import { connect } from 'react-redux';
import axios from 'axios';
import { Route, NavLink, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import ProfilePage from './ProfilePage/ProfilePage';
import './Layout.css';
import * as actions from '../Store/actions/index';
import Posts from './Posts/Posts';

class Layout extends Component {

    render() {
     
        return (
            <div className="parentDiv">
                



                <div className="blueBox">
                    <div className="profileDiv1"  >
                        <NavLink to="/landingPage/profilePage/" > Profile</NavLink>

                    </div>
                    <div className="postsDiv2"   >
                        <NavLink to="/landingPage/posts" > Posts</NavLink>
                    </div>
                    <div className="galleryDiv2">
                    <NavLink to="/landingPage/gallery" > Gallery</NavLink>
                     </div>
                    <div className="toDoDiv2">
                    <NavLink to="/landingPage/toDo" > ToDo</NavLink>
                    </div>
                </div>

                <main className="Content">

                    {this.props.children}

                </main>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        profile_user: state.profile_user,
        company: state.company,
        address: state.address,

    }
}

const mapDispatchToProps = dispatch => {
    return {

        onNaviPosts: () => dispatch(actions.postComp())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);