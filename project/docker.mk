docker-up:
	docker-compose build
	docker-compose up --abort-on-container-exit

docker-restart:
	docker-compose down
	make docker-up

docker-push:
	docker build . -t hxlt-lvl1
	docker tag hxlt-lvl1 lov3catch/hxlt-lvl1
	docker push lov3catch/hxlt-lvl1

docker-test:
	docker build . -t hxlt-lvl1
	docker run -itv ${PWD}:/app hxlt-lvl1
