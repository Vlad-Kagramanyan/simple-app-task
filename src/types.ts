export interface IPost {
    id: string;
    title: string;
    description: string;
    imageLink: string;
    ref: string
}

export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    company: string;
    email: string;
    password: string;
}

export interface ICreatePost {
    user: IUser | null
}

export interface  IPostsParams {
    list: IPost[], 
    user: IUser | null
}

export interface  IPostParams {
    id: string;
    title: string;
    description: string;
    imageLink: string; 
    deletePostById: null | ((id:string) => void)
}

export interface InputProps {
    placeholder?: string | undefined,
    className?: string | undefined,
    type?: string | undefined,
    label?: string;
    value: string;
    onChange: (text: string) => void;
}