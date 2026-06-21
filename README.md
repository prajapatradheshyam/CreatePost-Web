# Post Create Web Application

A full-stack web application that allows users to create and manage posts. This project features image hosting integration, responsive styling, and robust API handling.

## 🚀 Tech Stack

- **Frontend:** Tailwind CSS, Remix Icons, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Image Hosting:** ImageKit

## 📋 Prerequisites

Before running this project, ensure you have the following installed:
- [Node.js](https://nodejs.org) (v14 or higher)
- [MongoDB](https://mongodb.com) (Local or Atlas cloud database)
- An [ImageKit](https://imagekit.io) account

## ⚙️ Installation & Setup

Follow these steps to get the project running locally:

### 1. Clone the Repository
```bash
git clone <your-github-repository-url>
cd <your-project-folder-name>
```

### 2. Install Dependencies
Install the required packages for both backend and frontend (if separated). Run this in your project root directory:
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory of your project and add the following configuration:

```env
# Server Configuration
PORT=5000

# Database Configuration
MONGODB_URI=your_mongodb_connection_string

# ImageKit Credentials
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```
> ⚠️ **Note:** Never push your `.env` file to GitHub. Make sure it is added to your `.gitignore`.

### 4. Run the Application

**Start the server:**
```bash
npm start
```
If you have `nodemon` installed for development:
```bash
npm run dev
```

The application should now be running on `http://localhost:5000` (or the port specified in your `.env` file).

## 🛠️ Usage Guide

### Icons (Remix Icon)
Icons are loaded via CDN or npm package. To use any icon in your HTML/EJS/React files, use the following syntax:
```html
<i class="ri-image-add-line"></i>
```

### Styling (Tailwind CSS)
Tailwind utility classes are used directly in the markup for styling:
```html
<div class="bg-blue-500 text-white p-4 rounded-lg shadow-md">
  <!-- Content here -->
</div>
```

### API Requests (Axios)
Axios handles HTTP requests to the backend server:
```javascript
axios.post('/api/posts', formData)
  .then(response => console.log('Post created successfully'))
  .catch(error => console.error('Error creating post', error));
```

## 📂 Project Structure
```text
├── config/             # Database and third-party configurations (ImageKit)
├── models/             # MongoDB Schemas (Post model)
├── routes/             # Express route handlers
├── public/             # Static files (CSS, JS, Images)
├── views/              # Frontend templates (if using EJS/HTML templates)
├── .env                # Environment variables (Local only)
├── .gitignore          # Files ignored by git
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

## 🤝 Contributing
1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.
