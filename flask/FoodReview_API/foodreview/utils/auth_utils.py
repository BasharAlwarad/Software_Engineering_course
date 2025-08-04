import base64
from functools import wraps
from flask import request, jsonify, g
from ..db import get_connection


def require_auth(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        api_key = request.headers.get('X-API-Key')
        if not api_key:
            return jsonify({'error': 'You need to log in'}), 401

        try:
            # Decode the Base64-encoded user ID
            decoded_id = base64.b64decode(api_key).decode()
            user_id = int(decoded_id)
        except Exception:
            return jsonify({'error': 'Invalid X-API-Key'}), 401

        try:
            # Check if user exists in DB
            conn = get_connection()
            cur = conn.cursor()
            cur.execute(
                "SELECT id, username FROM users WHERE id = %s", (user_id,))
            user = cur.fetchone()
            cur.close()
            conn.close()

            if not user:
                return jsonify({'error': 'Invalid user'}), 401

            # Store user info in Flask's global context (g)
            g.user_id = user[0]
            g.username = user[1]
            return func(*args, **kwargs)
        except Exception as e:
            return jsonify({'error': 'Server error', 'details': str(e)}), 500
    return wrapper
