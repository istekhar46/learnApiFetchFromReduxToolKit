import React from "react";
import styled from "styled-components";
import "./contact_us.css";


const PopupContainer = ({ formData, handleClosePopup }) => {
  const { name, email, address, dob, bio, profileImage, bannerImage } = formData;
  return (
    <>
      <section className="Popup">
        <div className="popup-wrapper">
          <div className="profile-banner-img-container">
            <figure>
              <img src={profileImage} alt="Profile" />
            </figure>
          </div>
          <div className="details-container">
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Address: {address}</p>
            <p>Date of Birth: {dob}</p>
            <p>Bio: {bio}</p>
          </div>
          <div className="button-container">
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopupContainer;
