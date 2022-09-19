import React from 'react'
import "./topbar.css";
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">Hello Rammy</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <SettingsIcon/>
                </div>
                <div className="topbarIconContainer">
                    <PersonIcon/>
                </div>
                <img src="https://images.pexels.com/photos/13623424/pexels-photo-13623424.jpeg?cs=srgb&dl=pexels-regina-trissteria-13623424.jpg&fm=jpg" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}
