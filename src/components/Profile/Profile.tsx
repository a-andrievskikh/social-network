import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import styles from './Profile.module.css'

function Profile() {
  return (
    <div className={styles.content}>
      <div>
        <img src="https://www.edarabia.com/wp-content/uploads/2019/12/robotics-perception-292756.jpg"
             alt="" />
      </div>
      <div>
        <img style={{width: '100px', borderRadius: '50%'}}
             src="https://i.pinimg.com/originals/7e/73/1f/7e731f9fcfc7bd222e14c2e6850c69db.jpg"
             alt="" />
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile