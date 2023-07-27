import React, { FC } from 'react'
import { MyPosts } from './MyPosts/MyPosts'
import { ProfileInfo } from './ProfileItem/ProfileInfo'
import { ProfilePageType } from '../../redux/state'

type ProfilePropsType = {
  profilePage: ProfilePageType
  addPost: () => void
  updateNewPostText: (newText: string) => void
}

export const Profile: FC<ProfilePropsType> = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts}
               addPost={props.addPost}
               newPostText={props.profilePage.newPostText}
               updateNewPostText={props.updateNewPostText}
      />
    </div>
  )
}