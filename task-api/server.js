const express = require('express');
const app = express();
const PORT = 3000;

const tasks = [
  { id: 1, title: 'Buy groceries', done: false },
  { id: 2, title: 'Walk the dog', done: true },
  { id: 3, title: 'Read a book', done: false }
];

app.use(express.json());

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
  res.json(tasks);
});

app.get('/tasks/:id', (req, res) => {
  const taskId = Number(req.params.id);
  const task = tasks.find(t => t.id === taskId);
  if (!task) {
    return res.status(404).json({ error: `Task ${req.params.id} not found` });
  }
  res.json(task);
});

app.post('/tasks', (req, res) => {
  const title = req.body.title;
  if (!title || title.trim() === '') {
    return res.status(400).json({ error: 'title is required and cannot be empty' });
  }
  const newId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
  const newTask = { id: newId, title: title.trim(), done: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});