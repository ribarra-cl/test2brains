/*
  Author: Richard Ibarra <richard.ibarra@gmail.com>
  Project: 2brains
  Date: 29 Dec 2019
 */

export default interface IUser
{
  name: {
    title: string;
    first: string;
    last: string;
  }
  login: {
    uuid: string;
    username: string;
  }
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  }
  email: string;
}

export const humanizeName = (user: IUser) => {
  return `${user.name.title} ${user.name.first} ${user.name.last}`
}
