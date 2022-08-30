import React, { useEffect } from 'react'
import '../FeatureCard/FeatureCard.css'



const FeatureCards = ({title}) => {
  return (
    <div>
     <div className='featureCard' >
      {title}
     </div>
    </div>
  )

}

export default FeatureCards