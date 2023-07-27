import axios from '@/composables/axios';
import type { Todo } from "project-types";

interface CreateTodoDto {
  name?: string
}
interface UpdateTodoDto extends CreateTodoDto {
  completed?: boolean
}

export function getAll(): Promise<Todo[]> {
  return axios.get('todos').then(val => val.data)
}

export function get(id: number): Promise<Todo> {
  return axios.get(`todos/${id}`).then(val => val.data)
}

export function create(todo: CreateTodoDto): Promise<Todo> {
  return axios.post(`todos`, todo).then(val => val.data)
}

export function update(id: number, todo: UpdateTodoDto): Promise<Todo> {
  return axios.patch(`todos/${id}`, todo).then(val => val.data)
}

export function remove(id: number): Promise<number> {
  return axios.delete(`todos/${id}`).then(val => val.data)
}