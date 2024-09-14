// src/todoQueries.ts
import pool from '../db/db'
import { Todo } from '../models/Todo'

export const getTodos = async () => {
  try {
    const res = await pool.query('SELECT * FROM todos');
    return res.rows;
  } catch (error) {
    console.error('Error executing query', error);
    throw error;
  }
};

export const getTodoById = async (id: number): Promise<Todo> => {
  // Specify the return type as Promise<Todo>
  const res = await pool.query('SELECT * FROM todos WHERE id = $1', [id])
  return res.rows[0]
}

export const createTodo = async (
  name: string
): Promise<Todo> => {
  // Specify the return type as Promise<Todo>
  const res = await pool.query(
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
  // Specify the return type as Promise<Todo>
  const res = await pool.query(
    'UPDATE todos SET name = $1, done = $2 WHERE id = $3 RETURNING *',
    [name, done, id]
  )
  return res.rows[0]
}

export const deleteTodo = async (id: number): Promise<void> => {
  // Specify the return type as Promise<void>
  await pool.query('DELETE FROM todos WHERE id = $1', [id])
}
