# nest-mongoose-sandbox

A dedicated **experimental playground** for mastering server-side development using **NestJS** and **MongoDB** (via Mongoose). This repository serves as a safe environment to learn, test patterns, write CRUD operations, and experiment with NoSQL database design.

## 🚀 Purpose & Learning Goals
The main goal of this sandbox is to practice and build a rock-solid understanding of:
*   **NestJS Architecture:** Modules, Controllers, Services, and Dependency Injection.
*   **Database Integration:** Connecting NestJS with MongoDB using the official `@nestjs/mongoose` package.
*   **Data Modeling:** Defining Typegoose-style Mongoose schemas, subdocuments, and relationships.
*   **API Design:** Implementing clean RESTful endpoints with validation (`class-validator`) and exception handling.

## 🛠️ Tech Stack
*   **Framework:** NestJS (TypeScript)
*   **Database:** MongoDB
*   **ODM:** Mongoose

## ⚙️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com
cd nest-mongoose-sandbox
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory and add your MongoDB connection string:
```env
MONGODB_URI=mongodb://localhost:27017/sandbox_db
PORT=3000
```

### 4. Run the application
```bash
# development mode
npm run start

# watch mode (auto-reload on save)
npm run start:dev

# production mode
npm run start:prod
```

## 📂 Project Structure Sketch
```text
src/
├── app.module.ts        # Main application module
├── main.ts              # Application entry point
└── modules/             
```

## 📝 License
This project is open-source and available under the [MIT License](LICENSE).
