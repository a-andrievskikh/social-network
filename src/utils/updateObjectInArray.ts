import { UserData } from 'components/Users/api/users-api'

export const updateObjectInArray = (items: UserData[], itemID: number, objPropName: keyof UserData, newObjProps: Partial<UserData>) => {
  return items.map(u => u[objPropName] === itemID ? { ...u, ...newObjProps } : u)
}