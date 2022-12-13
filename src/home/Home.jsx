import React from "react";
import "./home.css";
import { motion } from "framer-motion";
import imag from "../img/casual-life-3d-excited-young-woman-receiving-like-notifications-on-her-laptop.png";
const Home = () => {
  return (
    <div className="bg-img">
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            University of Graphics
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse nav navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active d-flex -2" aria-current="page">
                Home
              </a>
              <a class="nav-link">Services</a>
              <a class="nav-link">Projects</a>
              <a class="nav-link ">About Us</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="container main-page">
        <div className="growBusiness">
          <motion.span
            initial={{ x: -550 }}
            animate={{
              x: 0,
            }}
            transition={{
              delay: 3,
            }}
            className="txt-one"
          >
            Growing Your{" "}
          </motion.span>
          <div>
            {" "}
            <span className="txt-two">Business</span>
            <span className="q-mark">?</span>
          </div>
        </div>
        <div className="image">
          <div className="img">
            <img src={imag} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
