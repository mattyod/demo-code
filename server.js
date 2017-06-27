const http = require('http');
const config = require('./config');
const fs = require('fs');

const { host, port } = config;

const sendpage = (req, res) => {
  const htmlPage = fs.readFileSync(`${process.cwd()}/index.html`);

  res.writeHead(200, {
    'Content-Type': 'text/html',
  });
  res.end(htmlPage);
};

const sendscript = (req, res) => {
  const jsfile = fs.readFileSync(`${process.cwd()}/lib/app.js`);

  res.writeHead(200, {
    'Content-Type': 'application/javascript',
  });
  res.end(jsfile);
};

const sendfavicon = (req, res) => {
  const favicon = fs.readFileSync(`${process.cwd()}/favicon.ico`);

  res.writeHead(200, {
    'Content-Type': 'image/x-icon',
  });
  res.end(favicon);
};

const senddata = (req, res) => {
  const data = fs.readFileSync(`${process.cwd()}/static/data.json`);

  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  res.end(data);
};

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      sendpage(req, res);
      break;
    case '/lib/app.js':
      sendscript(req, res);
      break;
    case '/favicon.ico':
      sendfavicon(req, res);
      break;
    case '/static/data.json':
      senddata(req, res);
      break;
    default:
      res.writeHead(404, {
        'Content-Type': 'text/plain',
      });
      res.end('unknown');
  }
});

server.listen(port, host, () => {
  process.stdout.write(`Server running at http://${host}:${port}/\n`);
});
