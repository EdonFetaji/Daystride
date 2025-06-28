# Daystride

Daystride is a personal productivity and well-being platform for tracking **habits, goals, and daily todos** in a clean, modern interface. It uses a **Django REST API backend** with a **React (Vite + Mantine + Tailwind) frontend**.

---

## Features

 User registration and JWT-based authentication (SimpleJWT)  
 Habit tracking with CRUD operations  
 Goal management (public and private goals, joinable public goals)  
 Todo tasks with priority, deadlines, and categories  
 Dashboard showing personal progress  
 Responsive, modern UI using Mantine and Tailwind CSS  
 Token auto-refresh with secure handling in the frontend  
 Modular repository and hook-based frontend architecture

---

## Technology Stack

| Layer        | Tech                                           |
| ------------ | ---------------------------------------------- |
| Backend      | Python, Django, Django REST Framework         |
| Auth         | SimpleJWT                                      |
| Frontend     | React, Vite, Mantine, Tailwind CSS            |
| State        | React Context, hooks, repository pattern      |
| Database     | SQLite (dev), MYSQL    |

---
## Backend API Documentation
| **Endpoint**          | **Method(s)**                   | **Description**                                                | **Returns**                                       |
| --------------------- | ------------------------------- | -------------------------------------------------------------- | ------------------------------------------------- |
| `/api/token/`         | `POST`                          | Obtain JWT access + refresh tokens                             | `{ access, refresh }` tokens                      |
| `/api/token/refresh/` | `POST`                          | Refresh JWT access token                                       | `{ access }` token                                |
| `/api/dashboard/`     | `GET`                           | Fetch user’s dashboard summary                                 | `{ username, email, habits[], todos[], goals[] }` |
| `/api/goals/`         | `GET`, `POST`                   | List public goals, create a goal                               | List of public goals (GET), created goal (POST)   |
| `/api/goals/my/`      | `GET`                           | List user’s own goals                                          | List of user’s goals                              |
| `/api/goals/{id}/`    | `GET`, `PUT`, `PATCH`, `DELETE` | Retrieve, update, partially update, or delete a specific goal  | Goal object or status response                    |
| `/api/todos/`         | `GET`, `POST`                   | List user’s todos, create a todo                               | List of todos (GET), created todo (POST)          |
| `/api/todos/{id}/`    | `GET`, `PUT`, `PATCH`, `DELETE` | Retrieve, update, partially update, or delete a specific todo  | Todo object or status response                    |
| `/api/habits/`        | `GET`, `POST`                   | List user’s habits, create a habit                             | List of habits (GET), created habit (POST)        |
| `/api/habits/{id}/`   | `GET`, `PUT`, `PATCH`, `DELETE` | Retrieve, update, partially update, or delete a specific habit | Habit object or status response                   |


---

## Local Development

### Clone the Repository

```bash
git clone https://github.com/yourusername/daystride.git
cd daystride
```
