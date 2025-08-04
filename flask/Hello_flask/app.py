from flask import Flask

# Create Flask application instance
app = Flask(__name__)

# Route for the home page


@app.route('/')
def home():
    return '''
    <h1>Welcome to My Simple Flask App!</h1>
    <p>This is a basic Flask application for teaching purposes.</p>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/user/John">User Profile (John)</a></li>
    </ul>
    '''

# Route for the about page


@app.route('/about')
def about():
    return '''
    <h1>About This App</h1>
    <p>This is a simple Flask web application created for educational purposes.</p>
    <p>Flask is a lightweight web framework for Python.</p>
    <a href="/">Back to Home</a>
    '''

# Route for the contact page


@app.route('/contact')
def contact():
    return '''
    <h1>Contact Us</h1>
    <p>Email: example@email.com</p>
    <p>Phone: +1-234-567-8900</p>
    <a href="/">Back to Home</a>
    '''

# Route with URL parameter

#                  John


@app.route('/user/<name>')
def user_profile(name):
    return f'''
    <h1>User Profile</h1>
    <p>Welcome, {name}!</p>
    <p>This page demonstrates URL parameters in Flask.</p>
    <a href="/">Back to Home</a>
    '''

# Route that accepts both GET and POST methods


@app.route('/hello', methods=['GET', 'POST'])
def hello():
    return '''
    <h1>Hello World!</h1>
    <p>This route accepts both GET and POST requests.</p>
    <a href="/">Back to Home</a>
    '''

# Error handler for 404 errors


@app.errorhandler(404)
def page_not_found(error):
    return '''
    <h1>Page Not Found (404)</h1>
    <p>The page you are looking for does not exist.</p>
    <a href="/">Back to Home</a>
    ''', 404


# Run the application
if __name__ == '__main__':
    # Debug mode enabled for development
    app.run(debug=True, host='127.0.0.1', port=5000)
