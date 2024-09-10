import { Request, Response } from 'express'

const getAllTodos = (req: Request, res: Response) => {
  res.send('Hello World! asdfasdfdasf').status(200)
}

const getTodo = (req: Request, res: Response) => {
  res.send(`Hello World! asdfasdfdasf  ${req.params.id}`).status(200)
}

const createTodo = (req: Request, res: Response) => {
  res.send('Hello World! asdfasdfdasf').status(200)
}

const updateTodo = (req: Request, res: Response) => {
  res.send(`Hello World! asdfasdfdasf  ${req.params.id}`).status(200)
}

const deleteTodo = (req: Request, res: Response) => {
  res.send(`Hello World! asdfasdfdasf  ${req.params.id}`).status(200)
}

export { getAllTodos, getTodo, createTodo, updateTodo, deleteTodo }
