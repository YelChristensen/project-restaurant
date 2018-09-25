import React from 'react';
import Menu from './Menu';
import Locations from './Locations';

const menuItems = [{id: 1, name:"Cheeseburger", price: 5, img:"./cheesebuger.jpg"}, {id:2, name:"Fries", price: 2}, {id: 3, name:"Pizza", price: 5},{id:4, name:"Salad", price: 3}, {id:5, name:"Chicken", price:6}]
const locations = [{id:1, streetAddress:"1 Magnolia Street", city:"London"}, {id:2, streetAddress:"177 Maple Road", city: "Bristol"}, {id:3, streetAddress:"1 Clover Lane", city:"Aberdeen"}]

class App extends React.Component {
  render(){
    return (
      <div className="container">
        <div className="menu">
            <Menu menuItems={menuItems} />
        </div>
       <div className="locations">
            <Locations locations={locations} />
       </div>
      </div>
    )
  }
}

export default App;
