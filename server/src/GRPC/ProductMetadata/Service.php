<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: server/service.proto

namespace Ferror\GRPC\ProductMetadata;

class Service
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        $pool->internalAddGeneratedFile(hex2bin(
            "0aab010a147365727665722f736572766963652e70726f746f1207736572" .
            "7669636522160a074d657373616765120b0a036d73671801200128093234" .
            "0a044563686f122c0a0450696e6712102e736572766963652e4d65737361" .
            "67651a102e736572766963652e4d65737361676522004234ca0213466572" .
            "726f725c475250435c50726f64756374e2021b466572726f725c47525043" .
            "5c50726f647563744d65746164617461620670726f746f33"
        ));

        static::$is_initialized = true;
    }
}
