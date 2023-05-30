import React from 'react'
import style from './ProfileInfo.module.css'

export const ProfileInfo = () => (
  <div>
    <div>
      <img src="https://www.edarabia.com/wp-content/uploads/2019/12/robotics-perception-292756.jpg"
           alt="" />
    </div>
    <div className={style.descriptionBlock}>
      <img style={{width: '100px', borderRadius: '50%'}}
           src="https://i.pinimg.com/originals/7e/73/1f/7e731f9fcfc7bd222e14c2e6850c69db.jpg"
           alt="" />
      <p>Description</p>
    </div>
  </div>
)