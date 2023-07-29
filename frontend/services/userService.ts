import axios from 'utils/axios'
import type { User } from 'project-types'

interface CreateUserDto {
  username: string,
  password: string,
}

export function find(username: string): Promise<User> {
  return axios.get(`/users/${username}`).then(val => val.data)
}

export function create(user: CreateUserDto): Promise<User> {
  return axios.post('/users', user).then(val => val.data)
}

// TODO: crud