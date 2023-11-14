import React from 'react'
import './sidebar.css'
import SidebarRow from '../SidebarRow'
import Img from '../assets/IMG_9831.jpg'

import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Sidebar = () => {
  return (
     <div className="sidebar">
        <SidebarRow src={Img} title='Lundon'/>
        <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center'/>
        <SidebarRow Icon={EmojiFlagsIcon} title='Pages'/>
        <SidebarRow Icon={PeopleIcon} title='Friends'/>
        <SidebarRow Icon={ChatIcon} title='Messenger'/>
        <SidebarRow Icon={StorefrontIcon} title='Marketplace'/>
        <SidebarRow Icon={VideoLibraryIcon} title='Videos'/>
        <SidebarRow Icon={ExpandMoreIcon} title='Marketplace'/>
       
     </div>
  )
}

export default Sidebar