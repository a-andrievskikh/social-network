import React, { FC } from 'react'
import s from './Post.module.css'

type PostPropsType = {
  id: number
  message: string
  likesCount: number
}

export const Post: FC<PostPropsType> = (props) => {
  const handleRemovePostClick = () => alert('Post removed')
  return (
    (
      <div className={s.item}>
        <img
          src="https://sun1-87.userapi.com/s/v1/ig2/62slIoVgPwltdzSkHnL24fxSf31Z0PUmBlhtMBLgcRveNxtsdwME5hF-Ih-FEHyQGj3hzdDI-rPXjy0X15seFhvz.jpg?size=400x400&quality=96&crop=2,2,598,598&ava=1"
          alt=""
        />
        {props.message}
        <div>
          <span>{props.likesCount} {props.likesCount > 1 || props.likesCount === 0 ? 'Likes' : 'Like'}</span>
        </div>
        <div>
          <button onClick={handleRemovePostClick}>Remove post</button>
        </div>
      </div>
    )
  )
}