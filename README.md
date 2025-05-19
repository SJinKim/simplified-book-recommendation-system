
# simplified-book-recommendation-system

Build a simplified book recommendation system web application that allows users to browse a list of books, rate them, and leave reviews.

## Table of Contents
- [Overview](#overview): Overview of the project  
- [Instructions](#instructions): Instructions for setup and installation  
- [Features](#features): Any additional features or improvements made  

## Overview

This project is a simplified book recommendation system developed as a full-stack web application. It allows users to log in, browse a curated list of books, search by title or author, and leave personal ratings and reviews. Built using **React with TypeScript**, the system emphasizes clean component structure, strong typing, and responsive UI components.

Key technologies and tools used include:
- **React (TypeScript)** for the frontend
- **Material UI / Ant Design** for styled components
- **Axios or React Query** for API calls
- **Redux Toolkit** for state management
- **React Router** for client-side routing
- **AG-Grid** for tabular display of book data
- **Google Books API** as a public data source

## Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/simplified-book-recommendation-system.git
   cd simplified-book-recommendation-system
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Application**
   ```bash
   npm run dev
   ```

   This starts the development server (using Webpack Dev Server or Vite, depending on configuration).

4. **Project Structure Overview**
   ```
   ├── public/
   ├── src/
   │   ├── components/
   │   ├── pages/
   │   ├── services/
   │   ├── redux/
   │   ├── types/
   │   ├── App.tsx
   │   └── main.tsx
   ├── tsconfig.json
   └── package.json
   ```

5. **Notes**
   - Ensure you have Node.js installed (v16+ recommended).
   - The app does not persist data on reload; all states (ratings, reviews) are held in-memory.

## Features

- 🔐 **User Authentication**: Simple login page with localStorage/sessionStorage credential storage. Protected routing is implemented using router guards.

- 📚 **Book List Display**:
  - Fetched using the [Google Books API](https://www.googleapis.com/books/v1/volumes?q=subject:fiction)
  - Tabular view with AG-Grid.
  - Dynamic search by title or author.
  - Optional client-side pagination (20 items per page).

- ✍️ **Review and Rating System**:
  - Detailed book view on double-click.
  - Star-based rating (1 to 5) and text area for reviews.
  - State management using Redux Toolkit.

- 🧭 **Routing**:
  - Navigation handled via React Router.
  - Each book has a unique detail view route.

- 🧱 **Component Architecture**:
  - Modularized React components.
  - Clean and maintainable file structure.

- 🎨 **Styling Options**:
  - Material UI or Ant Design components recommended.
  - Optional use of CSS preprocessors (SASS/LESS) to demonstrate advanced styling if styled-components are not used.

- 💡 **Code Quality**:
  - Full TypeScript support with strict type checking.
  - Interfaces, types, and enums properly defined.
  - Unused dependencies are removed for a clean build.

- 🎁 **Optional Enhancements**:
  - “Remember Me” functionality on login (optional).
  - Smooth UI animations and transitions.
  - Clean design with responsive layout.
