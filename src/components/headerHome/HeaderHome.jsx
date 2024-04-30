import React from "react";
import { Typography } from "@mui/material";
import "./header.css";
import photo1 from "./../../assets/headerbackground1.png";
import photo2 from "./../../assets/headerbackground2.png";
import photo3 from "./../../assets/headerbackground3.png";
import photo4 from "./../../assets/headerbackground4.png";
import photo5 from "./../../assets/headerbackground5.png";
import photo6 from "./../../assets/headerbackground6.png";
function HeaderHome() {
  return (
    <>
      <div className="header">
        <div className="container">
          <Typography className="paragraphHeader ">
            {" "}
            Welcome to Brave Theme
          </Typography>
          <Typography className="mainHeaderParagraph">NEW TEMPLATE</Typography>

          <div className="buttons">
            <a className="button1">VIEW DEMOS</a>
            <a className="button2">TRY BUILDER</a>
          </div>
          <div className="photos">
            <div className="photo1">
              <img className="photo1" src={photo1} alt="" />
            </div>
            <div className="photo2">
              <img className="photo2" src={photo2} alt="" />
            </div>
            <div className="photo3">
              <img className="photo3" src={photo3} alt="" />
            </div>
            <div className="photo4">
              <img className="photo4" src={photo4} alt="" />
            </div>
            <div className="photo5">
              <img className="photo5" src={photo5} alt="" />
            </div>
            <div className="photo6">
              <img className="photo6" src={photo6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderHome;
