import React, { Component } from 'react';


import { connect } from 'react-redux';
import './Gallery.css';

class Gallery extends Component {
    render(){
        return(
    <div className="GalleryCss">
         <div className="topHeadingGallery">
                    <span className="topProfileGallery"> Gallery</span>

                    <img src={this.props.profile_user.profilepicture} className="logoImgGallery" alt="logoImage"/>
                     <span  className="logoName" > {this.props.profile_user.name}</span>
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
export default connect(mapStateToProps,null)(Gallery);