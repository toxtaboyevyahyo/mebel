import "../styles/main.css";
import meb from "../assets/image.png";
import { mains } from "../data/mains.js";
import { useState } from "react";

const Main = () => {
  const [url, setUrl] = useState(meb);
  const handleImg = () => {
    setUrl("https://smebel.uz/files/proekti/gostinie/045.jpg");
  };
  return (
    <div className="main">
      {mains.map((title) => {
        return (
          <div className="mains">
            <div className="main-content">
              <h1>{title.live}</h1>
              <p>{title.kocha}</p>
              <button onClick={handleImg}>{title.btn}</button>
            </div>
            <div className="main-images">
              <img src={url} width={400} height={400} alt="img" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
