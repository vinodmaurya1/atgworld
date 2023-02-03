import React from "react";
import joinGroupLogo from '../images/joinGroupLogo.png'
import locationBtn from '../images/asideImg/locationBtn.png';
import locationEditBtn from '../images/asideImg/locationEditBtn.png';
import underline from '../images/underline.png'
import locInfoIcon from '../images/locInfoIcon.png';

const Aside = () => {
  return (
    <div className="aside">
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Write a post
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
<div className="btn btn-primary joinGroup"> <img src={joinGroupLogo} alt="joinGroupLogo"  /> &nbsp; &nbsp; Join Group</div>
<div className="location">
  
  <button className="btn locationBtn"><img src={locationBtn} alt="" /> <span>Noida, India</span> </button>
<button className="btn locationEditBtn"><img src={locationEditBtn} alt="" /></button>
<img className="underline" src={underline} alt="" />

<div className="locationInfo">
  <img src={locInfoIcon} alt="" />
  </div>
<div className="locationInfoText">
  Your location will help us serve better and extend a personalised experience.
</div>
</div>

    </div>
  );
};

export default Aside;
