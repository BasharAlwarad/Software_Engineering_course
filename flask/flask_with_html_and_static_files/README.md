https://learn.wbscodingschool.com/courses/software-engineering/lessons/web-development-with-flask/topic/%f0%9f%93%9a-minimal-flask-setup/

mistake in the code example of decorators:

```py
@only_during_work_hours
def send_report(msg):
    print("📤 Report sent to the team!")
# it should be
@only_during_work_hours
def send_report(msg):
    print(msg)
```

# Simple Flask App Tutorial

This is a basic Flask web application created for teaching purposes.

## Setup Instructions

### 0. create a Virtual Environment

```bash
python3 -m venv venv
```

### 1. Activate the Virtual Environment

On Windows (Git Bash):

```bash
source venv/Scripts/activate
```

On Windows (Command Prompt):

```cmd
venv\Scripts\activate
```

On macOS/Linux:

```bash
source venv/bin/activate
```

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

### 3. Run the Application

```bash
python app.py
```

The application will be available at: http://127.0.0.1:5000

## Available Routes

- `/` - Home page with navigation links
- `/about` - About page
- `/contact` - Contact information
- `/user/<name>` - User profile page (replace `<name>` with any name)
- `/hello` - Simple hello page

## Key Flask Concepts Demonstrated

1. **Creating a Flask App**: `app = Flask(__name__)`
2. **Routing**: Using `@app.route()` decorator
3. **URL Parameters**: `/user/<name>` captures URL segments
4. **HTTP Methods**: Accepting GET and POST requests
5. **Error Handling**: Custom 404 error page
6. **Debug Mode**: Enables auto-reload during development

## Deactivating the Virtual Environment

When you're done working, deactivate the virtual environment:

```bash
deactivate
```

## Project Structure

```
Hello_flask/
├── venv/                 # Virtual environment
├── app.py               # Main Flask application
├── requirements.txt     # Python dependencies
└── README.md           # This file
```

```

```
