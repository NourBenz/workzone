import { useState, useEffect } from 'react'
import { Task } from '../types'

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const token = localStorage.getItem('token')
      const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        throw new Error('Failed to fetch tasks')
      }

      const data = await response.json()
      setTasks(data)
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  const addTask = async (title: string, description: string) => {
    try {
      setError(null)
      const token = localStorage.getItem('token')
      const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ title, description }),
      })

      if (!response.ok) {
        throw new Error('Failed to add task')
      }

      const newTask = await response.json()
      setTasks(prev => [...prev, newTask])
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred')
    }
  }

  const updateTask = async (id: number, updates: Partial<Task>) => {
    try {
      setError(null)
      const token = localStorage.getItem('token')
      const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(updates),
      })

      if (!response.ok) {
        throw new Error('Failed to update task')
      }

      const updatedTask = await response.json()
      setTasks(prev => prev.map(task => task.id === id ? updatedTask : task))
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred')
    }
  }

  const deleteTask = async (id: number) => {
    try {
      setError(null)
      const token = localStorage.getItem('token')
      const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        throw new Error('Failed to delete task')
      }

      setTasks(prev => prev.filter(task => task.id !== id))
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred')
    }
  }

  return {
    tasks,
    isLoading,
    error,
    addTask,
    updateTask,
    deleteTask,
    refreshTasks: fetchTasks,
  }
} 