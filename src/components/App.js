import React from 'react';
import Menu from './Menu';
import Locations from './Locations';

const menuItems = [{id: 1, name:"Cheeseburger", price: 5, img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cheeseburger.jpg/300px-Cheeseburger.jpg"}, {id:2, name:"Fries", price: 2, img:"https://www.buffalowildwings.com/globalassets/menuitems/10120020-french-fries.png?format=jpg&width=900&v=2"}, {id: 3, name:"Pizza", price: 5, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpzmxMg9VMm4a5AN-lu0ycgmltJETTgkBzIv2Rj1iCETCcAVUx"},{id:4, name:"Salad", price: 3, img:"https://cdn.shopify.com/s/files/1/1581/0837/products/Salad.jpg?v=1493334720"}, {id:5, name:"Chicken", price:6, img:"https://cdn3.tmbi.com/toh/GoogleImages/Crispy-Fried-Chicken_exps6445_PSG143429D03_05_5b_RMS.jpg"}]
const locations = [{id:1, streetAddress:"1 Magnolia Street", city:"London"}, {id:2, streetAddress:"177 Maple Road", city: "Bristol"}, {id:3, streetAddress:"1 Clover Lane", city:"Aberdeen"}]

class App extends React.Component {
  render(){
    return (
      <div className="body">
        <header> Shop </header>
        <div className="container">
          <div className="menu">
              <Menu menuItems={menuItems} />
          </div>
        <div className="locations">
              <Locations locations={locations} />
        </div>
        </div>
      </div>
    )
  }
}

export default App;
