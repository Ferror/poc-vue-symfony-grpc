/**
 * @fileoverview gRPC-Web generated client stub for package
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.package = require('./Product_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.package.ProductServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.package.ProductServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.package.Nothing,
 *   !proto.package.Product>}
 */
const methodDescriptor_ProductService_create = new grpc.web.MethodDescriptor(
  '/package.ProductService/create',
  grpc.web.MethodType.UNARY,
  proto.package.Nothing,
  proto.package.Product,
  /**
   * @param {!proto.package.Nothing} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.package.Product.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.package.Nothing,
 *   !proto.package.Product>}
 */
const methodInfo_ProductService_create = new grpc.web.AbstractClientBase.MethodInfo(
  proto.package.Product,
  /**
   * @param {!proto.package.Nothing} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.package.Product.deserializeBinary
);


/**
 * @param {!proto.package.Nothing} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.package.Product)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.package.Product>|undefined}
 *     The XHR Node Readable Stream
 */
proto.package.ProductServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/package.ProductService/create',
      request,
      metadata || {},
      methodDescriptor_ProductService_create,
      callback);
};


/**
 * @param {!proto.package.Nothing} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.package.Product>}
 *     Promise that resolves to the response
 */
proto.package.ProductServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/package.ProductService/create',
      request,
      metadata || {},
      methodDescriptor_ProductService_create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.package.Nothing,
 *   !proto.package.ProductCollection>}
 */
const methodDescriptor_ProductService_getAll = new grpc.web.MethodDescriptor(
  '/package.ProductService/getAll',
  grpc.web.MethodType.UNARY,
  proto.package.Nothing,
  proto.package.ProductCollection,
  /**
   * @param {!proto.package.Nothing} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.package.ProductCollection.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.package.Nothing,
 *   !proto.package.ProductCollection>}
 */
const methodInfo_ProductService_getAll = new grpc.web.AbstractClientBase.MethodInfo(
  proto.package.ProductCollection,
  /**
   * @param {!proto.package.Nothing} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.package.ProductCollection.deserializeBinary
);


/**
 * @param {!proto.package.Nothing} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.package.ProductCollection)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.package.ProductCollection>|undefined}
 *     The XHR Node Readable Stream
 */
proto.package.ProductServiceClient.prototype.getAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/package.ProductService/getAll',
      request,
      metadata || {},
      methodDescriptor_ProductService_getAll,
      callback);
};


/**
 * @param {!proto.package.Nothing} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.package.ProductCollection>}
 *     Promise that resolves to the response
 */
proto.package.ProductServicePromiseClient.prototype.getAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/package.ProductService/getAll',
      request,
      metadata || {},
      methodDescriptor_ProductService_getAll);
};


module.exports = proto.package;

