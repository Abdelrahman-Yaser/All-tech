
export interface Categorie{
    id:number,
    name: string,
    slug?: string,
    image: string,
    createdAt ?:number,
    updatedAt?: number
}

export interface Product{
    id: string,
    title?:string,
    slug?: string,
    description?:string,
    quantity?: number,
    price?: number,
    imageCover?: string,
    category:{
        id?:number,
        name?: string,
        slug?: string,
        image?: string,
    },
}

export interface User{
    _id: string,
    name: string,
    email: string,
    role: string,
    createdAt: number,
    updatedAt: number
}