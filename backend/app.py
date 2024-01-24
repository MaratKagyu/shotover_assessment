import os
from flask import Flask
from flask import request
from flask_cors import CORS
from dotenv import load_dotenv
from services.dog_api_service import DogApiService, DogApiException, DogApiInvalidParamsException

load_dotenv()
app = Flask(__name__)
CORS(app, origins=[os.environ.get('CORS_ALLOW_ORIGINS', '')])


@app.route("/api/data", methods=["GET"])
def show_dogs():
    count = request.args.get("count", "5")
    dog_api = DogApiService()

    try:
        return {
            "message": dog_api.load_dog_images(count=count),
            "status": "success"
        }

    except DogApiInvalidParamsException as exception:
        return {
            "status": "error",
            "message": str(exception)
        }, 400

    except DogApiException as exception:
        return {
            "status": "error",
            "message": str(exception)
        }, 503


@app.errorhandler(404)
def not_found(error):
    return {
        "status": "error",
        "message": "Not Found"
    }, 404


@app.errorhandler(405)
def not_allowed(error):
    return {
        "status": "error",
        "message": "Method Not Allowed"
    }, 405
