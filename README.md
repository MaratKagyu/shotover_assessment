A small test project, which shows the requested amount of random dogs.

## Stack

- Python 3.11, Flask 3
- NodeJS 18, React (create-react-app)
- [Dog API](https://dpg.ceo)

## Run app using docker-compose

Please make sure ports 8080 and 3000 are free.

```bash
docker-compose up
```

The project will be available at:
- React app - http://localhost:3000 
- Flash app - http://localhost:8080  
 
To change the ports see `docker-compose.yml`


## Run app without virtualisation
### Backend: 
Install dependencies

```bash
cd ./backend
pip3 install wheel
pip3 install -r requirements.txt
```

Setup app environment
```bash
cp .env.dist .env
```

Run the app
```bash
flask run --port 8080
```

The app will be available at http://localhost:8080 
(it'll return HTTP 404, Not Found)

### Frontend
Install dependencies
```bash
cd ./frontend
npm ci
```

Setup app environment
```bash
cp .env.dist .env.local
```

Run the app
```bash
npm start
```

The app will be available at http://localhost:3000
