import React, { Component } from 'react';


import { connect } from 'react-redux';
import * as actions from '../Store/actions/index';


import './FirstPage.css';

class FirstPage extends Component {

  componentDidMount() {

    this.props.onInit()
  }

  userSelectHandler = (id) => {
    this.props.onProfileUser(id);
    this.props.history.push('/landingPage/profilePage');
  }
  render() {
    let list = this.props.posts.map(post => {
      return (

        <div className="item" key={post.id}>
          <h4 onClick={() => { this.userSelectHandler(post.id) }}><a href='#'>{post.name}</a></h4>
        </div>

      )
    }

    )
    return (
      <div className="parentFirstPage">
        <h1> Home Page</h1>

        <div className="outerDiv">
          <span className="heading1"> Select Account </span>
          <div className="scroll" id="divList">
            {list}
          </div>
        </div>
      </div >
    )
  }
};


const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onInit: () => dispatch(actions.initUsers()),
    onProfileUser: (id) => dispatch(actions.profileUser(id))

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FirstPage);

