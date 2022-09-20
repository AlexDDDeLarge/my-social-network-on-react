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