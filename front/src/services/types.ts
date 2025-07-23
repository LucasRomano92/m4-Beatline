// export interface LoginServiceResponse {
//     message: string;
//     data?: LoginResponse;
//     errors?: unknown;
// }

export interface LoginResponse {
    login: boolean;
    user: IUser;
    token: string;
}

// export interface IUser {
//     id: number;
//     username: string;
//     email: string;
//     // Add any additional properties required by your application, for example:
//     firstName?: string;
//     lastName?: string;
//     roles?: string[];
// }

export interface Product {
    // Define the properties of Product as needed, for example:
    id: number;
    name: string;
    price: number;
}

export interface Category {
    
    id: number;
    name: string;
    products: Product[];
}
export interface IProduct  {
    "id": number,
    "name": string,
    "description": string,
    "price": number,
    "stock": number,
    "image": string,
    "categoryId": number
  }
  enum eRole {
    USER = "user",
    ADMIN = "admin"
  }

  export type Params<T> = Promise<T>;
  export type SearchParams<T> = Promise<T>;

 export interface IOrder {
  id: number;
  status: string;
  date: string;
  products: IProduct[];
}

  export interface IUser {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    role: eRole;
    orders: IOrder[];
  }
 export interface RegisterUserDto {
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
  }
  export interface CreateOrderDto {
    userId: number;
    products: number[];
  }
 export interface LoginUserDto {
    email: string;
    password: string;
  }
  export interface ICategory {
  
    id: number;
    name: string;
    products: IProduct[];
    
}