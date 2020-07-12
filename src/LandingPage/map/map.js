import React, { Component } from 'react';

import { connect } from 'react-redux';
import './map.css';

class Map extends Component {
    componentDidMount() {
        const ApiKey = 'AIzaSyBUTy4ZI1mlwHiMmXZXmmKW0UQkxvdJQUk';
        const script = document.createElement('script');
        script.id='gMap';
        script.src = `https://maps.googleapis.com/maps/api/js?key=${ApiKey}`;
        script.async = true;
        script.defer = true;
        script.addEventListener('load', () => {
            this.setState({ mapIsReady: true });
        });

        document.body.appendChild(script);
    }

    componentDidUpdate() {
        if (this.state.mapIsReady) {
            console.log('latlong', this.props.geo)
            // Display the map
            this.map = new window.google.maps.Map(document.getElementById('map'), {
                center: { lat: Number(this.props.geo.lat), lng: Number(this.props.geo.lng) },
                zoom: 12,
                mapTypeId: 'roadmap',
            });
            // You also can add markers on the map below
        }
    }
    render() {

        return (
            <div id="map" className="map" />
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


export default connect(mapStateToProps, null)(Map);