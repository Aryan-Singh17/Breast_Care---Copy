# Her's - Breast Cancer Early Detection and Awareness

A comprehensive full-stack application designed to promote breast cancer awareness, early detection, and personalized risk assessment. The platform leverages advanced machine learning models, AI-powered chatbots, and interactive quizzes.

## Features

- 🤖 **AI Chatbot** - Intelligent digital health assistant providing medically reliable answers
- 📋 **Risk Assessment Quiz** - Personalized risk evaluation based on health factors
- 🔍 **Scan Assessment** - AI-assisted analysis of mammogram/ultrasound images 
- 🔒 **Secure Data Management** - Safe storage of scan results and user information
- 🌐 **RESTful API** - Flask backend handling all core functionalities

## Tech Stack

### Backend
- Python
- Flask
- SQLite
- Roboflow API
- Google Gemini API
- Groq LLM API

### Frontend  
- Next.js
- React
- Tailwind CSS
- Lucide React

## Installation

### Backend Setup
```bash
# Install Python dependencies
pip install -r requirements.txt

# Set required environment variables
export ROBOFLOW=<your_key>
export GROQ_API_KEY=<your_key>
export GEMINI_API_KEY=<your_key>

# Start Flask server
python app.py
```

### Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

## API Endpoints

- `POST /api/chat` - Interact with AI chatbot
- `POST /api/check_scan` - Submit scans for analysis
- `POST /api/risk-assessment` - Process risk assessment quiz

## Testing

```bash
# Run test suite
python run_tests.py

# Or using pytest
pytest tests/
```

## Design

- Primary color: #ec4899 (pink)
- Secondary: #be185d
- Light accent: #fdf2f8
- Mobile-first responsive design
- Accessible interface with ARIA support

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

*Dedicated to supporting breast cancer awareness and early detection through innovative technology.*
