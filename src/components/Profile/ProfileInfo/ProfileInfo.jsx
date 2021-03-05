import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (

    <div>
      <div>
        <img src='https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v211-02-socialmedia_1_2.jpg?bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&q=65&usm=15&vib=3&w=600&s=48af32138417e7a2cac7fee0d47a0288' />
      </div>
      <div className={s.descriptionBlock}>
        ava + description
   </div>
    </div>

  )
}




export default ProfileInfo;