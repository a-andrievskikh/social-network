import { AppRootStateT } from 'store/store'
import { PostType } from 'store/profile-reducer'

export const postsSelectors = (s: AppRootStateT) => s.profilePage.posts as PostType[]