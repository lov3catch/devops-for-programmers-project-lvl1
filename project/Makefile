include ci.mk
include docker.mk

install-deps:
	docker-compose -f docker-compose.yml run app npm install
	docker-compose -f docker-compose.yml run app npm install pg --save


