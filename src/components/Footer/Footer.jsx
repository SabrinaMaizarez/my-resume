import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GetAppIcon from "@material-ui/icons/GetApp";
import Lenguage from "../Lenguage/Lenguage";

import "./style.css";
import { useSelector } from "react-redux";

export default function Footer() {
  const lenguage = useSelector((state) => state.lenguage);
  return (
    <div className="container_footer">
      <div className="social_medias">
        <a
          rel="noopener noreferrer"
          target="_BLANK"
          href="https://www.linkedin.com/in/sabrinamaizarez/"
        >
          <LinkedInIcon fontSize="default" style={{ color: "black" }} />
        </a>
        <a
          rel="noopener noreferrer"
          target="_BLANK"
          href="https://github.com/SabrinaMaizarez"
        >
          <GitHubIcon fontSize="default" style={{ color: "black" }} />
        </a>
        <a
          target="_BLANK"
          href="https://docs.google.com/document/d/16Ib-qF6aJ6BPWKsnDPraQt3LcvfqvMNEdxoS-IV8UL8/edit"
          rel="noreferrer"
          className="icon_Cv"
        >
          <h6 style={{ margin: 0 }}>CV</h6>
          <GetAppIcon fontSize="default" style={{ color: "black" }} />
        </a>
      </div>
      <div className="text_footer">
        <p>{lenguage ? "Hecho con 💛 por Sabri" : "Made with 💛 by Sabri"}</p>
      </div>
      <Lenguage />
    </div>
  );
}
