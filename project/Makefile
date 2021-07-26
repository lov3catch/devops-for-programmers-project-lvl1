
install-deps:
	docker-compose run app npm install

test:
	npx jest tests/root.test.js

d-build:
	docker build . -t hxlt-lvl1

d-push:
	make d-build
	docker tag hxlt-project lov3catch/hxlt-project
	docker push lov3catch/hxlt-project

d-test:
	docker run -itv ${PWD}:/app hxlt-lvl1

dc-restart:
	docker-compose down
	docker-compose build
	docker-compose up --abort-on-container-exit

dc-test:
	make docker-build
	docker run -itv ${PWD}:/app hxlt-lvl1
