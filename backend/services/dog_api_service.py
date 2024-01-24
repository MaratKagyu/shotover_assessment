import json
import re
from urllib.request import urlopen


class DogApiException(Exception):
    pass


class DogApiInvalidParamsException(Exception):
    pass


class DogApiService:
    def __get_api_url(self, count):
        # Let's respect free Dog API service, and limit max amount of dogs to 100
        if (not count.isnumeric()) or (int(count) < 1) or (int(count) > 100):
            raise DogApiInvalidParamsException("Count must be an integer greater than 0, but less than 101")

        return f"https://dog.ceo/api/breeds/image/random/{count}"

    def __extract_breed(self, image_url):
        # Example: "https://images.dog.ceo/breeds/sheepdog-english/n02105641_4577.jpg"
        return re.search(
            pattern="images.dog.ceo/breeds/([^/]+)",
            string=image_url
        ).group(1)

    def load_dog_images(self, count):
        # Load data from Dog API
        api_url = self.__get_api_url(count)
        try:
            with urlopen(api_url) as api_response:
                data = json.loads(api_response.read().decode())
        except Exception:
            raise DogApiException("Dog API is temporary unavailable")

        dog_image_list = data.get('message')
        if not isinstance(dog_image_list, list):
            raise DogApiException("Unexpected response format from Dog API")

        # Extract breed
        return list(map(
            lambda image: {
                # Even though it was told that JS must extract the breed,
                # I decided to do it here, just because it makes more sense to leave it to the Backend
                "breed": self.__extract_breed(image),
                "image": image,
            },
            dog_image_list
        ))
