import { UserType } from 'store/users-reducer'

export const updateObjectInArray = (items: UserType[], itemID: number, objPropName: keyof UserType, newObjProps: Partial<UserType>) => {
  return items.map(u => u[objPropName] === itemID ? { ...u, ...newObjProps } : u)
}