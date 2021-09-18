run:
	composer install
	exec /usr/bin/supervisord -c /etc/supervisor/supervisord.conf

server:
	protoc --php_out=src --php-grpc_out=src proto/*

serve:
	./bin/rr serve -c .rr.yaml
