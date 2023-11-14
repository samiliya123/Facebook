import React from 'react'
import './sidebarRow.css'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar } from '@mui/material';

const SidebarRow = ({ src, Icon, title }) => {
  return (
    <div className='sidebarRow'>
      {src && <Avatar src={src}/>}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  )
}

export default SidebarRow