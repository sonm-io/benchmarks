
function GetClaymoreStat(cb) {
  var client = new require('net').Socket();
  client.connect(3333, '127.0.0.1', function() {
    client.write('{"id":0, "jsonrpc":"2.0", "method":"miner_getstat1"}');
  });
  client.on('data', function(data) {
    data = JSON.parse(data);
    cb( data.result[3].split(";") );
});}


function run_cmd(cmd, args, cb) {
    var spawn = require('child_process').spawn,
        child = spawn(cmd, args),
        result = '';
    child.stdout.on('data', function (buffer) { result += buffer.toString() });
    child.stdout.on('end', function() { cb(result); });
}

function GetDevices(cb) {
  run_cmd('bash',['-c','clinfo | grep "Device Topology"'], function(data) {
    var re = new RegExp('[0-9:\.]+$','mg');
    var result = [];
    var m;
    while (m = re.exec(data)) {
      result.push(m[0]);
    }
    cb(result);
  });
}


function exit(data) {
  data.benchmark = 'eth';
  data.type = 'gpu';
  console.log(JSON.stringify(data));
  var errcode = data.error ? 1 : 0;
  process.exit(errcode);
}

GetClaymoreStat(function(hrs) {
  GetDevices(function(devs) {
    if (devs.length != hrs.length) {
      exit({error: 'Claymore and clinfo provided different GPU count'});
    }
    var gpus = hrs.map( function(hr, i) {
      return {pci_id: devs[i], value: hr};
    } );
    exit( {gpus: gpus} );
  });
});
