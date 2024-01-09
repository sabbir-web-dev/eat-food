import { AiOutlineLeft } from "react-icons/ai"; 
import { AiOutlineRight } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import React, { useEffect, useState } from "react";
import useFoodContext from './../hook/useFoodHook';
import {  Navigate, useNavigate, useParams } from "react-router-dom";

function FoodDetails() {
  const [foodData,setFoodData] =useState({})
  const [count,setCount] = useState(1);
  const [sImg,setSimg] = useState([]);
  // const [allImg,setAllImg] = useState({})
  const [showPrice,setShowPrice] =useState()

  const {addCard,data,setPrice} = useFoodContext();

  const hendleDecrement = (price) => {
    if(count < 1 || count === 1 ){
      setCount(1)
    }
    if (showPrice > price && showPrice !== price) {
      setCount(count - 1);
      setShowPrice(showPrice - price);
    }
    
  }

  const hendleIncrement = (price) => {
    setShowPrice(showPrice + price);
    setCount(count + 1);
  }

  const {key} = useParams()
  useEffect(() => {
    const item = data.filter(data => data.key === key )
    setFoodData(item[0])
    setShowPrice(item[0].price)
    const imgCatagory = data.filter(data=> data.category === item[0].category);
    setSimg(imgCatagory)
  },[data, key]);

  const navigate = useNavigate()

  const hendleAddCard = () => {
    const selectFood = data.filter(data => data.key === key)
    selectFood[0].quantity = count
    setPrice(showPrice);
    addCard(key)

    navigate(-1)
   
  }

  const {img,detels,name,price} = foodData;
  return (  
    <div className="food-item-wrap padding">
      <div className="food-col">
        <div className="col50">
          <h1>{name}</h1>
          <p>
           {detels}
          </p>
          <div className="price-wrap">
            <h2>${showPrice}</h2>
            <div className="quantity-wrap">
              <h4 onClick={() => hendleDecrement(price)}>-</h4>
              <h3>{count}</h3>
              <h4 onClick={() => hendleIncrement(price)}>+</h4>
            </div>
          </div>
          <div className="">
            <button className="btn b-padding " onClick={hendleAddCard}>
              {" "}
              <CgShoppingCart /> Add
            </button>
          </div>

          <div className="sajution">
          <div className="r-icon">
              <AiOutlineLeft className="icon-r" />
            </div>
            <div className="img">
              {/* <img src={img1} alt="" /> */}
            </div>
            <div className="img">
              {/* <img src={img2} alt="" /> */}
            </div>
            <div className="r-icon">
              <AiOutlineRight className="icon-r" />
            </div>
          </div>
        </div>
        <div className="col50 item-2">
          <div className="right-img">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;
