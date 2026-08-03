# 🏥 Hospital Appointment & Management System – Frontend

## 📖 Overview

This repository contains the **React.js frontend** for the Hospital Appointment & Management System.

The application provides an intuitive and responsive user interface for patients and doctors to interact with the backend microservices through the API Gateway. It supports user authentication, appointment management, doctor availability, medical history, and other hospital management features.

The frontend is containerized using Docker and designed to be deployed in Kubernetes as part of a complete cloud-native DevOps environment.

---

# ✨ Features

* 👤 Patient Registration & Login
* 👨‍⚕️ Doctor Login
* 🔐 JWT-based Authentication
* 📅 Appointment Booking
* 🗓️ Appointment Management
* 📋 Medical History Management
* 👨‍⚕️ Doctor Availability
* 📱 Responsive User Interface
* 🔄 API Integration with Spring Boot Microservices

---

# 🛠️ Tech Stack

| Category         | Technology        |
| ---------------- | ----------------- |
| Framework        | React.js          |
| Language         | JavaScript (ES6+) |
| Routing          | React Router      |
| API Client       | Axios             |
| Styling          | CSS3              |
| Build Tool       | npm               |
| Containerization | Docker            |

---

# 📂 Project Structure

```text
src/
├── assets/
├── components/
├── pages/
├── services/
├── styles/
├── utils/
├── App.js
└── index.js
```

---

# 🔐 Authentication Flow

The application uses **JWT (JSON Web Token)** authentication.

```text
User Login
      │
      ▼
API Gateway
      │
      ▼
Login Service
      │
Generate JWT
      │
      ▼
Frontend stores JWT
      │
      ▼
JWT included in Authorization Header
      │
      ▼
Authenticated API Requests
```

---

# 🌐 Backend Communication

The frontend communicates with backend microservices through the API Gateway.

```text
React Frontend
        │
        ▼
API Gateway
        │
        ▼
Backend Microservices
        │
 ┌──────────────┬──────────────┬──────────────┐
 │              │              │              │
 ▼              ▼              ▼              ▼
Login      Doctor      Appointment    Medical History
```

---

# 🚀 Local Setup

## Clone Repository

```bash
git clone https://github.com/Vamshi925/Hospital-Frontend-With-API-Gateway/
cd hams
```

## Install Dependencies

```bash
npm install
```

## Configure Environment

Create a `.env` file:

```env
REACT_APP_API_URL=http://localhost
```

Update the value according to your backend or API Gateway endpoint.

---

# ▶️ Run the Application

```bash
npm start
```

The application will be available at:

```text
http://localhost:3000
```

---

# 📦 Production Build

```bash
npm run build
```

---

# 🐳 Docker

## Build Image

```bash
docker build -t hospital-frontend .
```

## Run Container

```bash
docker run -d -p 3000:80 hospital-frontend
```

---

# ☁️ Deployment

This frontend is designed to be deployed as part of the Hospital DevOps project using:

* Docker
* Kubernetes (K3s)
* Helm Charts
* NGINX Ingress Controller
* Argo CD (GitOps)
* GitHub Actions CI Pipeline

---

# 📸 Application Modules

The frontend includes interfaces for:

* Home Page
* User Authentication
* Patient Dashboard
* Doctor Dashboard
* Appointment Booking
* Appointment History
* Medical History
* Doctor Availability

---

# 🔮 Future Improvements

* Dark Mode
* Notification System
* Profile Management
* Appointment Reminders
* Responsive Dashboard Enhancements
* Real-time Updates

---

# 👨‍💻 Author

**Vamshi Reddy**

Developed as part of a comprehensive DevOps learning project demonstrating modern frontend development, Docker containerization, Kubernetes deployment, and GitOps-based continuous delivery.
