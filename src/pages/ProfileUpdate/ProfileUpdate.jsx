import React,{useState} from "react";
import "./ProfileUpdate.css";
import assets from "../../assets/assets";
const ProfileUpdate = () => {

  const [image, setImage] = useState(false);
  
  return (
    <div className="profile">
      <div className="profile-container">
        <form action="">
          <h3>Profile details</h3>
          <label htmlFor="avatar">
            <input onChange={(e) => setImage(e.target.files[0]) } type="file" id="avatar" accept=".png, .jpg, .jpeg" hidden />
            <img src={image ? URL.createObjectURL(image):assets.avatar_icon} alt="" />
            Upload Profile Image
          </label>
          <input type="text" placeholder="Your Name" required />
          <textarea name="" id="" placeholder="Write Profile Bio"></textarea>
          <button type="submit">Save</button>
        </form>
        <img src={image ? URL.createObjectURL(image) :assets.logo_icon} className="profile-pic" alt="" />
      </div>
    </div>
  );
};

export default ProfileUpdate;
