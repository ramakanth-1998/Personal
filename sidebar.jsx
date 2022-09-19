import React from 'react'
import "./sidebar.css"
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import EmailIcon from '@mui/icons-material/Email';
import PaidIcon from '@mui/icons-material/Paid';

export default function sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sideabarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <div className="sidebarListItem">
                        <AccountBalanceIcon className='sidebarIcon'/>
                        Balance
                    </div>
                    <div className="sidebarListItem">
                        <EmailIcon className='sidebarIcon'/>
                        Emails
                    </div>
                    <div className="sidebarListItem">
                        <PaidIcon className='sidebarIcon'/>
                        Transactions
                    </div>
                </ul>

            </div>
        </div>
    </div>
  )
}
