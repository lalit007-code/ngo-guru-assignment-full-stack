# 🚀 Project Setup Guide

This project is split into two main parts:

- 🖥️ **Backend** — Located in the `assignments` folder  
- 🌐 **Frontend** — Located in the `interview-assignment-frontend` folder

Follow the instructions below to get everything up and running locally.

---

## 🐳 Prerequisite: Run Redis with Docker

The backend uses **Redis** for caching. Before running the backend, make sure Redis is running via Docker.

If you don't have Docker installed, caching will not work, and there might be a chance backend also will not work.

To run Redis with Docker:

```bash
docker run -d -p 6379:6379 --name redis redis
