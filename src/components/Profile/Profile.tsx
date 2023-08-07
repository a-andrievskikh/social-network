import React from 'react'
import { MyPosts } from './MyPosts/MyPosts'
import { ProfileInfo } from './ProfileItem/ProfileInfo'

export const Profile = () => (
  <div>
    <ProfileInfo />
    <MyPosts />
  </div>
)