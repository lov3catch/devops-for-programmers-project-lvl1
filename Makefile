up:
	docker-compose up

test:
	docker-compose -f docker-compose.yml build --no-cache
	docker-compose -f docker-compose.yml run --rm app npm test

install-deps:
	docker-compose -f docker-compose.yml run --rm app npm install

build:
	docker-compose -f docker-compose.yml build app

push:
	docker-compose -f docker-compose.yml push app