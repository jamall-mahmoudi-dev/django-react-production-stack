
---

# Full-Stack Django + React + PostgreSQL + Nginx + Docker

A production-ready full-stack boilerplate using Django (REST API), React (Frontend), PostgreSQL, and Nginx, fully containerized with Docker and Docker Compose.

---

## Project Overview

This project demonstrates a modern full-stack architecture:

* Backend: Django + Django REST Framework
* Frontend: React (Create React App)
* Database: PostgreSQL
* Reverse Proxy: Nginx
* Containerization: Docker + Docker Compose
* Authentication: JWT (SimpleJWT)
* API Documentation: Swagger (drf-spectacular)

---

## Architecture

```
React (Frontend)  →  Nginx  →  Django API  →  PostgreSQL
                          ↘ JWT Authentication
                          ↘ Swagger API Docs
```

---

## Services

| Service     | Port | Description      |
| ----------- | ---- | ---------------- |
| React       | 3001 | Frontend UI      |
| Django      | 8001 | REST API Backend |
| Nginx       | 8080 | Reverse Proxy    |
| Postgres    | 5432 | Database         |
| code-server | 9001 | Development IDE  |

---

## Tech Stack

* Django 5.x
* Django REST Framework
* SimpleJWT Authentication
* drf-spectacular (Swagger/OpenAPI)
* React 18
* Axios
* PostgreSQL 16
* Nginx
* Docker & Docker Compose

---

## Project Structure

```
docker-django-react/
│
├── backend/          # Django project
├── frontend/         # React app
├── nginx/            # Nginx configuration
├── docker-compose.yml
└── .env.dev
```

---

## Getting Started

### 1. Clone repository

```bash
git clone https://github.com/YOUR_USERNAME/django-react-production-stack.git
cd django-react-production-stack
```

---

### 2. Build & Run with Docker

```bash
docker-compose up --build -d
```

---

### 3. Access Services

* Frontend: [http://localhost:3001](http://localhost:3001)
* Nginx Gateway: [http://localhost:8080](http://localhost:8080)
* Django API: [http://localhost:8001/api/](http://localhost:8001/api/)
* Admin Panel: [http://localhost:8001/admin/](http://localhost:8001/admin/)
* Swagger UI: [http://localhost:8001/api/docs/](http://localhost:8001/api/docs/)
* OpenAPI Schema: [http://localhost:8001/api/schema/](http://localhost:8001/api/schema/)

---

## Authentication (JWT)

### Get Token

```
POST /api/token/
```

### Request Body

```json
{
  "username": "admin",
  "password": "yourpassword"
}
```

### Response

```json
{
  "access": "jwt_access_token",
  "refresh": "jwt_refresh_token"
}
```

---

## API Endpoints

### Test API

```
GET /api/test/
```

Response:

```json
{
  "backend": "Django",
  "database": "Postgres",
  "status": "connected",
  "framework": "React"
}
```

---

### Create Post

```
POST /api/create_post/
```

### Request Body

```json
{
  "name": "Bahram",
  "email": "devops523@gmail.com",
  "subject": "Hello",
  "message": "This is a test",
  "discription": "Demo post"
}
```

---

## Swagger API Documentation

This project includes Swagger UI powered by drf-spectacular.

* Swagger UI: `/api/docs/`
* OpenAPI Schema: `/api/schema/`

You can:

* View all available endpoints
* Test GET and POST requests directly
* Inspect request/response schemas
* Debug API without using frontend or curl

---

## React API Layer

Frontend communicates with backend via Axios:

```js
const API_BASE_URL = "/api";
```

All requests go through:

React → Nginx → Django API

---

## CSRF Note

For API testing:

* Use JWT authentication (recommended)
* Or disable CSRF only for development endpoints

---

## Database

Tables are auto-generated via Django ORM:

```bash
docker exec -it dev-django python manage.py migrate
```

Check database:

```sql
SELECT * FROM core_posts;
```

---

## Useful Commands

### Django shell

```bash
docker exec -it dev-django python manage.py shell
```

### Create superuser

```bash
docker exec -it dev-django python manage.py createsuperuser
```

### View logs

```bash
docker logs dev-django -f
```

---

## Known Issues

* React service worker may cache old builds
* Ensure `.env.dev` is properly configured
* CSRF may block non-JWT POST requests in Django views
* Swagger requires correct serializer schema to fully render forms

---

## Future Improvements

* Add Role-Based Access Control (RBAC)
* Add Redux Toolkit or Zustand for state management
* Add CI/CD pipeline (GitHub Actions)
* Add WebSocket support (Django Channels)
* Improve Swagger schema annotations
* Add HTTPS (Let’s Encrypt)
* Production-grade Nginx configuration

---

## Summary

This project is a complete full-stack boilerplate demonstrating:

* Django REST API backend
* React frontend
* PostgreSQL database
* Dockerized microservices architecture
* JWT authentication
* Swagger API documentation

---
