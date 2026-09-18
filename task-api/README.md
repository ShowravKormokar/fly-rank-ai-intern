# Task API

A simple in-memory REST API for managing tasks built with Node.js and Express.

## Features

- Create tasks
- Read all tasks
- Read a single task
- Update tasks
- Delete tasks
- Input validation
- 404 handling
- Swagger UI documentation
- Filter tasks by completion status
- Search tasks by title

## Tech Stack

- JavaScript
- Node.js
- Express
- Swagger UI
- OpenAPI
- In-memory data storage

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/ShowravKormokar/fly-rank-ai-intern.git
```

### 2. Enter the project directory

```bash
cd task-api
```

### 3. Install dependencies

```bash
npm install
```

## Run the Server

```bash
npm start
```

The server runs at:

```
http://localhost:3000
```

## Swagger UI

Interactive API documentation is available at:

```
http://localhost:3000/docs
```

Swagger UI allows you to inspect and test all endpoints directly from the browser.

## Endpoints

| Method | Endpoint     | Description          |
| ------ | ------------ | -------------------- |
| GET    | `/`          | API metadata         |
| GET    | `/health`    | Health check         |
| GET    | `/tasks`     | Get all tasks        |
| GET    | `/tasks/:id` | Get one task         |
| POST   | `/tasks`     | Create a task        |
| PUT    | `/tasks/:id` | Update a task        |
| DELETE | `/tasks/:id` | Delete a task        |

### Optional query parameters for `GET /tasks`

| Parameter | Type    | Description                              |
| --------- | ------- | ---------------------------------------- |
| `done`    | boolean | Filter tasks by completion status        |
| `search`  | string  | Search task titles (case-insensitive)    |

Examples:

```text
GET /tasks?done=true
GET /tasks?done=false
GET /tasks?search=milk
GET /tasks?done=true&search=milk
```

## Request Examples

### Create a task

```bash
curl -i -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d "{\"title\":\"Buy milk\"}"
```

### Read all tasks

```bash
curl -i http://localhost:3000/tasks
```

### Read a single task

```bash
curl -i http://localhost:3000/tasks/1
```

### Update a task

```bash
curl -i -X PUT http://localhost:3000/tasks/1 \
  -H "Content-Type: application/json" \
  -d "{\"done\":true}"
```

### Delete a task

```bash
curl -i -X DELETE http://localhost:3000/tasks/1
```

## Example Response

```text
$ curl -i http://localhost:3000/health

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 15
ETag: W/"f-VaSQ4oDUiZblZNAEkkN+sX+q3Sg"
Date: Fri, 18 Sep 2026 11:48:18 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"status":"ok"}
```

## Swagger UI

![Swagger UI](screenshots/swagger-ui.png)

## HTTP Status Codes

- `200 OK` — successful read or update
- `201 Created` — task successfully created
- `204 No Content` — task successfully deleted
- `400 Bad Request` — invalid request data
- `404 Not Found` — requested task does not exist

## Data Storage

The API uses an in-memory array for task storage. Data is reset when the server restarts.

## Project Structure

```
task-api/
├── screenshots/
│   └── swagger-ui.png
├── .gitignore
├── openapi.json
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

## Git History

```text
a171180 Stage 7: add task filtering and search
228edef Stage 5: Swagger UI
4e9f308 Stage 4: full CRUD
50aef34 Stage 3: create with validation
2576e6f Stage 2: read endpoints with 404
42f5cf4 Stage 1: root and health endpoints
4aa4337 Stage 0: hello server
```