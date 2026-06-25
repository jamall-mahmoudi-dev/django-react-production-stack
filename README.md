
---

# Full-Stack Django + React + PostgreSQL + Nginx + Docker

A production-ready full-stack boilerplate using  Django (REST API) ,  React (Frontend) ,  PostgreSQL , and  Nginx , fully containerized with Docker.

---

##  Project Overview

This project demonstrates a modern full-stack architecture:

*  Backend: Django + Django REST Framework
*  Frontend: React (Create React App)
*  Database: PostgreSQL
*  Reverse Proxy: Nginx
*  Containerization: Docker + Docker Compose
*  Authentication: JWT (SimpleJWT)

---

##  Architecture

```
React (Frontend)  →  Nginx  →  Django API  →  PostgreSQL
                          ↘ JWT Auth System
```

---

##  Services

| Service     | Port | Description      |
| ----------- | ---- | ---------------- |
| React       | 3001 | Frontend UI      |
| Django      | 8001 | REST API Backend |
| Nginx       | 8080 | Reverse Proxy    |
| Postgres    | 5432 | Database         |
| code-server | 9001 | Development IDE  |

---

##  Tech Stack

* Django 5.x
* Django REST Framework
* SimpleJWT Authentication
* React 18
* Axios
* PostgreSQL 16
* Nginx
* Docker & Docker Compose

---

##  Project Structure

```
docker-django-react/
│
├── backend/          # Django project
├── frontend/         # React app
├── nginx/            # Nginx config
├── docker-compose.yml
└── .env.dev
```

---

##  Getting Started

### 1. Clone repository

```bash
git clone https://github.com/YOUR_USERNAME/django-react-production-stack.git
cd django-react-production-stack
```

---

### 2. Build & Run with Docker

```bash
docker-compose up --build
```

---

### 3. Access Services

* Frontend: [http://localhost:3001](http://localhost:3001)
* Nginx Gateway: [http://localhost:8080](http://localhost:8080)
* Django API: [http://localhost:8001/api/](http://localhost:8001/api/)
* Admin Panel: [http://localhost:8001/admin](http://localhost:8001/admin)

---

##  Authentication (JWT)

### Get Token

```bash
POST /api/token/
```

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

##  API Endpoints

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

Body:

```json
{
  "name": "John",
  "email": "john@example.com",
  "subject": "Hello",
  "message": "This is a test",
  "discription": "Demo post"
}
```

---

##  Development Notes

### React API Layer

Frontend uses Axios:

```js
const API_BASE_URL = "/api";
```

All requests go through Nginx → Django.

---

### CSRF Note

For API testing:

* Use `@csrf_exempt` or
* Use JWT Authentication (recommended)

---

##  Database
Tables are auto-generated via Django ORM:

```bash
docker exec -it dev-django python manage.py migrate
```

Check DB:

```sql
SELECT * FROM core_posts;
```

---

##  Useful Commands

### Django shell

```bash
docker exec -it dev-django python manage.py shell
```

### Create superuser

```bash
docker exec -it dev-django python manage.py createsuperuser
```

### Logs

```bash
docker logs dev-django -f
```

---

##  Known Issues
* React service worker may cache old builds
* Ensure `.env.dev` is configured correctly
* Django CSRF required for non-API endpoints

---

##  Future Improvements

* [ ] Add Role-based Access Control (RBAC)
* [ ] Add Redux Toolkit / Zustand
* [ ] Add CI/CD pipeline (GitHub Actions)
* [ ] Add WebSocket (Django Channels)
* [ ] Add Swagger API documentation
* [ ] Add production HTTPS (Let’s Encrypt)

---



Built for learning production-ready full-stack architecture:

* Django Backend
* React Frontend
* Dockerized Microservices

---
