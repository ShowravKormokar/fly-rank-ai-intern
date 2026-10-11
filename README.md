# FLY RANK AI - INTERN: AI BACKEND ENGINEER

Welcome to my portfolio repository for the **FlyRank AI Intern — AI Backend Engineer** program.

This repository contains my completed assignments, built step by step as part of the
Web Development Foundation Program.

## Repository Structure

```
fly-rank-ai-intern/
├── task-api/                # Main project
│   ├── screenshots/
│   │   └── swagger-ui.png   # Swagger UI screenshot
│   ├── .gitignore
│   ├── ai-suggestion.txt    # AI refactor proposal (AI vs Me phase)
│   ├── openapi.json         # Handwritten OpenAPI 3.0 specification
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md            # Full project documentation
│   ├── server.js            # Express server entry point
│   └── node_modules/        # Dependencies (gitignored)
├── LICENSE.md
└── README.md                # This file
```

## Projects

### Task API

A complete REST API for managing tasks, built with **JavaScript, Node.js, and Express**.

- In-memory task storage (no database)
- Full CRUD operations (Create, Read, Update, Delete)
- Input validation and proper HTTP status codes (200, 201, 204, 400, 404)
- Swagger UI at `/docs` with a handwritten OpenAPI specification
- Optional task filtering (`?done=true`) and search (`?search=milk`)

See [`task-api/README.md`](task-api/README.md) for full documentation, installation
instructions, endpoint table, and usage examples.

## Tech Stack

- JavaScript
- Node.js
- Express
- OpenAPI 3.0
- Swagger UI
- Git / GitHub

## Commit History

The project was built incrementally across 11 meaningful commits:

```text
Stage 0: hello server
Stage 1: root and health endpoints
Stage 2: read endpoints with 404
Stage 3: create with validation
Stage 4: full CRUD
Stage 5: Swagger UI
Stage 6: publish and docs
Stage 7: add task filtering and search
Stage 7: AI vs me
```

## License

This project is licensed under the terms of the [MIT License](LICENSE.md).