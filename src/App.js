import React from "react";

function App() {
  return (
    <div className="container">
      <div className="image-wrapper">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/image1.jpg`}
          alt=""
        />
      </div>
      <div className="image-wrapper">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/image2.jpg`}
          alt=""
        />
      </div>
      <div className="image-wrapper">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/image3.jpg`}
          alt=""
        />
      </div>
      <div className="image-wrapper">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/image4.jpg`}
          alt=""
        />
      </div>
      <div className="image-wrapper">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/image5.jpg`}
          alt=""
        />
      </div>
    </div>
  );
}

export default App;
