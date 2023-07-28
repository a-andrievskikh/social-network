import React, { FC } from 'react'
import { MyPosts } from './MyPosts/MyPosts'
import { ProfileInfo } from './ProfileItem/ProfileInfo'
import { ActionsType, ProfilePageType } from '../../redux/store'

type ProfilePropsType = {
  profilePage: ProfilePageType
  dispatch: (action: ActionsType) => void
}

export const Profile: FC<ProfilePropsType> = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts}
               newPostText={props.profilePage.newPostText}
               dispatch={props.dispatch}
      />
    </div>
  )
}