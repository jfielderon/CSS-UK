const fs=require('fs');
fs.rmSync('dist',{recursive:true,force:true});
fs.mkdirSync('dist/public',{recursive:true});
for(const f of fs.readdirSync('.')){
  if(/\.(html|css|js)$/.test(f)&&f!=='build.js') fs.copyFileSync(f,'dist/'+f);
}
fs.cpSync('public','dist/public',{recursive:true});
const b64=fs.readFileSync('public/css-logo-final.b64','utf8').replace(/\s+/g,'');
fs.writeFileSync('dist/public/css-logo.png',Buffer.from(b64,'base64'));
