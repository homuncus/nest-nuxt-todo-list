declare module 'project-types' {
  export interface Todo {
    id: number,
    name: string,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
  }

  export interface User {
    id: number,
    username: string,
    createdAt: string,
    updatedAt: string,
  }
}