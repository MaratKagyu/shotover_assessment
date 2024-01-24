from flask import Flask
from flask import request
from services.dog_api_service import DogApiService

app = Flask(__name__)

@app.route("/api/data", methods=["GET"])
def show_dogs():
    count = request.args.get("count", "5")
    dog_api = DogApiService()

    return {
        "success": "success",
        "message": dog_api.load_dog_images(count)
    }

