import React from 'react'
import './feed.css'
import StoryReel from '../StoryReel'
import MessageSender from '../MessageSender'
import Post from '../Post'

const Feed = () => {
   
   
  return (
     <div className="feed">
         <StoryReel />
        <MessageSender />
        <Post 
        profilePic='https://plus.unsplash.com/premium_photo-1664453547090-0e8a92a6ed4c?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        message='wow mum it nice'
        timeStamp='still working bruh_'
        username='shangal'
        image='https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D'
        />
        <Post 
        profilePic='https://plus.unsplash.com/premium_photo-1664453547090-0e8a92a6ed4c?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        message='wow mum it nice'
        timeStamp='still working bruh_'
        username='shangal'
        image='https://plus.unsplash.com/premium_photo-1664203067979-47448934fd97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D'
        />
        <Post 
        profilePic='https://plus.unsplash.com/premium_photo-1664453547090-0e8a92a6ed4c?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        message='wow mum it nice'
        timeStamp='still working bruh_'
        username='shangal'
        image='https://plus.unsplash.com/premium_photo-1680020185326-45491267f8da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhY2V8ZW58MHx8MHx8fDA%3D'
        />
       
        
     </div>
  )
}

export default Feed