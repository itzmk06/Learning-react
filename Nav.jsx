import { NavLink } from "react-router-dom";

function Nav() {
  const highLight = (e) => {
    return [
      e.isActive ? "" : "",
      e.isActive ? "font-semibold" : "",
      e.isActive ? "bg-blue-500 px-3  rounded-full text-white" : "",
    ].join(" ");
  };
  return (
    <div>
      <nav className="flex  justify-center gap-20 m-10">
        <NavLink className={(e) => highLight(e)} to="/">
          Home
        </NavLink>
        <NavLink className={(e) => highLight(e)} to="/user">
          User
        </NavLink>
        <NavLink className={(e) => highLight(e)} to="/about">
          About
        </NavLink>
      </nav>
    </div>
  );
}

export default Nav;
