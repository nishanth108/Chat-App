import React from "react";
import "./LeftSideBar.css";
import assets from "../../assets/assets";
const LeftSideBar = () => {
  return (
    <div className="ls">
      <div className="ls-top">
        <div className="ls-nav">
          <img src={assets.logo} alt="" className="logo" />
          <div className="menu">
            <img src={assets.menu_icon} alt="" />
          </div>
        </div>
        <div className="is-search">
          <img src={assets.search_icon} alt="" />
          <input type="text" placeholder="Seach here" />
        </div>
      </div>
      <div className="is-list">
        <div className="friends">
          <img src={assets.profile_img} alt="" />
          <div>
            <p>Nishanth</p>
            <span>Hello, how are you</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
