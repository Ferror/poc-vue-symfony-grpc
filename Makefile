ci:
	composer check
client:
	protoc --js_out=client/src/proto client/proto/Product.proto
server:
	protoc --php_out=server/src --php-grpc_out=server/src proto/*

