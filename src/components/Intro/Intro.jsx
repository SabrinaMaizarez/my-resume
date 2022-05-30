import React, { useState, useEffect } from "react";
import ButtonStart from "../Buttons/ButtonStart/ButtonStart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";

export default function Intro({ setPos }) {
  const lenguage = useSelector((state) => state.lenguage);
  const [state, setState] = useState(false);
  const [lips, setLips] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setState(true);
      setLips(true);
    }, 3500);
    setTimeout(() => {
      setLips(false);
    }, 2800);
  }, []);
  const handleStart = () => {
    setPos(1);
  };
  const text = ["<h1>", "</h1>"];
  return (
    <div>
      <div className="container_image_pixel">
        <div className="image_pixel">
          {/* <div className={lips ? "lips" : undefined} /> */}
        </div>
      </div>
      <div className="container_intro">
        <div className="command">
          <p className="text-top">{text[0]}</p>
          <div style={{ position: "relative" }}>
            <p
              className="line anim-typewriter"
              style={{ border: state ? "none" : undefined }}
            >
              {lenguage ? "Hola!" : "Hey u there!"}
            </p>
            {state && (
              <p style={{ width: "12em" }} className="line anim-typewriter2">
                {lenguage
                  ? "Te gustaría darle un vistazo a mi resume?"
                  : "Would you like to take a look at my resume?"}
              </p>
            )}
          </div>
          <p className="text-top">{text[1]}</p>
        </div>
        <div onClick={handleStart} style={{ zIndex: 5 }}>
          <Link to="/resume-web/home">
            <ButtonStart />
          </Link>
        </div>
      </div>
    </div>
  );
}
