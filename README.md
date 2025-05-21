
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
   │   ├── redux/
   │   ├── routes/
   │   ├── types/
   │   ├── App.tsx
   │   └── main.tsx
   ├── tsconfig.json
   ├── webpack.config.js
   ├── babel.config.js
   └── package.json
   ```

5. **Notes**
   - Ensure you have Node.js installed (v16+ recommended).
   - The app does not persist data on reload; all states (ratings, reviews) are held in-memory.

## Features

- 🔐 **User Authentication**: 
  - Simple login page with localStorage/sessionStorage credential storage. 
  - Protected routing is implemented using router guards. 
  - “Remember Me” functionality on login

- 📚 **Book List Display**:
  - Fetched using the [Google Books API](https://www.googleapis.com/books/v1/volumes?q=subject:fiction)
  - Tabular view.
  - Dynamic search by title or author.
  - Client-side pagination (items per page can be selected with a dropdown. initially 5).

- ✍️ **Review and Rating System**:
  - Detailed book view on double-click.
  - Star-based rating (1 to 5) and text area for reviews.
  - State management using Redux Toolkit.

- 🧭 **Routing**:
  - Navigation handled via React Router.

- 🎨 **Styling Options**:
  - Ant Design.
