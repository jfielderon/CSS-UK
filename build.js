const fs=require('fs');
fs.rmSync('dist',{recursive:true,force:true});
fs.mkdirSync('dist/public',{recursive:true});
for(const f of fs.readdirSync('.')){
  if(/\.(html|css|js)$/.test(f)&&f!=='build.js') fs.copyFileSync(f,'dist/'+f);
}
fs.cpSync('public','dist/public',{recursive:true});
const logoB64=[1,2,3,4,5].map(n=>fs.readFileSync(`public/logo.part${n}`,'utf8').trim()).join('');
fs.writeFileSync('dist/public/css-logo.png',Buffer.from(logoB64,'base64'));
