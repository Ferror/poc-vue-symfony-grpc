run:
	exec /usr/bin/supervisord -c /etc/supervisor/supervisord.conf
deploy:
	yarn install
	yarn build
	exec /usr/bin/supervisord -c /etc/supervisor/supervisord.conf
