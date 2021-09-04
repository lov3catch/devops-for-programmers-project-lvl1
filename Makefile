up:
	docker-compose build --no-cache
	docker-compose run --rm app npm install
	docker-compose up

test:
	docker-compose -f docker-compose.yml run --rm app npm install
	docker-compose -f docker-compose.yml run --rm app npm test

build:
	docker-compose -f docker-compose.yml build --no-cache app

push:
	docker-compose -f docker-compose.yml push app