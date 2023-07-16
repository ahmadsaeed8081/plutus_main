import React, { useState, useEffect, useRef, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Wrapper from "../../routes/Wrapper";
import { ArrowDownIcon2, ArrowUpIcon } from "../../assets/Icons";

const Home = () => {
  const faqList = [
    {
      question: "How does Plutus generate revenue?",
      answer:
        "Plutus generates revenue primarily through transaction fees from staking on the platform.  The transaction fee is 0.3% per transaction.",
    },
    {
      question: "How do rewards work?",
      answer:
        "Plutus’s revenue is mainly driven by two sources: a nominal transaction fee of 0.3% and a 10% allocation from all newly minted KORE tokens. The revenue generated is distributed in the following ways: <br/>  	Staking Rewards (60%):  60% of the total revenue (0.3%) is used to purchase KORE tokens from the open market. These are then distributed as rewards to users who actively hold KORE whether initially minted or acquired by some other means. <br/> 	WBTC Purchase and Distribution (20%):  20% of the revenue is used to buy WBTC from the open market, which is then proportionally distributed among KORE holders based on their holdings. <br/> 	Development Fund (20%): The remaining 20% of the revenue is allocated to a development fund for ongoing improvements, updates, and future developments.",
    },
    {
      question: "Can users unstake their PRC-20 tokens?",
      answer:
        "Yes, users can unstake their PRC-20 tokens. However, early unstaking could result in a 10% emergency unstaking fee.",
    },
    {
      question:
        "What happens to the value of PRC-20 tokens as they are staked on Plutus?",
      answer:
        "Staking PRC-20 tokens on Plutus contributes to their liquidity, and as the platform grows and facilitates more trades, this enhanced liquidity could potentially increase the value of these tokens.",
    },
    {
      question:
        "If a PRC-20 token has no liquidity, how can it be used to generate value?",
      answer:
        "Plutus can create demand for these tokens by incentivizing holders to create or add liquidity for PRC20’s which encourages trading where it wasn’t possible before.",
    },
    {
      question: "What is the governance model of Plutus?",
      answer:
        "KORE holders are given the right to vote and submit proposals for changes or improvements to the Plutus platform. The top 100 KORE holders will make up the initial governance committee.",
    },
    {
      question: "What measures does Plutus take to ensure security?",
      answer:
        "Plutus is designed with a strong focus on security. The smart contracts used by the platform will undergo audits to ensure they are secure and function as intended",
    },
    {
      question: "What measures does Plutus take to ensure security?",
      answer:
        "Plutus is designed with a strong focus on security. The smart contracts used by the platform will undergo audits to ensure they are secure and function as intended.",
    },
    {
      question: "Are the contracts immutable?",
      answer:
        "Yes, the smart contracts are immutable and cannot be changed or altered in anyway.",
    },
  ];
  const FaqItem = ({ item, index }) => {
    const [show, setShow] = useState(false);
    return (
      <div key={index} className="faq-item flex flex-col">
        <div
          className={`item-hdr flex items-center ${show ? "show" : ""}`}
          onClick={(e) => setShow(!show)}
        >
          <h1 className={`question ${show ? "show" : ""}`}>{item.question}</h1>
          {show ? (
            <div className="icon-up flex items-center justify-center">
              <ArrowUpIcon />
            </div>
          ) : (
            <div className="icon-down flex items-center justify-center">
              <ArrowDownIcon2 />
            </div>
          )}
        </div>
        <div className={`item-btm ${show ? "show" : ""}`}>
          <p
            className="answer"
            dangerouslySetInnerHTML={{ __html: item.answer }}
          ></p>
        </div>
      </div>
    );
  };
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  return (
    <>
      <Wrapper>
        <div className="lading-page bg-themeColor h-screen flex flex-col">
          <div className="hero-sec flex items-center justify-center" id="home">
            <div className="wrap wrapWidth flex text-white">
              <div className="hero-left flex flex-col justify-center container-style">
                <div className="home-slug flex flex-col">
                  <Particles
                    id="tsparticles"
                    init={particlesInit}
                    options={{
                      fullScreen: {
                        enable: false,
                        zIndex: 0,
                      },
                      particles: {
                        number: {
                          value: 25,
                          density: {
                            enable: false,
                            value_area: 400,
                          },
                        },
                        color: {
                          value: "#fff",
                        },
                        shape: {
                          type: "circle",
                          options: {
                            sides: 5,
                          },
                        },
                        opacity: {
                          value: 0.8,
                          random: false,
                          anim: {
                            enable: false,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false,
                          },
                        },
                        size: {
                          value: 4,
                          random: false,
                          anim: {
                            enable: false,
                            speed: 30,
                            size_min: 0.1,
                            sync: false,
                          },
                        },
                        rotate: {
                          value: 0,
                          random: true,
                          direction: "clockwise",
                          animation: {
                            enable: true,
                            speed: 15,
                            sync: false,
                          },
                        },
                        line_linked: {
                          enable: true,
                          distance: 200,
                          color: "#fff",
                          opacity: 0.4,
                          width: 2,
                        },
                        move: {
                          enable: true,
                          speed: 2,
                          direction: "none",
                          random: false,
                          straight: false,
                          out_mode: "out",
                          attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200,
                          },
                        },
                      },
                      interactivity: {
                        events: {
                          onhover: {
                            enable: true,
                            mode: "repulse",
                          },
                          onclick: {
                            enable: true,
                            mode: "repulse",
                          },
                          resize: true,
                        },
                        modes: {
                          grab: {
                            distance: 400,
                            line_linked: {
                              opacity: 1,
                            },
                          },
                          bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            speed: 3,
                          },
                          repulse: {
                            distance: 100,
                          },
                          push: {
                            particles_nb: 4,
                          },
                          remove: {
                            particles_nb: 2,
                          },
                        },
                      },
                      retina_detect: false,
                    }}
                  />
                  <h1 className="slug1">Welcome to</h1>
                  <h1 className="slug2">Plutus</h1>
                </div>
                <p className="hero-desc">
                  Our goal is quite simple. We want to bring PulseChains version
                  of WBTC to parity. We do this by incentivizing the use of
                  staking pools for PLUTUS, WBTC and other PRC20’s while also
                  creating a cyclical passive earning opportunity.
                </p>
              </div>
              <div className="hero-right flex flex-col">
                <img src="/images/hero-logo.png" className="img" />
              </div>
            </div>
          </div>
          <section className="about-section flex" id="about">
            <div className="wrap wrapWidth flex flex-col">
              <div className="section-hdr flex items-center justify-center">
                <h1 className="section-title">About</h1>
              </div>
              <div className="sec-body flex">
                <div className="left-side flex">
                  <div className="logo-box flex items-center justify-center">
                    <img src="/images/logo-color.svg" className="img" />
                  </div>
                </div>
                <div className="right-side flex flex-col">
                  <h1 className="side-tag">Plutus</h1>
                  <p className="desc">
                    Plutus introduces a platform that harnesses the immense
                    potential of the PulseChain blockchain and its PRC-20 tokens
                    to revolutionize liquidity, promote token retention, and
                    foster active trading. At the heart of this ecosystem lie
                    the Plutus native tokens (PLUTUS), a rewards token called
                    KORE, PulseChain's own version of Wrapped Bitcoin (WBTC),
                    and strategically positioned staking pools creating a
                    cyclical system that rewards passive earnings, user
                    interaction and contribution.
                    <br />
                    <br />
                    In addition to the Plutus and PRC-20 token pairs, the Plutus
                    ecosystem will carefully select other high-potential pools.
                    These external pools are chosen based on several criteria,
                    such as the token's utility, market potential, and the
                    community's size and activity. This diversified approach
                    ensures a wide array of profitable opportunities for users
                    and enhances the overall value of the ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="road-map-section flex" id="roadmap">
            <div className="wrap wrapWidth flex flex-col">
              <div className="section-hdr flex items-center justify-center">
                <h1 className="section-title">Road Map</h1>
              </div>
              <div className="sec-body flex items-center justify-center">
                <img src="/images/roadmap.svg" className="roadmap-img" />
              </div>
            </div>
          </section>
          <section className="team-section flex" id="team">
            <div className="wrap wrapWidth flex flex-col">
              <div className="section-hdr flex items-center justify-center">
                <h1 className="section-title">Team</h1>
              </div>
              <div className="grid-wrap">
                <div className="grid-box flex flex-col">
                  <div className="box-top flex items-center justify-center">
                    <img src="/images/nft-fill.svg" className="icon" />
                  </div>
                  <div className="meta flex flex-col">
                    <h1 className="title">Havok</h1>
                    <p className="designation">Founder</p>
                  </div>
                </div>
                <div className="grid-box flex flex-col">
                  <div className="box-top flex items-center justify-center">
                    <img src="/images/nft-fill.svg" className="icon" />
                  </div>
                  <div className="meta flex flex-col">
                    <h1 className="title">Quarry</h1>
                    <p className="designation">Founder</p>
                  </div>
                </div>
                <div className="grid-box flex flex-col">
                  <div className="box-top flex items-center justify-center">
                    <img src="/images/nft-fill.svg" className="icon" />
                  </div>
                  <div className="meta flex flex-col">
                    <h1 className="title">Anon Devs</h1>
                    <p className="designation">Development Team</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="steps-section flex" id="works">
            <div className="wrap wrapWidth flex flex-col">
              <div className="section-hdr flex items-center justify-center">
                <h1 className="section-title">How it works</h1>
              </div>
              <div className="grid-wrap">
                <div className="step-item flex items-center flex-col">
                  <div className="numb-box flex items-center justify-center">
                    <h1 className="tag">1</h1>
                  </div>
                  <p className="desc">
                    Procure Plutus Tokens buy purchasing PLUTUS from the PulseX
                    v2 pool
                  </p>
                </div>
                <div className="step-item flex items-center flex-col">
                  <div className="numb-box flex items-center justify-center">
                    <h1 className="tag">2</h1>
                  </div>
                  <p className="desc">
                    Add liquidity on PulseX for any PRC20 pair that you would
                    like to Stake on Plutus
                  </p>
                </div>
                <div className="step-item flex items-center flex-col">
                  <div className="numb-box flex items-center justify-center">
                    <h1 className="tag">3</h1>
                  </div>
                  <p className="desc">
                    Add liquidity on PulseX for any PRC20 pair that you would
                    like to Stake on Plutus
                  </p>
                </div>
                <div className="step-item flex items-center flex-col">
                  <div className="numb-box flex items-center justify-center">
                    <h1 className="tag">4</h1>
                  </div>
                  <p className="desc">
                    Add liquidity on PulseX for any PRC20 pair that you would
                    like to Stake on Plutus
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="faq-section flex" id="faq">
            <div className="wrap wrapWidth flex flex-col">
              <div className="section-hdr flex items-center justify-center">
                <h1 className="section-title">FAQ</h1>
              </div>
              <div className="faq-body flex flex-col w-full">
                {faqList.map((item, index) => (
                  <FaqItem item={item} index={index} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </Wrapper>
    </>
  );
};

export default Home;
