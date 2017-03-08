#!/usr/bin/env node

//gets version obj from process global obj
let pro = process.versions;
console.log(`This is the process global obj:`, pro);

//ES6 deconstr : pulls targeted keys out of obj
let { node, v8 } = process.versions;
console.log(`my Node versions: ${node}\nmy V8 version ${v8}`);
