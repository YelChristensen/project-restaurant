import React from 'react';

class Locations extends React.Component{

  render(){
      const locationsArr = this.props.locations.map(location =>
        <ul class="locations__ul" key={location.id}><li>{location.streetAddress}</li>
        <li>{location.city}</li>
        </ul>)
    return (
        <ul>
        {locationsArr}
        </ul>
    );
  }
}

export default Locations;