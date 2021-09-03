up:
	docker-compose up

install-deps:
	docker-compose -f docker-compose.yml run --rm app npm install

test:
	make install-deps
	docker-compose -f docker-compose.yml run --rm app npm test

build:
	docker-compose -f docker-compose.yml build app

push:
	docker-compose -f docker-compose.yml push app