#!/usr/bin/env bash

WALLET=0x8d3c63a5121d346642e83b69a57a959abfb73812

GPU_FORCE_64BIT_PTR=1
#GPU_MAX_HEAP_SIZE=100
#GPU_USE_SYNC_OBJECTS=1
GPU_MAX_ALLOC_PERCENT=100
#GPU_SINGLE_ALLOC_PERCENT=100

/home/claymore/ethdcrminer64 -mode 1 -epool eth-eu1.nanopool.org:9999 -ewal $WALLET -epsw x -dport -3333>/ethdcrminer.log &
sleep 60
nodejs process.js
