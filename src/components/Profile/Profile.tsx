import React, { FC } from 'react'
import { MyPosts } from './MyPosts/MyPosts'
import { ProfileInfo } from './ProfileItem/ProfileInfo'
import { PostType } from '../../App'

type ProfilePropsType = {
  posts: PostType[]
}

export const Profile: FC<ProfilePropsType> = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.posts} />
    </div>
  )

}