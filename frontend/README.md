# AI Treasury Management Platform

An end-to-end **enterprise-style treasury analytics platform** built with **React, Spring Boot, PostgreSQL, and AI microservices**.

The system simulates a **modern fintech treasury platform** capable of managing bank accounts, tracking transactions, detecting anomalies, and generating AI-driven financial insights using LLMs.

This project demonstrates **real-world full-stack architecture patterns** including microservices, layered backend design, AI pipelines, and scalable frontend state management.

---

# System Architecture

```
                +---------------------+
                |     React UI        |
                |  (Redux + TS)     n |
                +----------+----------+
                           |
                           |
                           v
                +---------------------+
                |   Spring Boot API   |
                |  (Business Layer)   |
                +----------+----------+
                           |
                +----------+----------+
                |                     |
                v                     v
       +----------------+    +------------------+
       |  PostgreSQL DB |    |   AI Microservice |
       |  (Treasury Data)|   | FastAPI + LLMs    |
       +----------------+    +------------------+
                                      |
                                      v
                              +---------------+
                              | Vector DB     |
                              | (FAISS)       |
                              +---------------+
```

The platform separates responsibilities into **three independent services**:

| Layer      | Technology          | Responsibility             |
| ---------- | ------------------- | -------------------------- |
| Frontend   | React + TypeScript  | Treasury dashboards and UI |
| Backend    | Spring Boot         | APIs, business logic       |
| AI Service | FastAPI + LangChain | AI insights and analytics  |
| Database   | PostgreSQL          | Persistent financial data  |

---

# Tech Stack

## Frontend

* React
* TypeScript
* Redux Toolkit
* Axios
* Material UI
* Chart.js

## Backend

* Java 17
* Spring Boot
* Spring Data JPA
* Maven
* PostgreSQL JDBC

## AI Service

* Python
* FastAPI
* LangChain
* LangGraph
* FAISS Vector Database
* OpenAI / Llama Models

## Database

* PostgreSQL

## Dev Tools

* VSCode
* Maven
* Node.js
* Git
* Docker (optional)

---

# Project Structure

```
treasury-management-platform
│
├── frontend
│   ├── src
│   │   ├── app
│   │   │   └── store.ts
│   │   │
│   │   ├── components
│   │   │   ├── Dashboard
│   │   │   ├── Navbar
│   │   │   └── Charts
│   │   │
│   │   ├── features
│   │   │   ├── accounts
│   │   │   ├── transactions
│   │   │   ├── payments
│   │   │   └── ai
│   │   │
│   │   ├── pages
│   │   │   ├── DashboardPage
│   │   │   ├── TransactionsPage
│   │   │   └── AccountsPage
│   │   │
│   │   ├── services
│   │   │   └── api.ts
│   │   │
│   │   ├── App.tsx
│   │   └── index.tsx
│
├── backend
│   └── src/main/java/com/treasury
│       ├── controller
│       ├── service
│       ├── repository
│       ├── model
│       ├── config
│       └── TreasuryBackendApplication.java
│
├── ai-service
│   ├── agents
│   ├── services
│   ├── embeddings
│   ├── models
│   └── main.py
│
└── database
    └── schema.sql
```

---

# Core Features

## Treasury Management

* Bank account management
* Cash balance tracking
* Transaction recording
* Payment processing
* Cash position visibility

---

## Analytics Dashboard

* Treasury dashboard
* Account balance overview
* Transaction charts
* Cashflow analytics

---

## AI Capabilities

The AI microservice provides multiple intelligent financial analysis features.

### Treasury AI Chat

Users can ask questions like:

```
What is the current cash position?
```

or

```
Summarize recent transactions
```

---

### Transaction Anomaly Detection

AI analyzes transaction patterns and flags suspicious activity.

Example:

```
Transaction amount significantly higher than historical average
```

---

### Financial Document Summarization

AI can summarize financial documents such as:

* bank statements
* treasury reports
* transaction logs

---

# AI Pipeline

```
Financial Data
      |
      v
Transaction History
      |
      v
Embedding Generation
      |
      v
Vector Database (FAISS)
      |
      v
LangGraph AI Agents
      |
      v
Treasury Insights
```

AI agents perform:

| Agent         | Function               |
| ------------- | ---------------------- |
| Chat Agent    | Financial Q&A          |
| Anomaly Agent | Fraud detection        |
| Summary Agent | Document summarization |

---

# Backend APIs

## Accounts

```
GET /api/accounts
POST /api/accounts
```

Example response

```
[
 {
   "id":1,
   "accountNumber":"TREASURY-001",
   "bankName":"JP Morgan",
   "balance":2500000,
   "currency":"USD"
 }
]
```

---

## Transactions

```
GET /api/transactions
POST /api/transactions
```

---

## AI APIs

```
POST /api/ai/chat
POST /api/ai/anomaly
POST /api/ai/summarize
```

---

# Database Schema

Main tables

```
accounts
transactions
payments
cash_positions
```

Example table

```
accounts
--------
id
account_number
bank_name
balance
currency
```

---

# Setup Instructions

## Clone Repository

```
git clone https://github.com/your-username/treasury-management-platform.git
cd treasury-management-platform
```

---

# Database Setup

Install PostgreSQL.

Login to PostgreSQL

```
psql -U postgres
```

Create database

```
CREATE DATABASE treasury;
```

Run schema

```
psql -U postgres -d treasury -f database/schema.sql
```

---

# Run Backend

Navigate to backend

```
cd backend
```

Run Spring Boot

```
mvn spring-boot:run
```

Backend runs at

```
http://localhost:8080
```

---

# Run AI Service

Navigate to AI service

```
cd ai-service
```

Install dependencies

```
pip install -r requirements.txt
```

Run FastAPI server

```
uvicorn main:app --reload --port 5000
```

AI service runs at

```
http://localhost:5000
```

---

# Run Frontend

Navigate to frontend

```
cd frontend
```

Install dependencies

```
npm install
```

Start React server

```
npm start
```

Frontend runs at

```
http://localhost:3000
```

---

# Example Workflow

1. Create treasury account
2. Add transactions
3. View dashboard analytics
4. Ask AI questions
5. Detect anomalous transactions

---

# System Design Highlights

This project demonstrates key **enterprise architecture patterns**:

### Layered Backend Architecture

```
Controller
Service
Repository
Database
```

### Microservice Integration

```
React
   ↓
Spring Boot API
   ↓
AI Microservice
   ↓
Vector Database
```

### State Management

Redux Toolkit is used to manage:

* accounts
* transactions
* payments
* AI responses

---

# Future Enhancements

* Kafka streaming pipeline
* Real-time treasury monitoring
* ML fraud detection model
* Forecasting cashflow
* Docker deployment
* Kubernetes microservices

---

Dashboard

```
Accounts overview
Transaction analytics
AI insights panel
```

---

# Author

**Madhurita Munipelli**

Senior Full Stack Engineer

Experience

* React
* Java / Spring Boot
* Python AI
* Microservices
* Cloud architectures

