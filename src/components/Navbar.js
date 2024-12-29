import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { Link, useNavigate } from 'react-router-dom';
import ConfirmLogoutDialog from './ConfirmLogoutDialog.js';
function Navbar({ setIsLoggedIn }) {
  const [sidebar, setSidebar] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();
  const showSidebar = () => setSidebar(!sidebar);

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login');
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <ConfirmLogoutDialog
          open={openDialog}
          onClose={handleDialogClose}
          onLogout={handleLogout}
        />
        <div className='navbar'>
          <h2>Movies Rating</h2>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <>
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>

                </>
              );
            })}
            <li className='nav-text'>
              <button onClick={handleOpenDialog} className="logout-btn">
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
