# Employee Dashboard

A React app (Vite + React Router + Bootstrap) with a navbar, an employee dashboard and an employee form.

## Features
- Navbar with **Home** and **Employee Form** links
- `/` – Dashboard: fetches users from `https://jsonplaceholder.typicode.com/users` and shows **ID, Name, Email** in a table
- `/employee-form` – Form with **Name, Designation, Location, Salary** (no data is posted to a server)
- Loading and error states, responsive Bootstrap UI

## Tech
React 18, React Router v6, Bootstrap 5, Vite

## Run locally
```bash
npm install
npm run dev
```
Open the URL shown in the terminal (usually http://localhost:5173).

## Build
```bash
npm run build
npm run preview
```
