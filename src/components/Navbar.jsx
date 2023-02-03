import React from "react";
import A from "../images/logoImage/A.png";
import T from "../images/logoImage/T.png";
import G from "../images/logoImage/G.png";
import W from "../images/logoImage/W.png";
import O from "../images/logoImage/O.png";
import R from "../images/logoImage/R.png";
import L from "../images/logoImage/L.png";
import D from "../images/logoImage/D.png";
import { Link } from "react-router-dom";
import SignupModal from "./SignupModal";

const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <div className="logoImg">
            <img src={A} alt="" />
            <img src={G} alt="" />
            <img src={T} alt="" />
            <img src={W} alt="" />
            <img src={O} alt="" />
            <img src={R} alt="" />
            <img src={L} alt="" />
            <img src={D} alt="" />
          </div>  </a>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search for your favorite groups in ATG"
            aria-label="Search"
          />

          <div className="creatAcBox">
            Create account.{" "}
              </div>
<div className="signupModalLink">
<a  href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">It's free!</a>
<SignupModal/>

     </div>
      
      </div>
    </nav>
  );
};

export default Navbar;
