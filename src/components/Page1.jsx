import React from 'react';
import video from '../assets/videos/video.mp4'

function Page1() {
  return (
    <div id="page1">
      <nav>
        <img src="https://uploads-ssl.webflow.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg" alt="Sundown Studio Logo" />
        <div id="nav-part2">
          <h4><a href="#">Work</a></h4>
          <h4><a href="#">Studio</a></h4>
          <h4><a href="#">Contact</a></h4>
        </div>
        <h3>Menu</h3>
      </nav>
      <div id="center">
        <div id="left">
          <h3>Sundown is a multi-disciplinary studio focused on creating unique, end-to-end experiences and environments.</h3>
        </div>
        <div id="right">
          <h1>SPACES <br />THAT <br />INSPIRE</h1>
        </div>
      </div>
      <div id="hero-shape">
        <div id="hero-1"></div>
        <div id="hero-2"></div>
        <div id="hero-3"></div>
      </div>
      <video autoPlay loop muted src={video}></video>
    </div>
  );
}

export default Page1;
