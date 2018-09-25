import React from 'react';
// import Menu from './Menu';
// import Locations from './Locations';

const menuItems = [{id: 1, name:"Cheeseburger", price: 5}, {id:2, name:"fries", price: 2}, {id: 3, name:"pizza", price: 5}]
const locations = [{id:1, streetAddress:"1 Magnolia Street", city:"London"}, {id:2, streetAddress:"177 Maple Road", city: "Bristol"}, {id:3, streetAddress:"1 Clover Lane", city:"Aberdeen"}]

class App extends React.Component {
  render(){
    return (
      <div>
        <div className="menu">
        <ul>
            {menuItems.map(menuItem => 
                <li key={menuItem.id} >{menuItem.name}: {menuItem.price}</li>
            )}
          </ul>
        </div>
       <div className="locations">
            <ul>
              {locations.map(location =>
      <ul key={location.id}><li>{location.streetAddress}</li>
      <li>{location.city}</li>
      </ul>
              )}
            </ul>
       </div>
      </div>
    )
  }
}

export default App;
