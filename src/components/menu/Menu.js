import "./Menu.css";
import lunchData from "./../../fackeData/lunch";
import Card from "../card/Card";
function Menu() {
  return (
    <div className=" menu-wrap padding">
      <div className="menu">
        {lunchData.map((data) => (
          <Card key={data.id} item={data} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
