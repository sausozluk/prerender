#!/usr/bin/env node
var prerender = require('prerender');

var server = prerender({
  workers: process.env.PRERENDER_NUM_WORKERS,
  iterations: process.env.PRERENDER_NUM_ITERATIONS,
  pageDoneCheckTimeout: 50,
  waitAfterLastRequest: 1,
  jsCheckTimeout: 50,
  noJsExecutionTimeout: 50,
  evaluateJavascriptCheckTimeout: 50
});

server.use(prerender.sendPrerenderHeader());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());

server.start();