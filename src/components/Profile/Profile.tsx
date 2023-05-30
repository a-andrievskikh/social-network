import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import { ProfileInfo } from './ProfileItem/ProfileInfo'
import style from './Profile.module.css'

export const Profile = () => (
  <div>
    <ProfileInfo />
    <MyPosts />
  </div>
)