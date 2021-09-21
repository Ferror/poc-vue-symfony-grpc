run:
	exec /usr/bin/supervisord -c /etc/supervisor/supervisord.conf

ci:
	composer check

client:
	protoc --js_out=import_style=commonjs:web/src --grpc-web_out=import_style=commonjs,mode=grpcwebtext:web/src contract/*.proto

server:
	protoc --php_out=server/src --php-grpc_out=server/src contract/*.proto

ping:
	grpcurl -plaintext -d '{"msg": "Hello RPC"}' -proto "service.proto" localhost:50051 service.Echo/Ping
