import React, { useEffect, useState } from "react";
import {
  TwitterIcon,
  DiscordIcon,
  LinkedInIcon,
  LinesIcon,
  ArrowRightIcon,
} from "../../assets/Icons";

const Footer = () => {
  return (
    <div className="footer-comp bg-themeColor flex flex-col">
      <div className="wrapWidth wrap flex flex-col">
        <div className="email-section flex items-end">
          <div className="from-block flex flex-col">
            <div className="shape-block flex items-end">
              <div className="line-icon flex items-center justify-center">
                <LinesIcon />
              </div>
              <div className="arrow-icon flex items-center justify-center">
                <ArrowRightIcon />
              </div>
            </div>
            <div className="input-form flex items-center">
              <input
                type="email"
                placeholder="Email"
                className="txt cleanbtn"
              />
              <button className="btn-submit button">Submit</button>
            </div>
          </div>
          <div className="meta-block flex flex-col">
            <h1 className="tag">Token Address</h1>
            <h1 className="token">
              PLUTUS: 0x33E4d3163e66B46bAbC0faF8B30C6c36DD4Ab9E9
            </h1>
            <h1 className="token">
              KORE: 0x9C064EC6053b2D2D2850F97365B27C654e5F14e3
            </h1>
          </div>
        </div>
        <div className="social-icons flex items-center justify-center">
          <a
            href="https://twitter.com/plutus_trade"
            target="_blank"
            className="icon flex items-center justify-center hover:cursor-pointer"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://discord.gg/HhzB37FH85"
            target="_blank"
            className="icon flex items-center justify-center hover:cursor-pointer"
          >
            <DiscordIcon />
          </a>
          <a
            href="https://t.me/plutus_pulsechain"
            target="_blank"
            className="icon flex items-center justify-center hover:cursor-pointer"
          >
            <LinkedInIcon />
          </a>
        </div>
        <div className="copyright-sec flex items-center justify-center">
          <h1 className="copy-right">© Copyright 2023</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
