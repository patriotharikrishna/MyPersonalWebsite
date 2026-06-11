import React from "react";

export default function Main() {
  return (
    <div className="mainContent">
      <img src="/myImage.jpeg" alt="My Image" className="dpImage" />
      <div className="profileText">
        <h1 className="MyName">Harikrishna H</h1>
        <p className="bio">
          I'm a developer from India who enjoys building practical,
          user-focused web tools. Currently exploring full-stack development
          and turning side project ideas into real products.
        </p>
      </div>
    </div>
  );
}
