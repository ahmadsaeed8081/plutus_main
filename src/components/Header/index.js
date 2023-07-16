import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSidebar } from "../../store/reducers/globalReducer";
import {
  LinkedInIcon2,
  TwitterIcon,
  DiscordIcon,
  MenuIcon,
} from "../../assets/Icons";

const Header = () => {
  const dispatch = useDispatch();
  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleMenuMouseEnter = () => {
    setMenuVisible(true);
  };

  const handleMenuMouseLeave = () => {
    setMenuVisible(false);
  };

  const handleMenuItemClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="header-camp flex bg-themeColor">
        <div className="wrapWidth wrap flex items-center">
          <div className="left flex items-center">
            <div className="logo-img flex items-center justify-center">
              <Link to="/">
                <img src="../images/logo.png" className="logo" />
              </Link>
            </div>
          </div>
          <div className="center flex items-center">
            <div className="menu-list flex items-center">
              <div
                className="menu-item"
                onClick={() => handleMenuItemClick("home")}
              >
                Home
              </div>
              <div className="menu-item">Staking</div>
              <div className="menu-item">Dao (Coming Soon)</div>
              <div className="flex relative">
                <div
                  className="menu-item"
                  onMouseEnter={() => setMenuVisible(true)}
                  onMouseLeave={() => setMenuVisible(false)}
                >
                  Knowledge
                </div>
                {isMenuVisible && (
                  <div
                    className="sub-menu flex flex-col"
                    onMouseEnter={handleMenuMouseEnter}
                    onMouseLeave={handleMenuMouseLeave}
                  >
                    <div
                      className="sub-menu-item"
                      onClick={() => handleMenuItemClick("about")}
                    >
                      About
                    </div>
                    <div
                      className="sub-menu-item"
                      onClick={() => handleMenuItemClick("roadmap")}
                    >
                      Roadmap
                    </div>
                    <div
                      className="sub-menu-item"
                      onClick={() => handleMenuItemClick("team")}
                    >
                      Team
                    </div>

                    <div
                      className="sub-menu-item"
                      onClick={() => handleMenuItemClick("works")}
                    >
                      How it works
                    </div>
                    <div
                      className="sub-menu-item"
                      onClick={() => handleMenuItemClick("faq")}
                    >
                      FAQ
                    </div>
                    <a
                      href="https://www.plutus.exchange/whitepaper"
                      target="_blank"
                      className="sub-menu-item"
                    >
                      Whitepaper
                    </a>
                    <div className="sub-menu-item">GitBook</div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="right flex items-center justify-end">
            <div className="action flex items-center justify-center">
              <a
                href="https://v2-app.pulsex.com/swap?inputCurrency=0x2260fac5e5542a773aa44fbcfedf7c193bc2c599&outputCurrency=0x33e4d3163e66b46babc0faf8b30c6c36dd4ab9e9"
                className="btn-connect button"
                target="_blank"
              >
                Buy Plutus
              </a>
            </div>
            <div className="social-icons flex items-center">
              <a
                href="https://discord.gg/HhzB37FH85"
                className="icon flex items-center justify-center"
              >
                <DiscordIcon />
              </a>
              <a
                href="https://t.me/plutus_pulsechain"
                className="icon flex items-center justify-center"
              >
                <LinkedInIcon2 />
              </a>
              <a
                href="https://twitter.com/plutus_trade"
                className="icon flex items-center justify-center"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="header-camp-mob flex bg-themeColor">
        <div className="wrapWidth wrap flex items-center">
          <div className="left flex">
            <div
              className="menu-icon flex items-center justify-center cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(setOpenSidebar(true));
              }}
            >
              <MenuIcon />
            </div>
          </div>
          <div className="center flex">
            <div className="logo-img flex items-center justify-center">
              {/* <Link to="/">
                <img src="../images/logo.png" className="logo" />
              </Link> */}
            </div>
          </div>
          <div className="right flex justify-end">
            <div className="action flex items-center justify-center">
              <a
                href="https://v2-app.pulsex.com/swap?inputCurrency=0x2260fac5e5542a773aa44fbcfedf7c193bc2c599&outputCurrency=0x33e4d3163e66b46babc0faf8b30c6c36dd4ab9e9"
                className="btn-connect button"
              >
                Buy Plutus
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
