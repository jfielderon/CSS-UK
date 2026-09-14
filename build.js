const fs=require('fs');
fs.rmSync('dist',{recursive:true,force:true});
fs.mkdirSync('dist/public',{recursive:true});
for(const f of fs.readdirSync('.')){
  if(/\.(html|css|js)$/.test(f)&&f!=='build.js') fs.copyFileSync(f,'dist/'+f);
}
fs.cpSync('public','dist/public',{recursive:true});
