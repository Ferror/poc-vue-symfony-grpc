FROM ubuntu:20.04
ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y \
    curl \
    make \
    protobuf-compiler \
    supervisor

RUN apt-get clean && apt-get autoclean

COPY .docker/supervisor.conf        /etc/supervisor/conf.d/supervisor.conf
COPY .docker/protoc-gen-grpc-web    /usr/bin/protoc-gen-grpc-web
COPY .docker/protoc-gen-php-grpc    /usr/bin/protoc-gen-php-grpc
COPY .docker/grpcurl                /usr/bin/grpcurl

RUN chmod +x /usr/bin/protoc-gen-grpc-web
RUN chmod +x /usr/bin/protoc-gen-php-grpc
RUN chmod +x /usr/bin/grpcurl

WORKDIR /app

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/supervisord.conf"]
