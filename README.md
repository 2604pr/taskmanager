## 📝 Task Manager App

A modern Task Manager application built using React that allows users to manage daily tasks efficiently.
The app demonstrates clean UI, state management using Context API, performance optimizations, persistent storage, and responsive design.

## 🚀 Features

Add new tasks

Mark tasks as completed

Delete tasks

Filter tasks:

    All tasks
    Completed tasks
    Pending tasks

Persist tasks using Local Storage

## 🛠 Tech Stack

### Frontend:

    React
    Context API
    JavaScript (ES6+)
    CSS3
    Tooling
    Create React App
    Local Storage API


### Backend

    Node.js
    Express.js
    MongoDB
    Mongoose
    REST APIs
    CORS
    


## 📂 Project Structure

```text
frontend/
├── src/
│   ├── components/
│   │   ├── TaskForm.jsx
│   │   ├── TaskList.jsx
│   │   └── TaskItem.jsx
│   ├── context/
│   │   └── TaskContext.js
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── App.js
│   ├── index.js
│   └── style.css
├── package.json
```



## ⚙️ Installation & Setup

1️⃣ Clone the repository

git clone <your-repo-url>

cd frontend

2️⃣ Install dependencies

npm install

3️⃣ Start the application

npm start

## 🧠 How It Works

#### Task State Management 

All tasks and filters are managed centrally using React Context

State updates are optimized using memoization hooks

Local Storage Persistence

Tasks and theme preferences are saved in localStorage

Data persists across page refreshes

Theme Handling

Light/Dark mode toggle

Theme preference stored in localStorage

#### 📱 Responsive Design

Mobile-first approach

Scales cleanly across mobile, tablet, and desktop screens
