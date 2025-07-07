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

  type Params<T> = Promise<T>
  type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>


  interface IUser {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    role: eRole;
    orders: IOrder[];
  }