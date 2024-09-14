import express from 'express';
import TodoRouter from './routes/todos';
import runDbMigrations from './db/migrations';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

app.use('/todos', TodoRouter);

async function start() {
  await runDbMigrations();

  app.listen(PORT, () => {
    console.log(`😎😇 Running on port ${PORT} 😇😎`);
  });
}

start();
