export interface User {
  name: string
  email: string;
  
}

// Use the User interface inside AuthState
export interface AuthState {
  token: string | null;
  user: User | null; // Ensure it can be null
}
export interface Category {
    _id: string;
    name: string;
    slug: string;
    image: string;
  }
export interface Product{
    id: string,
    title?:string,
    slug?: string,
    description?:string,
    quantity?: number,
    price?: number,
    imageCover?: string,
    category:Category
}

// export interface User{
//     _id: string,
//     name: string,
//     email: string,
//     role: string,
//     createdAt: number,
//     updatedAt: number
// }

export interface SignInForm {
  email: string;
  password: string;
}