import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

class GoogleMap extends Component {
    render() {
        return (
            <Map google={this.props.google} zoom={14}>
                <Marker
                    onClick={this.onMarkerClick}
                    name={"Current location"}
                />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAip7BQjHGoOFtmHvxskfjx7I6Pt51JR5U"
})(GoogleMap);
