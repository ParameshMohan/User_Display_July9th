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

                            Username : {this.props.profile_user.name}
                            <br></br>
                            <br></br>
                            e-mail  : {this.props.profile_user.email}
                            <br></br>
                            <br></br>
                           Phone    : {this.props.profile_user.phone}
                            <br></br>
                            <br></br>
                           Website  :{this.props.profile_user.website}
                        </div>


                    </div>

                    <div className="secondDiv">

                        <span className="headingSecondDiv">Company</span>
                        <br></br>
                        <br></br>
                              CompanyName   : {this.props.company.name}
                        <br></br>
                        <br></br>
                        CatchPhrase  : {this.props.company.catchPhrase}
                        <br></br>
                        <br></br>
                                Bs   : {this.props.company.bs}

                    </div>
                    <div className="rightMapDiv">
                        <span className="headingRightMapDiv">Address </span>
                        <br></br>
                        <br></br>
                        <div className="blockRightMapDiv">
                            Street : {this.props.address.street}
                            <br></br>
                            <br></br>
                        Suite  : {this.props.address.suite}
                            <br></br>
                            <br></br>
                        City   : {this.props.address.city}
                            <br></br>
                            <br></br>
                            Zipcode  : {this.props.address.zipcode}
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