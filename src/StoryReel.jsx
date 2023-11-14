import React from 'react'
import './storyreel.css'
import Story from './Story'

import pic1 from './assets/sanjeevan-satheeskumar-MG8c-4n1QVE-unsplash.jpg'
import pic2 from './assets/erik-lucatero-d2MSDujJl2g-unsplash.jpg'
import pic3 from './assets/houcine-ncib-B4TjXnI0Y2c-unsplash.jpg'
import pic4 from './assets/imansyah-muhamad-putera-n4KewLKFOZw-unsplash.jpg'
import pic5 from './assets/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg'
import pic6 from './assets/kal-visuals-aK4iPNYipnU-unsplash.jpg'
import pic7 from './assets/saad-chaudhry-cYpqYxGeqts-unsplash.jpg'
import pic8 from './assets/omid-armin-xOjzehJ49Hk-unsplash.jpg'

const StoryReel = () => {
  return (
     <div className="storyreel">
        
      <Story image={pic1} profile={pic2} title='Sam'/>
      <Story image={pic3} profile={pic4} title='Langa'/>
      <Story image={pic5} profile={pic6} title='Benjamin'/>
      <Story image={pic7} profile={pic8} title='Isaac'/>
 
     </div>
  )
}

export default StoryReel