const http = require('http');

http.createServer((request, response) => {
  //   let body = [];
  //   request.on('error', (err) => {
  //     console.log(err);
  //   }).on('data', (chunk) => {
  //     body.push(chunk.toString());
  //   }).on('end', () => {
  //     body = Buffer.concat(body).toString();
  //     console.log('body:', body);
  //     response.writeHead(200, { 'Content-type': 'text/html' });
  //     response.end(' Hello world\n');
  //   })
  console.log('request received');
  console.log(request.headers);
  response.setHeader('Content-type', 'text/html');
  response.setHeader('X-Foo', 'bar');
  response.writeHead(200, { 'Content-type': 'text/plain' })
  response.end(
    `<html name=a>
      <head>
      <style>
      body div #myid{
          width:100px;
          background-color:#ff5000;
      }
      body div img{
          width:30px;
          background-color:#ff1111;
      }
      </style>
      </head>
      <body>
       <div>
        <img id='myid'/>
        <img />
       </div>
      </body>
      <html/>
      `
  )
}).listen(9229);

console.log('server started');