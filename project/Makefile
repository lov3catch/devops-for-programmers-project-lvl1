install-deps:
	docker-compose run app npm install

test:
	npx jest tests/root.test.js

docker-build:
	docker build . -t hxlt-project

docker-tag:
	docker tag hxlt-project lov3catch/hxlt-project

docker-push:
	docker push lov3catch/hxlt-project

ci:
	test
