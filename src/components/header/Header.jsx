import React from "react";
import "./_Header.scss";

import { FaBars, FaUserCircle } from "react-icons/fa";
import { AiOutlineSearch, AiFillYoutube } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";

const Header = () => {
  return (
    <div className='header'>
      <FaBars className='header__menu' size={26} />

      {/* <img
        className='header__logo'
        src='https://freepngimg.com/thumb/youtube/77873-television-show-media-marketing-social-youtube-digital.png'
        alt='Youtube Logo'
      /> */}
      <AiFillYoutube size={26} className='header__logo' />

      <form>
        <input type='text' placeholder='Search...' />

        <button type='submit'>
          <AiOutlineSearch size={20} />
        </button>
      </form>

      <div className='header__icons'>
        <MdNotifications size={26} />
        <MdApps size={26} />
        <FaUserCircle size={26} />
      </div>
    </div>
  );
};

export default Header;
