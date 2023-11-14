import React from 'react'
import './post.css'
import { Avatar } from '@mui/material'
import { AccountCircle, ChatBubbleOutline, ExpandMore,  NearMe, ThumbUp } from '@mui/icons-material'

const Post = ({profilePic, image, username, timeStamp, message}) => {
  return (
     <div className="post">
        <div className="post__top">
            <Avatar src={profilePic} className='post__avatar'/>
            <div className="post__topInfo">
                <h3>{username}</h3>
                <p>Time</p>
            </div>
        </div>
        <div className="post__bottom">
            <p>{message}</p>
        </div>
        <div className="post__image">
            <img src={image} alt="" />
        </div>

        <div className="post__options">
            <div className="post__option">
                <ThumbUp />
                <p>Like</p>
            </div>
            <div className="post__option">
                <ChatBubbleOutline />
                <p>Comment</p>
            </div>
            <div className="post__option">
                <NearMe />
                <p>Share</p>
            </div>
            <div className="post__option">
                <AccountCircle />
                 <ExpandMore />
            </div>
        </div>
     </div>
  )
}

export default Post