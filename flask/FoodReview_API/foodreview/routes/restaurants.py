from flask import Blueprint, request, jsonify, g
from ..utils.auth_utils import require_auth
from ..db import get_connection

restaurants_bp = Blueprint('restaurants', __name__, url_prefix='/restaurants')


@restaurants_bp.get('/')
@require_auth
def get_restaurants():
    try:
        conn = get_connection()
        cur = conn.cursor()
        # Single query with LEFT JOIN and GROUP BY
        cur.execute("""
            SELECT 
                r.id,
                r.name,
                r.description,
                r.owner_id,
                COUNT(rv.id) AS total_reviews,
                COALESCE(ROUND(AVG(rv.rating)::numeric, 2), 0) AS average_rating
            FROM restaurants r
            LEFT JOIN reviews rv ON rv.restaurant_id = r.id
            GROUP BY r.id, r.name, r.description, r.owner_id
        """)
        rows = cur.fetchall()
        restaurants = []
        base_url = request.host_url.rstrip('/')
        for row in rows:
            restaurant_id = row[0]
            restaurants.append({
                'id': restaurant_id,
                'name': row[1],
                'description': row[2],
                'owner_id': row[3],
                'total_reviews': row[4],
                'average_rating': float(row[5]),
                'reviews_url': f"{base_url}/restaurants/{restaurant_id}/reviews"
            })
            restaurants.sort(key=lambda x: x['id'])
        cur.close()
        conn.close()
        return jsonify(restaurants), 200
    except Exception as e:
        return jsonify({'error': 'Server error', 'details': str(e)}), 500


@restaurants_bp.post('/')
@require_auth
def create():
    try:
        data = request.get_json()
        name = data.get('name')
        description = data.get('description', '')

        if not name:
            return jsonify({'error': 'Restaurant name is required'}), 400

        user_id = g.get('user_id')
        conn = get_connection()
        cur = conn.cursor()

        # Insert the restaurant into the DB
        cur.execute(
            "INSERT INTO restaurants (name, description, owner_id) VALUES (%s, %s, %s) RETURNING id",
            (name, description, user_id)
        )
        restaurant_id = cur.fetchone()[0]
        conn.commit()
        cur.close()
        conn.close()

        return jsonify({
            'id': restaurant_id,
            'name': name,
            'description': description,
            'owner_id': user_id,
        }), 201
    except Exception as e:
        return jsonify({'error': 'Server error', 'details': str(e)}), 500


@restaurants_bp.post('/<int:restaurant_id>/reviews')
@require_auth
def create_review(restaurant_id):
    try:
        data = request.get_json()
        rating = data.get('rating')
        comment = data.get('comment', '')

        if not rating or not (1 <= int(rating) <= 5):
            return jsonify({'error': 'Rating must be an integer between 1 and 5'}), 400

        user_id = g.get('user_id')
        conn = get_connection()
        cur = conn.cursor()

        # Optional: check if restaurant exists before inserting review
        cur.execute("SELECT id FROM restaurants WHERE id = %s",
                    (restaurant_id,))
        restaurant = cur.fetchone()
        if not restaurant:
            return jsonify({'error': 'Restaurant not found'}), 404

        # Insert the review
        cur.execute(
            """
            INSERT INTO reviews (user_id, restaurant_id, rating, comment)
            VALUES (%s, %s, %s, %s)
            RETURNING id
            """,
            (user_id, restaurant_id, rating, comment)
        )
        review_id = cur.fetchone()[0]
        conn.commit()
        cur.close()
        conn.close()

        return jsonify({
            'id': review_id,
            'restaurant_id': restaurant_id,
            'user_id': user_id,
            'rating': rating,
            'comment': comment
        }), 201
    except Exception as e:
        return jsonify({'error': 'Server error', 'details': str(e)}), 500


@restaurants_bp.get('/<int:restaurant_id>/reviews')
@require_auth
def get_reviews(restaurant_id):
    try:
        conn = get_connection()
        cur = conn.cursor()

        # Optional: check if restaurant exists
        cur.execute(
            "SELECT id, name FROM restaurants WHERE id = %s", (restaurant_id,))
        restaurant = cur.fetchone()
        if not restaurant:
            return jsonify({'error': 'Restaurant not found'}), 404

        # Fetch reviews and join with users table to get reviewer names
        cur.execute("""
            SELECT r.id, r.rating, r.comment, u.username
            FROM reviews r
            JOIN users u ON r.user_id = u.id
            WHERE r.restaurant_id = %s
            ORDER BY r.id DESC
        """, (restaurant_id,))
        rows = cur.fetchall()
        cur.close()
        conn.close()

        reviews = []
        for row in rows:
            reviews.append({
                'review_id': row[0],
                'rating': row[1],
                'comment': row[2],
                'reviewed_by': row[3]
            })

        return jsonify({
            'restaurant_id': restaurant[0],
            'restaurant_name': restaurant[1],
            'total_reviews': len(reviews),
            'average_rating': sum([r['rating'] for r in reviews]) / len(reviews) if reviews else 0,
            'reviews': reviews
        }), 200
    except Exception as e:
        return jsonify({'error': 'Server error', 'details': str(e)}), 500
