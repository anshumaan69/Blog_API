# Blog API

A RESTful API for a blogging platform with user authentication, email verification, and (soon) full CRUD for blog posts.

---

## 🚀 Features

- **User Registration & Login** (with JWT authentication)
- **Email Verification** via OTP
- **Logout**
- **Healthcheck Endpoint**
- **(Coming Soon)**: Create, Read, Update, Delete blog posts (only post owners can edit/delete)
- **(Planned)**: Tags, search, and pagination

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose)
- **Auth:** JWT, bcryptjs, cookie-based sessions
- **Email:** Nodemailer (Brevo/Sendinblue SMTP)
- **Other:** dotenv, cors, helmet, morgan

---

## 📦 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/blog-api.git
   cd blog-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the root directory with the following:
   ```
   PORT=4000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CORS_ORIGIN=http://localhost:3000
   SMTP_USER=your_brevo_user
   SMTP_PASS=your_brevo_pass
   SMTP_EMAIL=your_verified_sender@example.com
   NODE_ENV=development
   ```

4. **Start the server**
   ```bash
   npm start
   ```
   The API will run on `http://localhost:4000` by default.

---

## 📚 API Endpoints

### Auth

- `POST /api/v1/auth/register` — Register a new user
- `POST /api/v1/auth/login` — Login and receive JWT in cookie
- `POST /api/v1/auth/logout` — Logout user
- `POST /api/v1/auth/send-verify-otp` — Send email verification OTP (requires login)
- `POST /api/v1/auth/verify-account` — Verify email with OTP (requires login)

### Healthcheck

- `GET /api/v1/healthcheck` — Check if API is running

### Posts (Coming Soon)

- `POST /api/v1/posts` — Create a post (requires login)
- `GET /api/v1/posts` — List all posts
- `GET /api/v1/posts/:id` — Get a single post
- `PUT /api/v1/posts/:id` — Update a post (owner only)
- `DELETE /api/v1/posts/:id` — Delete a post (owner only)

---

## 🧪 Testing

Use [Postman](https://www.postman.com/) or similar tools to test the endpoints.  
Make sure to include cookies for protected routes.

---

## 📄 License

MIT

---

*Happy coding!*
