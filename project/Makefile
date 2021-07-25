install-deps:
	docker-compose run app npm install

test:
	npx jest tests/root.test.js

d-build:
	docker build . -t hxlt-lvl1

d-test:
	docker run -itv ${PWD}:/app hxlt-lvl1

dc-restart:
	docker-compose down
	docker-compose build
	docker-compose up --abort-on-container-exit

dc-test:
	make docker-build
	docker run -itv ${PWD}:/app hxlt-lvl1
