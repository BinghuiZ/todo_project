// src/todoQueries.ts
import db from '../db'
import { Todo } from '../models/Todo'

export const getTodos = async (
  limit: number,
  offset: number
): Promise<Todo[]> => {
  try {
    const res = await db.query('SELECT * FROM todos LIMIT $1 OFFSET $2;', [
      limit,
      offset,
    ])
    return res.rows
  } catch (error) {
    console.error('Error executing query', error)
    throw error
  }
}

export const getTodoById = async (id: number): Promise<Todo> => {
  const res = await db.query('SELECT * FROM todos WHERE id = $1', [id])
  return res.rows[0]
}

export const createTodo = async (name: string): Promise<Todo> => {
  const res = await db.query(
    'INSERT INTO todos (name) VALUES ($1) RETURNING *',
    [name]
  )
  return res.rows[0]
}

export const updateTodo = async (
  id: number,
  name: string,
  done: boolean
): Promise<Todo> => {
  const res = await db.query(
    'UPDATE todos SET name = $1, done = $2 WHERE id = $3 RETURNING *',
    [name, done, id]
  )
  return res.rows[0]
}

export const deleteTodo = async (id: number): Promise<void> => {
  await db.query('DELETE FROM todos WHERE id = $1', [id])
}
