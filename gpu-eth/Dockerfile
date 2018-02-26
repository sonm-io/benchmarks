FROM sonm/opencl

RUN DEBIAN_FRONTEND=noninteractive apt-get -qq update && \
   apt-get install -y curl libcurl3 nodejs && \
   apt-get -yqq clean && \
   rm -rf /var/lib/apt/lists/*

ENV CLAYMORE_VERSION="9.8"

RUN mkdir /home/claymore && cd /home/claymore && \
    curl -Lks https://github.com/nanopool/Claymore-Dual-Miner/releases/download/v${CLAYMORE_VERSION}/Claymore.s.Dual.Ethereum.Decred_Siacoin_Lbry_Pascal.AMD.NVIDIA.GPU.Miner.v${CLAYMORE_VERSION}.-.LINUX.tar.gz \
    | tar zxvf -

COPY entrypoint.sh /
COPY process.js /
ENTRYPOINT ["/entrypoint.sh"]
