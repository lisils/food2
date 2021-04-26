import React from 'react';
class MapCard extends React.Component {

  render() {
      // return <h6>this is a map</h6>
    return this.props.resAddress && this.props.cusAddress ? (
        <img src={`https://maps.googleapis.com/maps/api/staticmap?size=400x400&zoom=11
        &markers=color:blue%7Clabel:R%7C${this.props.resAddress}
        &markers=color:red%7Clabel:C%7C${this.props.cusAddress}
        &path=color:0x0000ff|weight:5|${this.props.resAddress}|${this.props.cusAddress}
        &key=${process.env.REACT_APP_API_KEY}`} alt="map" />
    ) : null;
    }
}

export default MapCard;