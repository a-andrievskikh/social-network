import React, { FC } from 'react'
import s from './Message.module.css'

type MessagePropsType = {
  id: number
  message: string
  idx: number
}

export const Message: FC<MessagePropsType> = (props) => {
  return (
    <div className={`${s.message} ${s.avatar} ${props.idx % 2 === 1 ? s.messageRight : ''}`}>
      {
        props.idx % 2 === 1 ?
          <>
            <div>{props.message}</div>
            <div>
              <img
                src="https://sun1-87.userapi.com/s/v1/ig2/62slIoVgPwltdzSkHnL24fxSf31Z0PUmBlhtMBLgcRveNxtsdwME5hF-Ih-FEHyQGj3hzdDI-rPXjy0X15seFhvz.jpg?size=400x400&quality=96&crop=2,2,598,598&ava=1"
                alt=""
              />
            </div>
          </>
          :
          <>
            <div>
              <img
                src="https://sun1-87.userapi.com/s/v1/ig2/62slIoVgPwltdzSkHnL24fxSf31Z0PUmBlhtMBLgcRveNxtsdwME5hF-Ih-FEHyQGj3hzdDI-rPXjy0X15seFhvz.jpg?size=400x400&quality=96&crop=2,2,598,598&ava=1"
                alt=""
              />
            </div>
            <div>{props.message}</div>
          </>
      }
    </div>
  )
}
