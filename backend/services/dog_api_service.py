import json
from urllib.request import urlopen

class DogApiService:
    def __get_api_url(self, count):
        return f"https://dog.ceo/api/breeds/image/random/{count}"

    def load_dog_images(self, count):
        with urlopen(self.__get_api_url(count)) as api_response:
            data = json.loads(api_response.read().decode())

        return data.get('message')
