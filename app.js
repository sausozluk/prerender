var prerender = require('prerender');

var server = prerender({
  waitAfterLastRequest: 50
});

server.use(prerender.sendPrerenderHeader());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());

server.start();