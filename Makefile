docker-up:
	docker compose up -d

docker-down:
	docker compose down

clean:
	rm -rf .next/
	rm -rf out/