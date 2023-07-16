import React from "react";

const ConnectWallet = ({ setOpenConnectWallet }) => {
  const list = [
    {
      img: "./images/metamask-logo.png",
      name: "Meta Mask",
      desc: "Desktop/ DApp in app",
      id: "1",
    },
    {
      img: "./images/bnb.png",
      name: "Trust Walet",
      desc: "DApp in app mobile",
      id: "2",
    },
    {
      img: "./images/bnb-logo.png",
      name: "Wallet Connect",
      desc: "DApp in app mobile",
      id: "3",
    },
  ];
  return (
    <div className="connect-wallet flex bg-themeColor">
      <div className="wallet-wrapper flex flex-col">
        <div className="card-hdr flex items-center justify-center">
          <div className="tag">Select Wallet</div>
        </div>
        <div className="meta flex flex-col">
          {list.map((item, index) => (
            <div
              className="item flex items-center"
              key={index}
              onClick={(e) => setOpenConnectWallet(false)}
            >
              <div className="img flex items-center justify-center">
                <img src={item.img} />
              </div>
              <div className="info flex flex-col">
                <div className="name">{item.name}</div>
                <div className="desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
