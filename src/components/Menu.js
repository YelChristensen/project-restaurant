import React from 'react';

class Menu extends React.Component{

  render(){
      const menuArr = this.props.menuItems.map(menuItem => 
        <li className="menu__li" key={menuItem.id}><div>{menuItem.name}: £{menuItem.price}.00</div>
        <img src={menuItem.img} /></li>
        )
    return (

        <ul>
        {menuArr}
        </ul>
    );
  }
}

export default Menu;