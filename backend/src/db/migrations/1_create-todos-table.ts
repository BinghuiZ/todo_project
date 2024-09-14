const createTodosTable = `
    CREATE TABLE IF NOT EXISTS todos (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      done BOOLEAN NOT NULL DEFAULT FALSE
);
`

export default createTodosTable
