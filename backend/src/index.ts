import express from 'express';
import TodoRouter from './routes/todos';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/todos', TodoRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
