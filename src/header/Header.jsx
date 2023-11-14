import React from 'react'
import './header.css'

 
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import logo from '../assets/facebook.png'
import { Avatar } from '@mui/material';
import ProfilePicture from '../assets/IMG_9831.jpg'



const Header = () => {
   const pic = ProfilePicture
 
  return (
     <div className="header">
        <div className="header__left">
             <img src={logo} alt="logo" />
            <div className="header__left-input">
                <SearchIcon  fontSize='small'/>
               <input type="text" placeholder='Search Facebook'/>
            </div>
        </div>

        <div className="header__middle">
         <div className="header__middle-option header__middle-active">
            <HomeIcon fontSize='large'/>
            </div>
         <div className="header__middle-option">
            <FlagIcon  fontSize='large'/>
            </div>
         <div className="header__middle-option">
            <SubscriptionsIcon  fontSize='large'/>
            </div>
         <div className="header__middle-option">
            <StorefrontIcon  fontSize='large'/>
            </div>
         <div className="header__middle-option">
            <SupervisedUserCircleIcon  fontSize='large'/>
            </div>
      
        </div>

        <div className="header__right">
         <div className="header__right-info">
         {pic && <Avatar src={pic}/>}
            <h4>@Lundon</h4>
         </div>
         <IconButton>
            <AddIcon />
         </IconButton>
         <IconButton>
            <ForumIcon />
         </IconButton>
         <IconButton>
            <NotificationsNoneIcon />
         </IconButton>
         <IconButton>
            <ExpandMoreIcon />
         </IconButton>
        </div>
   </div>
   
  )
}

export default Header;