# Claymore Ethereum GPU benchmark

Runs Claymore and checks result to measure GPU hashrate

# Usage

## Running with NVidia GPUs

Requirements:
- NVidia Docker 2 installed

```bash
docker run --runtime=nvidia --rm -it sonm/benchmark-gpu-eth
```

## Running with AMD GPUs

Requirements:
- AMD drivers installed

```bash
docker run --device /dev/dri:/dev/dri --rm -it sonm/benchmark-gpu-eth
```

