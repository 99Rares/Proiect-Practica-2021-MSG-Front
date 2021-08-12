export interface ShortUser {
  username: string;
  password: string;
}

//nou model de date -> user cu toate campurile care sa coincida cu backend ul
export interface LongUser{
  id: number,
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  token: string;
  fullName: string;
}

// export interface UserDetailData{
//   firstName: string;
//   lastName: string;
//   email: string;
// }
