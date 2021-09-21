<?php
use Ferror\GRPC\Product\EchoInterface;
use Spiral\Goridge\StreamRelay;
use Spiral\GRPC\Server;
use Spiral\RoadRunner\Worker;

require_once 'vendor/autoload.php';

$server = new Server(null, ['debug' => false]);

$server->registerService(EchoInterface::class, new \Ferror\EchoService());

$worker = new Worker(new StreamRelay(STDIN, STDOUT));

$server->serve($worker);
