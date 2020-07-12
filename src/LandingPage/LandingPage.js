import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Route, Switch,withRouter } from 'react-router-dom';
import ProfilePage from './ProfilePage/ProfilePage';
import Posts from './Posts/Posts';
import Layout from './Layout';
import Gallery from './Gallery/Gallery';
import ToDo from './ToDo/ToDo';

class LandingPage extends Component {

    render() {

        return (
            <div>
                <Layout>
                    <Switch>
                    <Route path="/landingPage/toDo" component={ToDo} />
                    <Route path="/landingPage/gallery" component={Gallery} />
                        <Route path="/landingPage/posts" component={Posts} />
                        <Route path="/landingPage/ProfilePage" component={ProfilePage} />
                    </Switch>
                </Layout>
            </div >
        )
    }
};

const mapStateToProps = state => {
    return {
        navigatePosts: state.navigatePosts
    }
}


export default connect(mapStateToProps, null)(LandingPage);

