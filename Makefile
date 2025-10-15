include .env

docker-build:
	docker build -t $(DOCKER_COMPOSE_IMAGE_NAME) .

docker-up:
	docker-compose up -d

docker-down:
	docker-compose down

clean:
	rm -rf .next/
	rm -rf out/