import { AppStateType } from './../redux/reduxStore';
import { ThunkAction } from 'redux-thunk';
import { AppActionsType } from '../redux/app-reducer';
import { AuthActionsType } from '../redux/auth-reducer';
import { FriendsActionsType } from '../redux/friendsReducer';
import { MessagesActionsType } from '../redux/messagesPageReducer';
import { ProfileActionsType } from '../redux/profilePageReducer';
import { UsersActionsType } from './../redux/usersPageReducer';
export type PostType = {
  id: string, likeCount: number, text: string
}

export type AvatarType = {small: string | null, large: string | null}

export type UserType = {
  id: number
  name: string
  status: string | null
  photos: {
    small: string
    large: string
  }
  followed: boolean
}

type ContactsType = {
  [key: string]: any
  facebook: string | null
  website: string | null 
  vk: string | null
  twitter: string | null
  instagram: string | null
  youtube: string | null
  github: string | null
  mainLink: string | null
}

export type ProfileType = {
  aboutMe: string | null | undefined
  contacts: ContactsType
  lookingForAJob: boolean | undefined
  lookingForAJobDescription: string | null | undefined
  fullName: string | undefined
  userId: number | undefined
  photos: AvatarType
  status: string | null | undefined
  isFetching: boolean | undefined
}

export type ActionsType = UsersActionsType 
| ProfileActionsType  | AppActionsType | AuthActionsType 
| FriendsActionsType | MessagesActionsType

export type ThunkActionType<P, E> = ThunkAction<Promise<P>, AppStateType, E, ActionsType>