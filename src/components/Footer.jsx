import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import logo from "../assets/logo.png";
import "../styles/footer.css";

// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from 'react';

const Footer = () => {
  // useEffect(() => {
  //     AOS.init({
  //       duration: 1000,
  //       easing: "ease-in-out",
  //       once: true,
  //     });
  //   }, []);
  return (
    <>
      <div className="footerMain" >
        <div className="footerLeft">
          <img src={logo} alt="" />
          <p className="footerLeftText">
            Exclusi_ve is a platform that aims to build a new creative <br />{" "}
            economy—a world where creators can use the Ethereum <br />
            blockchain to value their work in entirely new ways, and build
            <br /> stronger connections with their supporters.
          </p>
          {/* <div className="footerIcons">
            <FacebookIcon
              sx={{
                fontSize: "34px",
                backgroundColor: "blue",
                borderRadius: "50%",
                padding: "5px",
              }}
              className="footericon"
            ></FacebookIcon>
            <InstagramIcon
              sx={{
                fontSize: "34px",
                backgroundColor: "blue",
                borderRadius: "50%",
                padding: "5px",
              }}
              className="footericon"
            ></InstagramIcon>
            <TwitterIcon
              sx={{
                fontSize: "34px",
                backgroundColor: "blue",
                borderRadius: "50%",
                padding: "5px",
              }}
              className="footericon"
            ></TwitterIcon>
          </div> */}
        </div>
        <div className="footerRight">
          <div className="footerRightColumn">
            <div className="footerRightColumnColumn1">
              <p className="footerRightColumnHeading">Community</p>
              <p className="footerRightColumnItems">Discord ↗</p>
              <p className="footerRightColumnItems">Telegram ↗</p>
              <p className="footerRightColumnItems">Instagram ↗</p>
            </div>
          </div>

          <div className="footerRightColumn">
            <div className="footerRightColumnColumn1">
              <p className="footerRightColumnHeading">Support</p>
              <p className="footerRightColumnItems">Community</p>
              <p className="footerRightColumnItems">Guidelines</p>
              <p className="footerRightColumnItems">Terms Of Service</p>
            </div>
          </div>

          <div className="footerRightColumn">
            <div className="footerRightColumnColumn1">
              <p className="footerRightColumnHeading">Company</p>
              <p className="footerRightColumnItems">About</p>
              <p className="footerRightColumnItems">Roadmap</p>
              <p className="footerRightColumnItems">Career</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <div className="footerLine"></div>
        <div className="lastFooter">
          <p className="rights" >
            © 2022 Exclusive Inc. All rights reserved. — Privacy Policy · Terms
            of Service
          </p>
          {/* <p className="rights">Supported by Templars</p> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
