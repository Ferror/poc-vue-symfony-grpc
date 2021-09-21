<?php
use Spiral\Goridge\StreamRelay;
use Spiral\GRPC\Server;
use Spiral\RoadRunner\Worker;

require dirname(__DIR__) . '/vendor/autoload.php';

$server = new Server(null, [
    'debug' => false, // optional (default: false)
]);

$worker = \method_exists(Worker::class, 'create')
    // RoadRunner >= 2.x
    ?
    // RoadRunner 1.x
    : new Worker(new StreamRelay(STDIN, STDOUT))
;

$server->serve($worker);
