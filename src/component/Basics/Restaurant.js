import React, { useState } from 'react'
import "./style.css"
import "./menuApi"
import Menu from './menuApi'
import MenuCard from './MenuCard'
import Navbar from "./Navbar"

const uniqueList = [
  ...new Set(Menu.map((curElem) => {
    return curElem.category;
  })
  ),"all",
]

console.log(uniqueList)

const Restaurant = () => {

  const [menuData,setMenuData] = useState(Menu);
  const [menuList,setMenuList] = useState(uniqueList);
  // console.log(menuData)
  const filterItem = (category) => {
    if(category === 'all'){
      setMenuData(Menu);
      return;
    }
      
    else{
      const updateList = Menu.filter( (curElem) => {
        return curElem.category === category;
      });
      setMenuData(updateList);
    }
    
  }

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList}></Navbar>
      {/* <nav className='navbar'>
        <div className='btn-group'>
          <button className='btn-group__item' onClick={() => filterItem("breakfast")}>Breakfast</button>
          <button className='btn-group__item' onClick={() => filterItem("lunch")}>Lunch</button>
          <button className='btn-group__item' onClick={() => filterItem("evening")}>Evening</button>
          <button className='btn-group__item' onClick={() => filterItem("dinner")}>Dinner</button>
          <button className='btn-group__item' onClick={() => filterItem("all")}>All</button>
        </div>
      </nav> */}
      <MenuCard menuData = {menuData}/>
    </>
  )
}

export default Restaurant;

