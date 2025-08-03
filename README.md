# Her's - Breast Cancer Early Detection and Awareness

<div align="center">
  <img src="https://img.shields.io/badge/Status-Active-success" alt="Project Status">
  <img src="https://img.shields.io/badge/License-MIT-blue" alt="License">
  <img src="https://img.shields.io/badge/Python-3.8+-blue" alt="Python">
  <img src="https://img.shields.io/badge/Next.js-13+-black" alt="Next.js">
</div>

A comprehensive full-stack application designed to promote breast cancer awareness, early detection, and personalized risk assessment. The platform leverages advanced machine learning models, AI-powered chatbots, and interactive quizzes to provide users with valuable health insights and support.

## ✨ Features

### 🤖 AI-Powered Health Assistant
- Natural language processing for health-related queries
- Provides reliable, evidence-based medical information
- 24/7 availability for health concerns and guidance

### 📋 Comprehensive Risk Assessment
- Personalized breast cancer risk evaluation
- Considers genetic, lifestyle, and medical history factors
- Provides actionable insights and recommendations

### 🔍 Advanced Scan Analysis
- AI-assisted analysis of medical images (mammograms/ultrasound)
- Quick and accurate preliminary assessments
- Secure storage of scan results with privacy controls

### 🌐 User-Friendly Dashboard
- Intuitive interface for easy navigation
- Secure user authentication and data management
- Personalized health insights and history

## 🛠️ Tech Stack

### Backend
- **Framework**: Python 3.8+, Flask
- **Database**: SQLite (with SQLAlchemy ORM)
- **AI/ML**: 
  - Roboflow API for image analysis
  - Google Gemini API for natural language processing
  - Groq LLM API for fast inference
- **API**: RESTful architecture with JWT authentication

### Frontend  
- **Framework**: Next.js 13+ with React 18+
- **Styling**: Tailwind CSS with custom theming
- **Icons**: Lucide React
- **State Management**: React Context API
- **Form Handling**: React Hook Form with Yup validation

### Dev Tools
- Git for version control
- Prettier & ESLint for code formatting
- Pytest for backend testing
- GitHub Actions for CI/CD

## 🚀 Getting Started

### Prerequisites
- Python 3.8 or higher
- Node.js 16+ and npm 8+
- API keys for Roboflow, Google Gemini, and Groq

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/breast-care.git
   cd breast-care
   ```

2. **Backend Setup**
   ```bash
   # Create and activate virtual environment
   python -m venv venv
   source venv/bin/activate  # On Windows: .\venv\Scripts\activate
   
   # Install dependencies
   pip install -r requirements.txt
   
   # Set up environment variables
   cp .env.example .env
   # Edit .env with your API keys
   
   # Initialize database
   python init_db.py
   
   # Start the backend server
   python app.py
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   
   # Install dependencies
   npm install
   
   # Start development server
   npm run dev
   ```

4. **Access the Application**
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:5000`

## 📚 API Documentation

### Authentication
All endpoints except `/api/auth/login` and `/api/auth/register` require a valid JWT token in the `Authorization` header.

### Available Endpoints

#### Chat API
- `POST /api/chat` - Interact with the AI health assistant
  ```json
  {
    "message": "What are the early signs of breast cancer?",
    "conversation_id": "optional_conversation_id"
  }
  ```

#### Scan Analysis
- `POST /api/check_scan` - Submit medical scans for analysis
  ```json
  {
    "image": "base64_encoded_image",
    "scan_type": "mammogram|ultrasound"
  }
  ```

#### Risk Assessment
- `POST /api/risk-assessment` - Process risk assessment quiz
  ```json
  {
    "age": 35,
    "family_history": true,
    "bmi": 24.5,
    // ... other risk factors
  }
  ```

#### User Management
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/user/profile` - Get user profile

## 🧪 Testing

### Backend Tests
```bash
# Run all tests
pytest

# Run specific test file
pytest tests/test_routes.py

# Generate coverage report
pytest --cov=app tests/
```

### Frontend Tests
```bash
cd frontend
npm test
```

## 🎨 Design System

### Color Palette
- **Primary**: `#ec4899` (Pink 500)
- **Secondary**: `#be185d` (Pink 700)
- **Background**: `#fdf2f8` (Pink 50)
- **Text**: `#1f2937` (Gray 900)
- **Success**: `#10b981` (Green 500)
- **Warning**: `#f59e0b` (Amber 500)
- **Error**: `#ef4444` (Red 500)

### Typography
- **Primary Font**: Inter (Sans-serif)
- **Code Font**: Fira Code (Monospace)
- **Base Size**: 16px
- **Scale**: 1.25 (Major Third)

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please read our [Contributing Guidelines](CONTRIBUTING.md) for more details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Medical professionals who provided guidance
- Open source contributors
- Support from the developer community

## 📧 Contact

For questions or support, please contact [anvragsingh@gmail.com](mailto:anvragsingh@gmail.com)

---

<div align="center">
  Made with ❤️ to support breast cancer awareness and early detection through innovative technology.
</div>
