<?php
namespace Ferror;

use Ferror\GRPC\Product\EchoInterface;
use Ferror\GRPC\Product\Message;
use Spiral\GRPC\ContextInterface;

class EchoService implements EchoInterface
{
    public function Ping(ContextInterface $ctx, Message $in): Message
    {
        $out = new Message();
        return $out->setMsg(strtoupper($in->getMsg()));
    }
}
