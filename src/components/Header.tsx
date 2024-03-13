import { Link, Outlet } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header>
        <h1>人口遷移グラフ</h1>
      </header>
      <nav>
        <Link to="/">
          <h1>Topに戻る</h1>
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export { Header };
