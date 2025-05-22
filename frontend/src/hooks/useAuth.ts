import { useState, useEffect } from 'react'
import { User, AuthState } from '../types'

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: true,
  error: null,
}

export function useAuth() {
  const [state, setState] = useState<AuthState>(initialState)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      // TODO: Implement token validation and user fetching
      setState(prev => ({
        ...prev,
        isAuthenticated: true,
        isLoading: false,
      }))
    } else {
      setState(prev => ({
        ...prev,
        isLoading: false,
      }))
    }
  }, [])

  const login = async (email: string, password: string) => {
    try {
      setState(prev => ({ ...prev, isLoading: true, error: null }))
      // TODO: Implement login API call
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        throw new Error('Login failed')
      }

      const data = await response.json()
      localStorage.setItem('token', data.token)
      setState({
        user: data.user,
        token: data.token,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      })
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'An error occurred',
      }))
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setState({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    })
  }

  const register = async (name: string, email: string, password: string) => {
    try {
      setState(prev => ({ ...prev, isLoading: true, error: null }))
      // TODO: Implement register API call
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      })

      if (!response.ok) {
        throw new Error('Registration failed')
      }

      const data = await response.json()
      localStorage.setItem('token', data.token)
      setState({
        user: data.user,
        token: data.token,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      })
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'An error occurred',
      }))
    }
  }

  return {
    ...state,
    login,
    logout,
    register,
  }
} 