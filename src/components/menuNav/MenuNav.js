import { useState } from 'react'
import './MenuNav.css'

import './MenuNav.css'
import useFoodContext from '../../hook/useFoodHook';
import lunchData from './../../fackeData/lunch';
import breakfastData from './../../fackeData/breackfast';
import dinnerData from './../../fackeData/dinner';
function MenuNev() {
  const [active,setActive] = useState(2);
  const {loadData} = useFoodContext();

  const hendleClick = (e) => {
    setActive(e)
    if(e ===1){
      loadData(breakfastData)
    }
    if(e === 2) {
      loadData(lunchData)
    }
    if(e === 3){
      loadData(dinnerData)
    }
  }
  return (
    <nav className='menu-nav padding center'>
      <ul>
        <li onClick={() => hendleClick(1)} className={`m-after ${active === 1 ? "m-active" : " "}`} >Breackfast</li>
        <li onClick={() => hendleClick(2)} className={`m-after ${active === 2 ? "m-active" : " "}`}>Lunch</li>
        <li onClick={() => hendleClick(3)} className={`m-after ${active === 3 ? "m-active" : " "}`}>Dinner</li>
      </ul>
    </nav>
  )
}

export default MenuNev
