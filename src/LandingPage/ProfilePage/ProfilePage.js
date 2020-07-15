import React, { Component } from 'react';

import { connect } from 'react-redux';

import './ProfilePage.css';
import Map from './../map/map';

class ProfilePage extends Component {

    render() {

        return (
            <div className="parentDiv1">
                <div className="topHeading">
                    <span className="topProfile"> Profile</span>

                    <img src={this.props.profile_user.profilepicture} className="logoImg" alt="logoImage" />
                    <span className="logoName" > {this.props.profile_user.name}</span>
                </div>

                {/* ------------------------ whole div start ------------- */}
                <div className="wholeDiv">
                    <div className="firstDiv" >
                        <img src={this.props.profile_user.profilepicture} className="img" alt="UserImage" />
                        <span className="color2"> {this.props.profile_user.name}</span>
                        <br></br>
                        <div className="thirdDiv">
                            <dl>
                                <dt>Username</dt><dd>{this.props.profile_user.name}</dd>
                                <br></br>

                                <dt>e-mail</dt><dd>{this.props.profile_user.email}</dd>
                                <br></br>

                                <dt>Phone</dt><dd>{this.props.profile_user.phone} </dd>
                                <br></br>

                                <dt>Website</dt><dd>{this.props.profile_user.website}</dd>
                            </dl>
                        </div>


                    </div>

                    <div className="secondDiv">
                  
                        <div>
                            <label className="labelcls">Company Name :</label>
                            <label className="labelvl">{this.props.company.name}</label>
                        </div>
                        <br></br>
                        <div>
                        <label className="labelcls">Catch Phrase :</label>
                        <label className="labelvl">{this.props.company.catchPhrase}</label>
                        </div>
                        <br></br>
                        <div>
                        <label className="labelcls">bs :</label>
                        <label className="labelvl">{this.props.company.bs}</label>
                        </div>
                        
                    </div>
                    <div className="rightMapDiv">
                        <span className="headingRightMapDiv">Address </span>
                        <br></br>
                        <br></br>
                        <div className="blockRightMapDiv">
                            <dt>   Street </dt><dd> {this.props.address.street}</dd>
                            <br></br>

                            <dt> Suite </dt> <dd> {this.props.address.suite}</dd>
                            <br></br>

                            <dt>City </dt>   <dd>{this.props.address.city}</dd>
                            <br></br>

                            <dt>Zipcode </dt>  <dd>{this.props.address.zipcode}</dd>
                        </div>
                        <Map />
                        <span>lat :{this.props.geo.lat} Lng: {this.props.geo.lat}</span>

                    </div>

                </div>

            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        profile_user: state.profile_user,
        company: state.company,
        address: state.address,
        geo: state.geo
    }
}


export default connect(mapStateToProps, null)(ProfilePage);