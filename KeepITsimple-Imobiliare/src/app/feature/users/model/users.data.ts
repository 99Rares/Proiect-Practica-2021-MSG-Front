export interface ShortUser {
  username: string;
  password: string;
}

//nou model de date -> user cu toate campurile care sa coincida cu backend ul
export interface LongUser{
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
