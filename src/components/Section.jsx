import React from "react";
import cardImg from '../images/cardImg/cardImg.jpg';
import userProfile from '../images/userProfile.jpg'
import visibilityIcon from '../images/visibilityIcon.png';
import shareBtnImg from '../images/shareBtnImg.png';

const Section = () => {
  return (
  <div  className="section">
    <div className="sectionHead">
    <div className="allPost">All Post(10+)</div>
    <div className="article">Article</div>
    <div className="event">Event</div>
    <div className="education">Education</div>
    <div className="job">Job</div>
  </div>
  <div className="cardContainer">
  <div className="card"  >
  <img src={cardImg} className="card-img-top" alt="card"/>
  <div className="card-body">
<div className="cardCat"> Article </div>
    <p className="cardTitle">What if famous brands had regular fonts? Meet RegulaBrands!</p>
  <p className="cardDesc">I've worked in UX for the better part of a decade. From now on, I plan to rei… </p>
  </div>
  <div className="userProfile">
    <img src={userProfile} alt="" />
    <div className="userName">Vid Mavi</div>
    <div className="watchNumber">
      <img src={visibilityIcon} alt="" />
      <span>1.4k views</span>
    </div>
    <button className="btn shareBtn"> <img src={shareBtnImg} alt="" /> </button>
  </div>
</div>
  </div>
  </div>
  );
};

export default Section;
