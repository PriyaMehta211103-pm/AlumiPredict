# AlumiPredict

## Overview

AlumiPredict is an AI-powered web application designed to predict key aluminium material properties using machine learning models. The platform combines a React-based frontend with a Flask backend and trained ML models to provide fast and accurate predictions based on manufacturing and material input parameters.

The project aims to support data-driven decision-making in aluminium manufacturing by reducing manual analysis and enabling rapid property estimation.

---

## Features

* Predict Ultimate Tensile Strength (UTS)
* Predict Electrical Conductivity
* Predict Elongation
* Interactive and user-friendly web interface
* Flask REST API backend
* Machine Learning based prediction system
* Real-time prediction results
* Modular architecture for future model expansion

---

## Technology Stack

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3

### Backend

* Flask
* Python

### Machine Learning

* Scikit-learn
* NumPy
* Pandas
* Pickle (.pkl models)

---

## Project Structure

```text
AlumiPredict/
│
├── my-react-app/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── flask_backend/
│   ├── app.py
│   ├── models/
│   └── requirements.txt
│
├── models/
│   ├── model_uts.pkl
│   ├── model_conductivity.pkl
│   ├── model_elongation.pkl
│   └── scaler.pkl
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/PriyaMehta211103-pm/AlumiPredict.git
cd AlumiPredict
```

### Backend Setup

```bash
cd flask_backend
pip install -r requirements.txt
python app.py
```

### Frontend Setup

```bash
cd my-react-app
npm install
npm start
```

---

## Usage

1. Launch the Flask backend.
2. Start the React frontend.
3. Enter the required material and process parameters.
4. Submit the form.
5. View the predicted aluminium properties.

---

## Machine Learning Models

The system uses trained machine learning models stored as `.pkl` files:

* UTS Prediction Model
* Conductivity Prediction Model
* Elongation Prediction Model
* Feature Scaling Model

These models are loaded by the Flask backend and used to generate predictions from user-provided inputs.

---

## Future Enhancements

* Model performance monitoring
* Additional aluminium property predictions
* Advanced analytics dashboard
* Cloud deployment
* User authentication
* Data visualization and reporting

---

## Author

**Priya Mehta**

B.Tech Computer Science & Engineering

Skilled in Python, Machine Learning, Full-Stack Development, and AI-powered solutions.

---

## License

This project is intended for educational, research, and demonstration purposes.
