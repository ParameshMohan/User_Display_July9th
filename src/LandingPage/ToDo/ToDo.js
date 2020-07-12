import React, { Component } from 'react';


import { connect } from 'react-redux';
import './ToDo.css';

class ToDo extends Component {
    render(){
        return(
    <div className="ToDoCss">
         <div className="topHeadingToDo">
                    <span className="topProfileToDo"> ToDo</span>

                    <img src={this.props.profile_user.profilepicture} className="logoImgToDo" alt="logoImage"/>
                     <span  className="logoNameToDo" > {this.props.profile_user.name}</span>
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
export default connect(mapStateToProps,null)(ToDo);
