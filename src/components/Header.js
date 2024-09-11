import "../styles/header.css";
import { head } from "../data/head";

const Header = () => {
  return (
    <div className="header">
      {head.map((item) => {
        return (
          <div className="header-box">
            <div>
              <h1 className="header-title">{item.name}</h1>
            </div>
            <div>
              <span className="span-btn">{item.mast}</span>
              <span className="span-btn">{item.office}</span>
              <a className="link" href="#">
                {item.tel}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Header;
