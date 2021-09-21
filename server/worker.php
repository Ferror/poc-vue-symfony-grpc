<?php
use Ferror\EchoService;
use Ferror\Service\EchoInterface;
use Spiral\Goridge\StreamRelay;
use Spiral\GRPC\Server;
use Spiral\RoadRunner\Worker;

require 'vendor/autoload.php';

$server = new Server(null, ['debug' => false]);

$server->registerService(EchoInterface::class, new EchoService());

$worker = new Worker(new StreamRelay(STDIN, STDOUT));

$server->serve($worker);
