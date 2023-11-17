import s from './ProfileInfo.module.css'
import { Preloader } from 'components/common/preloader/Preloader'
import { useSelector } from 'react-redux'
import { AppRootStateType } from 'store/store'
import { ProfileType } from 'store/profile-reducer'

export const ProfileInfo = () => {
  const profile = useSelector<AppRootStateType, ProfileType>(state => state.profilePage.profile)
  const largePhoto = useSelector<AppRootStateType, string>(state => state.profilePage.profile.photos.large)
  const aboutMe = useSelector<AppRootStateType, string>(state => state.profilePage.profile.aboutMe)

  if (!Object.keys(profile).length) return <Preloader />

  return (
    <div>
      <div className={`${s.descriptionBlock} ${s.banner}`}>
        <img src="https://www.edarabia.com/wp-content/uploads/2019/12/robotics-perception-292756.jpg"
             alt="" />
      </div>
      <div className={s.descriptionBlock}>
        <img className={s.logo}
             src={largePhoto}
             alt="" />
        <p>About me: {aboutMe}</p>
      </div>
    </div>
  )
}

// default ava "https://i.pinimg.com/originals/7e/73/1f/7e731f9fcfc7bd222e14c2e6850c69db.jpg"