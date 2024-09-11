import "../styles/hero.css";
import { her } from "../data/her";
import { useState } from "react";

const Hero = () => {
  const [count, setCount] = useState(0);
  const handCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="hero">
      {her.map((value) => {
        return (
          <div className="hero-box">
            <div>
              <div className="hero-flex">
                <div className="hero-block">
                  <h1>{value.lastName}</h1>
                </div>
                <div className="hero-block">
                  <h1>{value.name}</h1>
                </div>
              </div>
              <h1 className="subtitle">{value.mebel}</h1>
            </div>
            <div className="hero-list">
              <div className="hero-items">
                <img
                  className="img"
                  width={400}
                  height={400}
                  src={value.img}
                  alt="img"
                />
                <p>Reyting: {count}</p>
                <button onClick={handCount} className="btn1">
                  {value.but}
                </button>
              </div>
              <div className="hero-items">
                <img
                  className="img"
                  width={400}
                  height={400}
                  src={value.image}
                  alt="img"
                />
                <p>Reyting: {count}</p>
                <button onClick={handCount} className="btn1">
                  {value.but}
                </button>
              </div>
              <div className="hero-items">
                <img
                  className="img"
                  width={400}
                  height={400}
                  src={value.images}
                  alt="img"
                />
                <p>Reyting: {count}</p>
                <button onClick={handCount} className="btn1">
                  {value.but}
                </button>
              </div>
              <div className="hero-items">
                <img
                  className="img"
                  width={400}
                  height={400}
                  src={value.imgurl}
                  alt="img"
                />
                <p>Reyting: {count}</p>
                <button onClick={handCount} className="btn1">
                  {value.but}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Hero;
