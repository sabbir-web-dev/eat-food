import "./Menu.css";
import Card from "../card/Card";
import useFoodContext from "../../hook/useFoodHook";

function Menu() {
  const { menuData } = useFoodContext();
  return (
    <div className=" menu-wrap padding">
      <div className="menu">
        {menuData && menuData.map((data) => <Card key={data.key} item={data} />)}
      </div>
    </div>
  );
}

export default Menu;
