
# BlogoSphere

BlogoSphere is a full-featured MERN stack blog website that allows users to write, read, update, and manage blogs. It features a user-friendly interface and supports complete CRUD functionality with secure authentication.

---

## Features

- **User Authentication**: Login and Sign-up functionality with secure password storage.
- **Blog Management**:
  - Create, edit, and delete blogs.
  - View blogs posted by other users.
- **Publisher Details**: View details of the blog's author.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **RESTful APIs**: Backend powered by Express.js for seamless API integration.

---

## Technology Stack

### Frontend:
- **React.js**: For building the user interface.
- **Bootstrap/Material-UI**: (Optional) For styling and responsiveness.

### Backend:
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Framework for API creation.

### Database:
- **MongoDB**: NoSQL database for storing user and blog data.

### Authentication:
- **JWT (JSON Web Tokens)**: For secure user authentication.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ankitshukla6121/blogosphere.git
   cd blogosphere
   ```

2. Install dependencies:
   ```bash
   # For backend
   cd backend
   npm install

   # For frontend
   cd ../frontend
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `backend` directory with the following:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```

4. Run the application:
   ```bash
   # Start backend server
   cd backend
   npm run dev

   # Start frontend server
   cd ../frontend
   npm start
   ```

5. Access the application at [http://localhost:3000](http://localhost:3000).

---

## Folder Structure

```
blogosphere/
├── backend/
│   ├── models/          # MongoDB models
│   ├── routes/          # Express.js routes
│   ├── controllers/     # API logic
│   ├── utils/           # Utility functions (e.g., authentication)
│   ├── server.js        # Entry point for backend
├── frontend/
│   ├── src/
│   │   ├── components/  # Reusable React components
│   │   ├── pages/       # Main pages (e.g., Home, Login, Blog)
│   │   ├── App.js       # App root component
│   │   ├── index.js     # React entry point
└── README.md
```

---

## API Endpoints

### User Endpoints:
- **POST** `/api/users/register`: Register a new user.
- **POST** `/api/users/login`: Authenticate a user.

### Blog Endpoints:
- **GET** `/api/blogs`: Fetch all blogs.
- **POST** `/api/blogs`: Create a new blog.
- **GET** `/api/blogs/:id`: Fetch a single blog by ID.
- **PUT** `/api/blogs/:id`: Update a blog by ID.
- **DELETE** `/api/blogs/:id`: Delete a blog by ID.

---

## Future Enhancements

- Add a rich-text editor for blog creation.
- Implement social media sharing functionality.
- Add comment and like features.
- Enable image uploads for blogs.

---


---

## Contributions

Contributions are welcome! Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss the proposed changes.

---

## Contact

For any queries or feedback, reach out to:
- **Name**: Ankit Shukla
- **Email**: ankitshukla4510@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/ankit-shukla-979303252/
