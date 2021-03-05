import React from "react";
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://w7.pngwing.com/pngs/202/62/png-transparent-social-media-marketing-united-states-digital-marketing-business-avatar-clip-blue-computer-network-text.png" />
      {props.message}
      <div>
        <span>Like {props.count}</span>
      </div>
    </div>
  )
}




export default Post;