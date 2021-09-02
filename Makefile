up:
	docker-compose up

test:
	docker-compose -f docker-compose.yml up

install-deps:
	docker-compose -f docker-compose.yml run --rm app npm install
