import React from "react";
import useWindowsSize from "../Hooks/useWindowsSize";
import "./style.css";
import { useSelector } from "react-redux";

export default function Home({ pos }) {
  const lenguage = useSelector((state) => state.lenguage);
  let size = useWindowsSize();
  return (
    <div className="container_home">
      <div className="presentation">
        <h1>
          {lenguage
            ? "Me presento! Soy Sabrina Maizarez"
            : "I introduce myself! I'm Sabrina Maizarez"}
        </h1>

        <h2 style={{ width: "60%", textAlign: "center" }}>
          {lenguage
            ? "Tengo 20 años y actualmente estoy trabajando en Openix IT Solutions como full-stack developer. Reciéntemente me gradué de la universidad, así que realmente estoy empezando en el mundo del desarrollo de software y me encanta cada vez conocer mas de el. "
            : "I'm 20 years old and I'm currently working at Openix IT Solutions as a full-stack developer. I recently graduated from college, so I'm really just starting out in the world of software development and I love learning more and more about it."}
        </h2>
        <br/>
        <h2 style={{width: "60%", textAlign: 'center'}}>
        {lenguage
            ? "Soy una persona dedicada, con la habilidad de trabajar de manera independiente o en equipomy autodidacta también así que aspiro a aprender un poco más cada día. "
            : "I'm a dedicated person with the ability to work both independently and in a team, and self-taught as well so I aspire to learn a little more every day. "}
        </h2>

        {size.width < 750 ? (
          <h3 style={{ textAlign: "center" }}>
            {lenguage
              ? "Usa las flechas (+) para navegar en esta página"
              : "Use the arrows (+) to navigate this page."}
          </h3>
        ) : (
          <h3 style={{ textAlign: "center" }}>
            {lenguage
              ? "Solo presiona las teclas de flecha en tu teclado para navegar en esta página"
              : " Just press the arrow keys on your keyboard to navigate this page."}
          </h3>
        )}

        <div className="image_Lu_pixel" />
      </div>
    </div>
  );
}
