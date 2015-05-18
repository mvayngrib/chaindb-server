
var leveldown = require('leveldown')
var conf = require('./conf/config')
var express = require('express')
var app = express()
var ChainDB = require('chaindb')
var chaindb = new ChainDB({
  block: 330399,
  path: './test.db',
  networkName: 'testnet',
  leveldown: leveldown
})

chaindb.run()

app.set('chaindb', chaindb)

require('./routes')(app)

var server = app.listen(conf.port || 12345)
