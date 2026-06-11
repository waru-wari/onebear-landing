const http=require('http'),fs=require('fs'),path=require('path');
const root=__dirname;
const types={'.html':'text/html','.svg':'image/svg+xml','.ttf':'font/ttf','.woff2':'font/woff2','.css':'text/css','.js':'text/javascript','.png':'image/png','.webp':'image/webp','.mp4':'video/mp4','.ico':'image/x-icon'};
http.createServer((req,res)=>{
  let p=decodeURIComponent(req.url.split('?')[0]);
  if(p==='/'||p==='')p='/index.html';
  else if(p.endsWith('/'))p+='index.html';
  else if(!path.extname(p))p+='/index.html'; // cleanUrls: /hero-b → hero-b/index.html
  const fp=path.join(root,p);
  fs.readFile(fp,(e,d)=>{ if(e){res.writeHead(404);res.end('404');return;}
    res.writeHead(200,{'Content-Type':types[path.extname(fp)]||'application/octet-stream'}); res.end(d); });
}).listen(4599,()=>console.log('listening 4599'));
