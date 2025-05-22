export interface Task {
  id: number
  title: string
  description: string
  completed?: boolean
  createdAt?: Date
  updatedAt?: Date
}

export interface User {
  id: number
  name: string
  email: string
  avatar?: string
}

export interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
} 