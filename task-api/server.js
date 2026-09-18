const express = require('express');
const app = express();
const PORT = 3000;
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./openapi.json');

const tasks = [
  { id: 1, title: 'Buy groceries', done: false },
  { id: 2, title: 'Walk the dog', done: true },
  { id: 3, title: 'Read a book', done: false }
];

function taskNotFoundError(res, id) {
  return res.status(404).json({ error: `Task ${id} not found` });
}

function isValidTitle(title) {
  return typeof title === 'string' && title.trim() !== '';
}

app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
  res.json({
    name: 'Task API',
    version: '1.0',
    endpoints: ['/tasks']
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'ok'
  });
});

app.get('/tasks', (req, res) => {
  let result = tasks;
  const { done, search } = req.query;

  if (done !== undefined) {
    if (done !== 'true' && done !== 'false') {
      return res.status(400).json({ error: 'done must be true or false' });
    }
    const doneFilter = done === 'true';
    result = result.filter(t => t.done === doneFilter);
  }

  if (search !== undefined && search !== '') {
    const query = search.toLowerCase();
    result = result.filter(t => t.title.toLowerCase().includes(query));
  }

  res.json(result);
});

app.get('/tasks/:id', (req, res) => {
  const taskId = Number(req.params.id);
  const task = tasks.find(t => t.id === taskId);
  if (!task) {
    return taskNotFoundError(res, req.params.id);
  }
  res.json(task);
});

app.post('/tasks', (req, res) => {
  const title = req.body.title;
  if (!isValidTitle(title)) {
    return res.status(400).json({ error: 'title is required and cannot be empty' });
  }
  const newId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
  const newTask = { id: newId, title: title.trim(), done: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
  const taskId = Number(req.params.id);
  const task = tasks.find(t => t.id === taskId);
  if (!task) {
    return taskNotFoundError(res, req.params.id);
  }
  const { title, done } = req.body;
  const hasTitle = title !== undefined;
  const hasDone = done !== undefined;
  if (!hasTitle && !hasDone) {
    return res.status(400).json({ error: 'request body must include title and/or done' });
  }
  if (hasTitle) {
    if (!isValidTitle(title)) {
      return res.status(400).json({ error: 'request body must include title and/or done' });
    }
    task.title = title.trim();
  }
  if (hasDone) {
    task.done = Boolean(done);
  }
  res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
  const taskId = Number(req.params.id);
  const index = tasks.findIndex(t => t.id === taskId);
  if (index === -1) {
    return taskNotFoundError(res, req.params.id);
  }
  tasks.splice(index, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});