import s from './Message.module.css'

export const Message = ({ id, message, idx }: MessagePropsType) => {
  return (
    <div className={`${s.message} ${s.avatar} ${idx % 2 === 1 ? s.messageRight : ''}`}>
      {
        idx % 2 === 1 ?
          <>
            <div>{message}</div>
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
            <div>{message}</div>
          </>
      }
    </div>
  )
}

// Types
type MessagePropsType = {
  id: string
  message: string
  idx: number
}
