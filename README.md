1. Install Protocol Buffer: https://github.com/protocolbuffers/protobuf/releases or brew install protobuf

# What, Why, How

This repository is an example of Vue and Symfony gRPC communication as an application.

# Admin
```bash
protoc --php_out=server/src --php-grpc_out=server/src contract/*.proto
```

# APP / Server
```bash
grpcurl -plaintext -d '{"msg": "Hello RPC"}' -proto "service.proto" localhost:50051 service.Echo/Ping
```
