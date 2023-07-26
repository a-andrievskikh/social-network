import React, { FC } from 'react'
import { MyPosts } from './MyPosts/MyPosts'
import { ProfileInfo } from './ProfileItem/ProfileInfo'
import { ProfilePageType } from '../../redux/state'

type ProfilePropsType = {
  state: ProfilePageType
  addPost: (postMessage: string) => void
}

export const Profile: FC<ProfilePropsType> = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} addPost={props.addPost} />
    </div>
  )
}