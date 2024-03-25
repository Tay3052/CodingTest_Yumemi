import { Link, Outlet } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <>
      <header>
        <h1>都道府県人口遷移</h1>
        <Link to="/">
          <button className="back">Topに戻る</button>
        </Link>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
