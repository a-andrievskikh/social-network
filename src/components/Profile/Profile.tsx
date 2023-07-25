import React from 'react'
import { MyPosts } from './MyPosts/MyPosts'
import { ProfileInfo } from './ProfileItem/ProfileInfo'

export type PostType = {
  id: number
  message: string
  likesCount: number
}

export const Profile = () => {

  const posts: PostType[] = [
    {id: 1, message: 'Hi, how are you?', likesCount: 15},
    {id: 2, message: 'It\'s my first project.', likesCount: 20},
  ]

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts} />
    </div>
  )

}