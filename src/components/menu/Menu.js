import "./Menu.css";
import Card from "../card/Card";
import { useEffect, useState } from "react";
import useFoodContext from "../../hook/useFoodHook";
import lunchData from "../../fackeData/lunch";

function Menu() {
  const [foodData, setFoodData] = useState();
  const { data } = useFoodContext();

  useEffect(() => {
    setFoodData(data);
  }, [data]);


  return (
    <div className=" menu-wrap padding">
      <div className="menu">
        {foodData && foodData.map((data) => <Card key={data.key} item={data} />)}
      </div>
    </div>
  );
}

export default Menu;
