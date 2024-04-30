import React from "react";
import "./niceLanding.css";
import { Box, Stack, Typography } from "@mui/material";
import auction from "./../../assets/landing-auction-360x460.jpg";
import defaultt from "./../../assets/landing-default-360x460.jpg";
import enviromental from "./../../assets/landing-environmental-360x460.jpg";
import itCom from "./../../assets/landing-it-company-360x460.jpg";
import maritime from "./../../assets/landing-maritime-360x460.jpg";
import movie from "./../../assets/landing-movie-360x460.jpg";
import mueseum from "./../../assets/landing-museum-360x460.jpg";
import airline from "./../../assets/landing-private-airlines-360x460.jpg";
import seo from "./../../assets/landing-seo-360x460.jpg";
import taxi from "./../../assets/landing-taxi-360x460.jpg";
import theater from "./../../assets/landing-theatre-360x460.jpg";
import transport from "./../../assets/landing-transportation-360x460.jpg";
const themes = [
  {
    picture: defaultt,
    text: "Main Theme",
  },
  { picture: itCom, text: "IT Company" },
  { picture: transport, text: "Trucking" },
  { picture: enviromental, text: "Environmental" },
  { picture: seo, text: "SEO" },
  { picture: auction, text: "Auction" },
  { picture: taxi, text: "Taxi" },
  { picture: airline, text: "Private Airlines" },
  { picture: maritime, text: "Maritime" },
  { picture: mueseum, text: "Museum" },
  { picture: theater, text: "Theatre" },
  { picture: movie, text: "Movie" },
];
function NiceLanding() {
  return (
    <div className="niceLanding">
      <div className="section-wave">
        <svg
          x="0px"
          y="0px"
          width="1920px"
          height="46px"
          viewBox="0 0 1920 46"
          preserveAspectRatio="none"
        >
          <path d="M1920,0.5c-82.8,0-109.1,44-192.3,44c-78.8,0-116.2-44-191.7-44c-77.1,0-115.9,44-192,44c-78.2,0-114.6-44-192-44c-78.4,0-115.3,44-192,44c-76.9-0.1-119-44-192-44c-77,0-115.2,44-192,44c-73.6,0-114-44-190.9-44c-78.5,0-117.2,44-194.1,44c-75.9,0-113-44-191-44V46h1920V0.5z"></path>
        </svg>
      </div>
      <div className="container containNIche">
        <div className="sectionHeader">10+ Niche Landings</div>
        <Box>
          <Box className="holdAll">
            {themes.map((e, i) => {
              return (
                <div className="holder" key={i}>
                  <div className="image">
                    <img src={e.picture} alt="" />
                  </div>
                  <Typography className="text">{e.text}</Typography>
                </div>
              );
            })}
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default NiceLanding;
