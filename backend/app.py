from flask import Flask
from flask import request
from services.dog_api_service import DogApiService, DogApiException, DogApiInvalidParamsException

app = Flask(__name__)


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
