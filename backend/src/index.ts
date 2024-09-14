import express from 'express';
import TodoRouter from './routes/todos';
import { testDbConnection } from './db/db';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

app.use('/todos', TodoRouter);

const startServer = async () => {
  await testDbConnection(); // Test the database connection
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
