ci:
	composer check

client:
	protoc --js_out=web/src/proto contract/*.proto

server:
	protoc --php_out=server/src --php-grpc_out=server/src contract/*.proto
