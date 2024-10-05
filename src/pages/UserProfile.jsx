import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../images/avatar1.jpg';
import { RiImageEditLine } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";



const UserProfile = () => {
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');

  return (
    <section className="profile">
      <div className="container profile-container">
        <Link to={`/myposts/jdfn`} className="btn">
          My Posts
        </Link>
        <div className="profile-details">
          <div className="avatar-wrapper">
            <div className="profile-avatar">
              <img src={Avatar} alt="" />
            </div>
            {/* form to update avatar */}
            <div className="avatar-form">
              <form className="avatar-form">
                <input
                  type="file"
                  name="avatar"
                  id="avatar"
                  onChange={(e) => setAvatar(e.target.files[0])}
                  accept="png, jpg, jpeg"
                />
                <label htmlFor="avatar">
                  <RiImageEditLine />
                </label>
              </form>
              <button className="profile-avatar-btn">
                <FaCheck />
              </button>
            </div>

            <h1 className='details-h1'>Mary M</h1>        

          </div>
        </div>
      </div>
    </section>
  );
}

export default UserProfile
