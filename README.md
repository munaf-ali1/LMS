A mini MERN stack project to demonstrate Authentication, JWT Authorization, Role-based Access Control, and Dashboard CRUD operations.

This project includes Admin and Student roles with separate dashboards and permissions.

🚀 Tech Stack
Frontend

React.js

Redux Toolkit (state management)

React Router DOM

Axios

Tailwind CSS

Backend

Node.js

Express.js

MongoDB

Mongoose

JWT (JSON Web Token)

bcrypt.js

📂 Project Structure
mern-auth-dashboard/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── redux/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md

🔐 Authentication Features

User Sign Up with email & password

User Login

Password hashing using bcrypt

JWT authentication

Secure routes using middleware

Logout functionality

👥 User Roles

Two types of users are supported:

1️⃣ Admin

View all students

Add new student

Edit student details

Delete student records

2️⃣ Student

View own profile

Update profile (name, email, course)

Change password

📊 Dashboards
🧑‍🎓 Student Dashboard

View personal details

Edit profile

Logout

🛠️ Admin Dashboard

View all students list

Add / Edit / Delete students

Role-based access protection

🧾 Student Entity

Each student has the following fields:

Name

Email

Course (e.g. MERN Bootcamp)

Enrollment Date

🔒 Protected Routes

Only logged-in users can access dashboards

Role-based route protection

Admin-only routes secured via middleware

✨ Bonus Features (Implemented)

Redux Toolkit for global state management

Logout functionality

Forgot Password with OTP

Email-based password reset

Change password from dashboard

⚙️ Environment Variables

Create a .env file in backend folder:

PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

▶️ How to Run the Project
Backend
cd backend
npm install
npm run dev

Frontend
cd frontend
npm install
npm run dev

🎯 Learning Outcomes

JWT-based authentication

Role-based access control

Secure password handling

MERN stack architecture

Redux state management

Protected routing

👨‍💻 Author

Munaf Ali
MERN Stack Developer
Intern Assignment Project
