/**
 *
 *
 * @module copy-files
 *
 * Created by Evgeniy Malyarov on 21.11.2018.
 */

const path = require('path');
const fs = require('fs');
const lpath = path.resolve(__dirname, '.');
const rpath = path.resolve(__dirname, './src');;
const {dependencies} = require(path.resolve(__dirname, '../package.json'));
const libs = Object.keys(dependencies).filter(v => /^metadata-/.test(v));

function fromDir(startPath, filter, callback) {

  if(!fs.existsSync(startPath)) {
    console.log('no dir ', startPath);
    return;
  }

  const files = fs.readdirSync(startPath);
  for (let i = 0; i < files.length; i++) {
    const filename = path.join(startPath, files[i]);
    if(/node_modules/.test(filename)){
      continue;
    }
    const stat = fs.lstatSync(filename);
    if(stat.isDirectory()) {
      fromDir(filename, filter, callback); //recurse
    }
    else if(filter.test(filename)) callback(filename);
  };
};

let copied;
let i = 0;
fromDir(rpath, /\.(css|md)$/, (rname) => {
  const name = rname.replace(rpath, '');
  const lame = path.join(lpath, name);
  if(!fs.existsSync(lame) || (md5File.sync(rname) != md5File.sync(lame))){
    i++;
    fs.createReadStream(rname).pipe(fs.createWriteStream(lame));
  }
});
if(i){
  copied = true;
  console.log(`from ${rpath} written ${i} files`);
}
if(!copied){
  console.log(`all files match`);
}

console.log('copy-files');
