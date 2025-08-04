#!/usr/bin/env python3
"""
Simple test script for FoodReview API
This script tests the basic functionality of the API endpoints
"""

import requests
import json
import time

# Configuration
BASE_URL = "http://localhost:8080"
TEST_USER = {
    "username": "test_user",
    "email": "test@example.com",
    "password": "testpassword123"
}


def print_response(response, operation):
    """Print formatted response"""
    print(f"\n{'='*50}")
    print(f"Operation: {operation}")
    print(f"Status Code: {response.status_code}")
    print(f"Response: {json.dumps(response.json(), indent=2)}")
    print('='*50)


def test_api():
    """Test all API endpoints"""
    print("🧩 FoodReview API Test Script")
    print("Testing API functionality...")

    session = requests.Session()
    api_key = None

    try:
        # Test 1: Register user
        print("\n1. Testing user registration...")
        response = session.post(f"{BASE_URL}/auth/register", json=TEST_USER)
        print_response(response, "Register User")

        if response.status_code != 201:
            print("❌ Registration failed!")
            return False

        # Test 2: Login user
        print("\n2. Testing user login...")
        login_data = {"email": TEST_USER["email"],
                      "password": TEST_USER["password"]}
        response = session.post(f"{BASE_URL}/auth/login", json=login_data)
        print_response(response, "Login User")

        if response.status_code != 200:
            print("❌ Login failed!")
            return False

        api_key = response.json().get("X-API-Key")
        if not api_key:
            print("❌ No API key received!")
            return False

        # Set headers for authenticated requests
        session.headers.update({"X-API-Key": api_key})

        # Test 3: Create restaurant
        print("\n3. Testing restaurant creation...")
        restaurant_data = {
            "name": "Test Restaurant",
            "description": "A test restaurant for API testing"
        }
        response = session.post(
            f"{BASE_URL}/restaurants", json=restaurant_data)
        print_response(response, "Create Restaurant")

        if response.status_code != 201:
            print("❌ Restaurant creation failed!")
            return False

        restaurant_id = response.json().get("id")

        # Test 4: Get all restaurants
        print("\n4. Testing get all restaurants...")
        response = session.get(f"{BASE_URL}/restaurants")
        print_response(response, "Get All Restaurants")

        if response.status_code != 200:
            print("❌ Get restaurants failed!")
            return False

        # Test 5: Create review
        print("\n5. Testing review creation...")
        review_data = {
            "rating": 5,
            "comment": "Excellent food and service! Highly recommend."
        }
        response = session.post(
            f"{BASE_URL}/restaurants/{restaurant_id}/reviews", json=review_data)
        print_response(response, "Create Review")

        if response.status_code != 201:
            print("❌ Review creation failed!")
            return False

        # Test 6: Get restaurant reviews
        print("\n6. Testing get restaurant reviews...")
        response = session.get(
            f"{BASE_URL}/restaurants/{restaurant_id}/reviews")
        print_response(response, "Get Restaurant Reviews")

        if response.status_code != 200:
            print("❌ Get reviews failed!")
            return False

        print("\n✅ All tests passed successfully!")
        return True

    except requests.exceptions.ConnectionError:
        print("❌ Could not connect to the API. Make sure the server is running on http://localhost:8080")
        return False
    except Exception as e:
        print(f"❌ Test failed with error: {str(e)}")
        return False


def test_error_cases():
    """Test error handling"""
    print("\n\n🔍 Testing Error Cases...")

    try:
        # Test unauthorized access
        print("\n1. Testing unauthorized access...")
        response = requests.get(f"{BASE_URL}/restaurants")
        print_response(response, "Unauthorized Access")

        # Test invalid login
        print("\n2. Testing invalid login...")
        invalid_data = {"email": "invalid@example.com",
                        "password": "wrongpassword"}
        response = requests.post(f"{BASE_URL}/auth/login", json=invalid_data)
        print_response(response, "Invalid Login")

        # Test invalid restaurant creation
        print("\n3. Testing invalid restaurant creation...")
        headers = {"X-API-Key": "invalid_key"}
        restaurant_data = {"name": "Test Restaurant"}
        response = requests.post(
            f"{BASE_URL}/restaurants", json=restaurant_data, headers=headers)
        print_response(response, "Invalid Restaurant Creation")

        print("\n✅ Error case testing completed!")

    except Exception as e:
        print(f"❌ Error case testing failed: {str(e)}")


if __name__ == "__main__":
    print("Starting API tests...")
    print("Make sure the FoodReview API is running on http://localhost:8080")

    # Wait a moment for user to read
    time.sleep(2)

    # Run main tests
    success = test_api()

    # Run error case tests
    test_error_cases()

    if success:
        print("\n🎉 API is working correctly!")
    else:
        print("\n❌ Some tests failed. Check the API server and database connection.")
