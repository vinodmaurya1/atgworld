import React from "react";
import googleLogo from "../images/googleLogo.png";
import fbLogo from "../images/fbLogo.png";
import dollPic from '../images/dollPic.png';

const SignupModal = () => {
  return (
    <div className="signupModal">
      <div
        className="modal fade modal-lg "
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Let's learn, share & inspire each other with our passion for
                computer engineering. Sign up now 🤘🏼
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="modalSection container-fluid">
                <div className="signupTitle">Creat Account</div>
                <div className="signupLink">Already have an account? <a href=""> Sign In</a></div>
                <div className="formGroup">
                  <div className="input-group">
                    <input
                      type="text"
                      aria-label="First name"
                      className="form-control"
                      placeholder="First Name"
                    />
                    <input
                      type="text"
                      aria-label="Last name"
                      className="form-control"
                      placeholder="Second Name"
                    />
                  </div>

                  <input
                    type="email"
                    aria-label="email"
                    className="form-control inputEmail"
                    placeholder="Email"
                  />
                  <input
                    type="password"
                    aria-label="password"
                    className="form-control inputPassword"
                    placeholder="Password"
                  />
                  <input
                    type="password"
                    aria-label="password"
                    className="form-control inputCPassword"
                    placeholder="Password"
                  />
                  <button className="btn btn-primary btnCreatAc">
                    Creat Account
                  </button>
                  <button className="btn  signupBtnFb">
                    <img src={fbLogo} alt="" /> Sign up with Facebook
                  </button>
                  <button className="btn  signupBtnGoogle">
                    <img src={googleLogo} alt="" /> Sign up with Google
                  </button>
                  <div className="modalInfo">By signing up, you agree to our Terms & conditions, Privacy policy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
     

      <div className="modalAside">
<img src={dollPic} alt="" />

      </div>
    </div> </div>


  );
};

export default SignupModal;
