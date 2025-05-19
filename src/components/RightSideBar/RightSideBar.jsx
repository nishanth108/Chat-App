import React from "react";
import assets from "../../assets/assets";
import "./RightSideBar.css";

const RightSideBar = () => {
  return (
    <div className="rs">
      <div className="rs-profile">
        <img src={assets.profile_img} alt="" />
        <h3>
          Nishanth <img src={assets.green_dot} alt="" className="dot" />{" "}
        </h3>
        <p>Hey, There iam Richard Sanford Using Chat App</p>
      </div>
      <hr />
      <div className="rs-media">
        <p>Media</p>
        <div>
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
          <img src={assets.pic3} alt="" />
          <img src={assets.pic3} alt="" />
          <img src={assets.pic3} alt="" />
          <img src={assets.pic3} alt="" />
        </div>
      </div>
      <button>Logout</button>
    </div>
  );
};

export default RightSideBar;
