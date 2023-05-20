import React from 'react'
import styles from './Profile.module.css'

function Profile() {
  return (
    <div className={styles.content}>
      <div>
        <img src="https://www.edarabia.com/wp-content/uploads/2019/12/robotics-perception-292756.jpg"
             alt="" />
      </div>
      <div>
        <img src="https://p16.tiktokcdn.com/tos-maliva-avt-0068/6423ad2a7b4eb473f04aa5da968ccc0c~c5_100x100.jpeg"
             alt="" />
      </div>
      <div>
        My Posts
        <div className={styles.posts}>New Post</div>
        <div className={styles.item}>Post 1</div>
        <div className={styles.item}>Post 2</div>
      </div>
    </div>
  )
}

export default Profile