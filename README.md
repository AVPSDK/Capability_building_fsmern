# Capability Building - Full Stack MERN Project

This project is a Full Stack MERN application consisting of an Admin Panel and a Backend Server.

## Project Structure

- **admin/**: React.js frontend for the admin panel.
- **Server/**: Node.js & Express backend with MySQL database.

## Prerequisites

- Node.js installed
- MySQL Server installed and running

## Setup Instructions

### 1. Database Setup

Ensure your MySQL server is running. The application uses a database named `clothhouse`.
The backend will automatically attempt to create the database and tables if they don't exist upon running the debug script, or you can import the schema manually.

**Database Config:**
- User: `root`
- Password: `aditya@122416`
- Database: `clothhouse`

### 2. Backend (Server)

Navigate to the `Server` directory:
```bash
cd Server
npm install
npm start
```
The server runs on `http://localhost:1337`.

### 3. Frontend (Admin)

Navigate to the `admin` directory:
```bash
cd admin
npm install
npm start
```
The admin panel runs on `http://localhost:3000`.

## Features

- **Add Category**: Upload category details with images.
- **View Category**: List all categories fetched from the database.
