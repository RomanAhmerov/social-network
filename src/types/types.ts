// Post Type
export type PostType = {
    id: number
    message: string
    likesCount: number
}

// Contacts Type
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

// Photo Type
export type PhotosType = {
    small: string | null
    large: string | null
}

// Profile Type
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe: string
    contacts: ContactsType
    photos: PhotosType
}

// User Type
export type UserType = {
    id: number
    name: string
    status: string
    followed: boolean
    photos: PhotosType
}