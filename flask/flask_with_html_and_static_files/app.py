from flask import Flask, render_template, request

# Create Flask application instance
app = Flask(__name__)

# Route for the home page


@app.route('/')
def home():
    return render_template('home.html')

# Route for the about page


@app.route('/about')
def about():
    return render_template('about.html')

# Route for the contact page


@app.route('/contact')
def contact():
    return render_template('contact.html')

# Route with URL parameter

#                  John


@app.route('/user/<name>')
def user_profile(name):
    return render_template('user_profile.html', name=name)

# Route that accepts both GET and POST methods


@app.route('/hello', methods=['GET', 'POST'])
def hello():
    if request.method == 'POST':
        # Handle POST request data if needed
        demo_input = request.form.get('demo-input', '')
        # For now, we'll just render the same template
        # In a real app, you might process the data differently
    return render_template('hello.html')

# Error handler for 404 errors


@app.errorhandler(404)
def page_not_found(error):
    return render_template('404.html'), 404


# Run the application
if __name__ == '__main__':
    # Debug mode enabled for development
    app.run(debug=True, host='127.0.0.1', port=5000)
